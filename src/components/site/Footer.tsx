import { navLinks, platforms } from "./site-data";

const columns = [
  {
    title: "Services",
    links: ["Manuscript Editing", "Cover Design", "Interior Typesetting", "Ebook Conversion", "Distribution"],
  },
  {
    title: "Company",
    links: ["About Collingwood", "Our Project Managers", "Published Titles", "Author Reviews", "Contact"],
  },
  {
    title: "Resources",
    links: ["Publishing FAQ", "Manuscript Checklist", "Cover Design Guide", "ISBN & Metadata", "Royalties Explained"],
  },
];

export function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div>
            <div className="flex items-center gap-3">
              <span
                aria-hidden
                className="border-cream/40 font-display grid h-10 w-10 shrink-0 place-items-center rounded-xl border-2 text-lg"
              >
                C
              </span>
              <span className="font-display text-lg font-bold">Collingwood Press</span>
            </div>
            <p className="text-cream/65 mt-4 max-w-sm text-sm leading-relaxed">
              An independent publishing services house preparing authors&rsquo; manuscripts for
              bookshops, libraries and retail listings worldwide.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {platforms.map((p) => (
                <li
                  key={p}
                  className="border-cream/25 text-cream/75 rounded-full border px-3 py-1 text-xs"
                >
                  {p}
                </li>
              ))}
            </ul>
          </div>

          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h2 className="text-xs font-semibold tracking-[0.18em] uppercase">{col.title}</h2>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l}>
                    <a
                      href={navLinks.find((n) => l.includes(n.label))?.href ?? "#contact"}
                      className="text-cream/65 hover:text-cream text-sm transition-colors"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="border-cream/15 mt-12 flex flex-col gap-4 border-t pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-cream/55 text-xs">
            © {new Date().getFullYear()} Collingwood Press. All rights reserved.
          </p>
          <p className="text-cream/55 text-xs">
            Registered in England &amp; Wales · Member of the Independent Publishers Guild
          </p>
        </div>
      </div>
    </footer>
  );
}
