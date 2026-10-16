export const noteFilters = [
  "Todas",
  "React",
  "Next.js",
  "Node",
  "Carreira",
  "UI",
  "SEO",
  "Firebase",
  "Vercel",
] as const;
export type NoteFilter = (typeof noteFilters)[number];

export function getNoteFilterFromSearch(search: string): NoteFilter {
  const requested = new URLSearchParams(search).get("categoria");
  return noteFilters.includes(requested as NoteFilter)
    ? (requested as NoteFilter)
    : "Todas";
}

export function filterArticles<T extends { category: string }>(
  articles: T[],
  filter: NoteFilter,
) {
  return filter === "Todas"
    ? articles
    : articles.filter((article) =>
        article.category.startsWith(filter.toUpperCase()),
      );
}

export function buildCategoryUrl(currentHref: string, filter: NoteFilter) {
  const url = new URL(currentHref);
  if (filter === "Todas") url.searchParams.delete("categoria");
  else url.searchParams.set("categoria", filter);
  return `${url.pathname}${url.search}${url.hash}`;
}

export function buildNoteUrl(siteUrl: string, slug: string) {
  return `${siteUrl.replace(/\/$/, "")}/notas/${slug}`;
}
