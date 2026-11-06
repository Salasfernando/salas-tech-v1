import fs from "node:fs";
import path from "node:path";
import { describe, expect, test } from "vitest";
import { notesContent } from "@/data/notesContent";
import { orderedProjectKeys } from "@/data/projects";

const srcRoot = path.resolve(process.cwd(), "client/src");
function tsxFiles(directory: string): string[] {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(directory, entry.name);
    return entry.isDirectory()
      ? tsxFiles(fullPath)
      : fullPath.endsWith(".tsx")
        ? [fullPath]
        : [];
  });
}

const files = tsxFiles(srcRoot);
const source = files.map((file) => fs.readFileSync(file, "utf8")).join("\n");

describe("acessibilidade, segurança, SEO e modularização estrutural", () => {
  test("imagens JSX informativas têm alt não vazio e decorativas têm aria-hidden", () => {
    const images = source.match(/<img\b[\s\S]*?\/>/g) || [];
    expect(images.length).toBeGreaterThan(0);
    for (const image of images) {
      const isDecorative = /\baria-hidden=["']true["']/.test(image);
      if (isDecorative) {
        expect(image).toMatch(/\balt=""/);
        continue;
      }
      const altMatch = image.match(/\balt=(?:"([^"]*)"|'([^']*)'|\{([^}]+)\})/);
      const alt = altMatch?.[1] || altMatch?.[2] || altMatch?.[3];
      expect(alt?.trim().length, `imagem sem alt: ${image}`).toBeGreaterThan(0);
    }
  });

  test("controles de ícone críticos têm rótulo acessível e botões nas páginas declaram type explícito", () => {
    expect(source).toContain('className="menu-button"');
    expect(source).toContain("Abrir menu");
    expect(source).toContain('className="code-modal-close"');
    expect(source).toContain('aria-label="Fechar exemplo de código"');
    expect(source).toContain(
      'aria-label="Falar com a Salas Tech pelo WhatsApp"',
    );

    const pagesDir = path.resolve(process.cwd(), "client/src/pages");
    const pageSource = fs
      .readdirSync(pagesDir)
      .filter((name) => name.endsWith(".tsx"))
      .map((name) => fs.readFileSync(path.join(pagesDir, name), "utf8"))
      .join("\n");
    const buttons = pageSource.match(/<button\b[^>]*>/g) || [];
    expect(buttons.length).toBeGreaterThan(0);
    for (const btn of buttons) {
      expect(btn, `botão sem type explícito: ${btn}`).toMatch(
        /\btype=["'](?:button|submit|reset)["']/,
      );
    }
  });

  test("a folha global e os módulos de estilo preservam foco visível, skip-link e movimento reduzido", () => {
    const css = fs.readFileSync(
      path.resolve(process.cwd(), "client/src/index.css"),
      "utf8",
    );
    const stylesDir = path.resolve(process.cwd(), "client/src/styles");
    const modularStyles = [
      fs.readFileSync(
        path.resolve(process.cwd(), "client/src/motion.css"),
        "utf8",
      ),
      ...fs
        .readdirSync(stylesDir)
        .filter((name) => name.endsWith(".css"))
        .map((name) => fs.readFileSync(path.join(stylesDir, name), "utf8")),
    ].join("\n");

    expect(css).toMatch(/:focus-visible/);
    expect(css).toMatch(/prefers-reduced-motion/);
    expect(modularStyles).toMatch(/\.skip-link:focus-visible/);
    expect(modularStyles).toMatch(/prefers-reduced-motion:\s*reduce/);
  });

  test("links externos com target=_blank incluem rel=noopener noreferrer e não há dangerouslySetInnerHTML nas páginas", () => {
    const externalLinks =
      source.match(/<a\b[^>]*target=["']_blank["'][^>]*>/g) || [];
    expect(externalLinks.length).toBeGreaterThan(0);
    for (const link of externalLinks) {
      expect(
        link,
        `link externo sem rel="noopener noreferrer": ${link}`,
      ).toMatch(/rel=["']noopener noreferrer["']/);
    }

    const pagesDir = path.resolve(process.cwd(), "client/src/pages");
    for (const pageFile of fs
      .readdirSync(pagesDir)
      .filter((name) => name.endsWith(".tsx"))) {
      const content = fs.readFileSync(path.join(pagesDir, pageFile), "utf8");
      expect(content).not.toContain("dangerouslySetInnerHTML");
      expect(content).not.toContain("eval(");
    }
  });

  test("todas as páginas de rota possuem SeoHead configurado e estão modularizadas", () => {
    const pagesDir = path.resolve(process.cwd(), "client/src/pages");
    const pageFiles = fs
      .readdirSync(pagesDir)
      .filter((name) => name.endsWith(".tsx"));
    expect(pageFiles.length).toBeGreaterThanOrEqual(15);
    for (const pageFile of pageFiles) {
      const content = fs.readFileSync(path.join(pagesDir, pageFile), "utf8");
      const lineCount = content.split(/\r?\n/).length;
      expect(content, `${pageFile} sem <SeoHead`).toContain("<SeoHead");
      expect(content, `${pageFile} sem jsonLd`).toContain("jsonLd=");
      expect(
        lineCount,
        `${pageFile} excede 660 linhas (${lineCount})`,
      ).toBeLessThanOrEqual(660);
    }
  });

  test("sitemap.xml e robots.txt estão sincronizados com todos os projetos e notas dos módulos de dados", () => {
    const sitemap = fs.readFileSync(
      path.resolve(process.cwd(), "client/public/sitemap.xml"),
      "utf8",
    );
    const robots = fs.readFileSync(
      path.resolve(process.cwd(), "client/public/robots.txt"),
      "utf8",
    );
    for (const projectSlug of orderedProjectKeys) {
      expect(sitemap).toContain(
        `<loc>https://www.salastech.com.br/projetos/${projectSlug}</loc>`,
      );
    }
    for (const noteSlug of Object.keys(notesContent)) {
      expect(sitemap).toContain(
        `<loc>https://www.salastech.com.br/notas/${noteSlug}</loc>`,
      );
    }
    expect(sitemap).toContain("<lastmod>2026-11-05</lastmod>");
    expect(sitemap).not.toContain("salastech.vercel.app");
    expect(robots).toContain("Disallow: /404");
    expect(robots).toContain("Disallow: /manutencao");
    expect(robots).toContain(
      "Sitemap: https://www.salastech.com.br/sitemap.xml",
    );
  });

  test("headers de segurança em server/app.ts e vercel.json estão sincronizados", () => {
    const serverApp = fs.readFileSync(
      path.resolve(process.cwd(), "server/app.ts"),
      "utf8",
    );
    const vercelConfig = fs.readFileSync(
      path.resolve(process.cwd(), "vercel.json"),
      "utf8",
    );
    for (const header of [
      "Content-Security-Policy",
      "Strict-Transport-Security",
      "X-Frame-Options",
      "X-Content-Type-Options",
      "Referrer-Policy",
      "Permissions-Policy",
      "Cross-Origin-Opener-Policy",
      "X-Permitted-Cross-Domain-Policies",
    ]) {
      expect(serverApp).toContain(header);
      expect(vercelConfig).toContain(header);
    }
    expect(serverApp).toContain("https://app.salastech.com.br");
    expect(vercelConfig).toContain("https://app.salastech.com.br");
  });
});
