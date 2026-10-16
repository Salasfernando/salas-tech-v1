import fs from "node:fs";
import path from "node:path";
import { describe, expect, test } from "vitest";

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

describe("acessibilidade estrutural", () => {
  test("imagens JSX têm alt não vazio", () => {
    const images = source.match(/<img\b[^>]*>/g) || [];
    expect(images.length).toBeGreaterThan(0);
    for (const image of images) {
      const altMatch = image.match(/\balt=(?:"([^"]*)"|'([^']*)'|\{([^}]+)\})/);
      const alt = altMatch?.[1] || altMatch?.[2] || altMatch?.[3];
      expect(alt?.trim().length, `imagem sem alt: ${image}`).toBeGreaterThan(0);
    }
  });

  test("controles de ícone críticos têm rótulo acessível", () => {
    expect(source).toContain('className="menu-button"');
    expect(source).toContain('aria-label="Abrir menu"');
    expect(source).toContain('className="code-modal-close"');
    expect(source).toContain('aria-label="Fechar exemplo de código"');
    expect(source).toContain(
      'aria-label="Falar com Fernando Salas pelo WhatsApp"',
    );
    expect(source).toContain("<label>Nome");
    expect(source).toContain("<label>E-mail");
  });

  test("a folha global preserva foco visível e respeito a movimento reduzido", () => {
    const css = fs.readFileSync(
      path.resolve(process.cwd(), "client/src/index.css"),
      "utf8",
    );
    expect(css).toMatch(/:focus-visible/);
    expect(css).toMatch(/prefers-reduced-motion/);
  });
});
