// The machine-readable side of the site: the JSON-LD written into each
// page's head and the llms.txt written at the root. Both are built from the
// same data as the pages, so they cannot say something the pages do not.

const localize = (text, locale) =>
  typeof text === "string" ? text : text[locale];

// The repository behind any GitHub URL, a PR search included.
const repoOf = (url) => url.match(/^https:\/\/github\.com\/[^/]+\/[^/?#]+/)?.[0];

// One project as a schema.org node. Work that belongs to an organization
// (upstream, a team) names it as author and me as contributor.
function projectNode(project, group, locale, person) {
  const author = project.author ?? group.author;
  const url = project.url;
  const node = {
    "@type": url && /github\.com/.test(url) ? "SoftwareSourceCode" : "CreativeWork",
    name: project.title,
    description: project.description[locale],
  };
  if (url) node.url = url;
  const repo = url && repoOf(url);
  if (repo) node.codeRepository = repo;
  if (author) {
    node.author = { "@type": "Organization", name: author.name, url: author.url };
    node.contributor = { "@id": person };
  } else {
    node.author = { "@id": person };
  }
  return node;
}

export function jsonLd(page, { SITE_URL, PROFILES, projectGroups, introText }) {
  const { locale, title, description, alternate } = page;
  const url = SITE_URL + (page.path === "/" ? "/" : page.path);
  const person = `${SITE_URL}/#person`;
  const website = `${SITE_URL}/#website`;
  const home = page.path === "/" || page.path === "/ko";

  const graph = [
    {
      "@type": "WebSite",
      "@id": website,
      url: `${SITE_URL}/`,
      name: "Jioh In",
      alternateName: "인지오",
      inLanguage: ["en", "ko"],
      publisher: { "@id": person },
    },
    {
      "@type": home ? "ProfilePage" : "WebPage",
      "@id": `${url}#webpage`,
      url,
      name: title,
      description,
      inLanguage: locale,
      isPartOf: { "@id": website },
      ...(home ? { mainEntity: { "@id": person } } : {}),
    },
  ];

  if (home) {
    const en = locale === "en";
    graph.push({
      "@type": "Person",
      "@id": person,
      name: en ? "Jioh In" : "인지오",
      alternateName: en ? "인지오" : "Jioh In",
      url: `${SITE_URL}/`,
      image: `${SITE_URL}/og/${locale}.png`,
      sameAs: [PROFILES.github, PROFILES.linkedin],
      email: `mailto:${PROFILES.email}`,
      jobTitle: en ? "Software engineer" : "소프트웨어 엔지니어",
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "University of Michigan",
        url: "https://umich.edu",
      },
      knowsAbout: en
        ? ["Generative UI", "Design systems", "Developer tooling"]
        : ["Generative UI", "Design System", "Developer Tooling"],
      description: introText(locale),
    });
    graph.push({
      "@type": "ItemList",
      "@id": `${url}#projects`,
      name: en ? "Projects" : "프로젝트",
      itemListElement: projectGroups
        .flatMap((group) => [...group.cards, ...(group.rows ?? [])].map((p) => [p, group]))
        .map(([project, group], index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: projectNode(project, group, locale, person),
        })),
    });
  }

  if (alternate === undefined) graph.length = 2; // the 404: site and page only

  const json = JSON.stringify({ "@context": "https://schema.org", "@graph": graph });
  // "<" never appears raw inside a <script> element.
  return `<script type="application/ld+json">${json.replace(/</g, "\\u003c")}</script>`;
}

// llms.txt: the site in one English Markdown page, for fetchers that read
// one file instead of rendering the pages.
export function llmsTxt({ SITE_URL, pages, experiences, projectGroups, introText }) {
  const url = (path) => SITE_URL + (path === "/" ? "/" : path);
  const english = pages.filter((p) => p.locale === "en" && p.alternate !== undefined);
  const korean = pages.filter((p) => p.locale === "ko");
  const period = ({ start, end }) => `${start} – ${end ?? "now"}`;

  const lines = [
    "# Jioh In",
    "",
    `> ${introText("en")}`,
    "",
    "## Pages",
    "",
    ...english.map((p) => `- [${p.title}](${url(p.path)}): ${p.description}`),
    `- Korean: ${korean.map((p) => `[${p.title}](${url(p.path)})`).join(", ")}`,
    "",
    "## Experience",
    "",
    ...experiences.map((e) => {
      const org = localize(e.organization, "en");
      const role = localize(e.role, "en");
      const link = e.link ? `: [${localize(e.link.label, "en")}](${e.link.url})` : "";
      return `- ${org} · ${role} (${e.period})${link}`;
    }),
    "",
    "## Projects",
  ];

  for (const group of projectGroups) {
    const heading = localize(group.title, "en");
    lines.push("", `### ${heading}${group.period ? ` (${period(group.period)})` : ""}`, "");
    if (group.description) lines.push(group.description.en, "");
    for (const p of [...group.cards, ...(group.rows ?? [])]) {
      const name = p.url ? `[${p.title}](${p.url})` : p.title;
      lines.push(`- ${name}: ${p.description.en}`);
    }
    if (group.more) lines.push(`- [${group.more.label.en}](${group.more.url})`);
  }

  lines.push("", "## Resume", "", `- [Full resume (PDF)](${SITE_URL}/resume.pdf)`, "");
  return lines.join("\n");
}
