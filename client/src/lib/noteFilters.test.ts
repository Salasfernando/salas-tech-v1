import { describe, expect, it } from "vitest";
import {
  buildCategoryUrl,
  buildNoteUrl,
  filterArticles,
  getNoteFilterFromSearch,
} from "./noteFilters";

const articles = [
  { category: "REACT / FUNDAMENTOS", title: "Tipagem" },
  { category: "SEO / NEXT.JS", title: "Descoberta" },
  { category: "CARREIRA / PROCESSO", title: "Transição" },
];

describe("note filters and shareable links", () => {
  it("reads a valid category and safely falls back to Todas", () => {
    expect(getNoteFilterFromSearch("?categoria=React")).toBe("React");
    expect(getNoteFilterFromSearch("?categoria=nao-existe")).toBe("Todas");
  });

  it("filters articles by category prefix", () => {
    expect(filterArticles(articles, "React")).toHaveLength(1);
    expect(filterArticles(articles, "SEO")[0].title).toBe("Descoberta");
    expect(filterArticles(articles, "Todas")).toHaveLength(3);
  });

  it("preserves route and hash while updating the category URL", () => {
    expect(
      buildCategoryUrl(
        "https://salastech.com.br/?utm_source=share#artigos",
        "React",
      ),
    ).toBe("/?utm_source=share&categoria=React#artigos");
    expect(
      buildCategoryUrl(
        "https://salastech.com.br/?categoria=React#artigos",
        "Todas",
      ),
    ).toBe("/#artigos");
  });

  it("builds a canonical individual note link", () => {
    expect(
      buildNoteUrl(
        "https://www.salastech.com.br/",
        "acessibilidade-na-pratica",
      ),
    ).toBe("https://www.salastech.com.br/notas/acessibilidade-na-pratica");
  });
});
