import { Reveal, SectionHeading } from "./primitives";
import { books } from "./site-data";

export function Showcase() {
  return (
    <section id="showcase" className="bg-ink text-cream">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="border-cream/40 text-cream inline-flex rounded-full border-2 px-4 py-1.5 text-xs font-semibold tracking-[0.14em] uppercase">
              From Our Catalogue
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 text-3xl leading-[1.1] text-balance sm:text-4xl lg:text-[2.9rem]">
              Collingwood Press <span className="text-primary italic">Presents</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-cream/70 mx-auto mt-4 max-w-2xl text-base leading-relaxed text-pretty sm:text-lg">
              Three recent titles, taken from manuscript to bookshop by the same team that would
              take yours.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {books.map((book, i) => (
            <Reveal key={book.title} delay={i * 0.1} className="h-full">
              <article className="group flex h-full flex-col">
                <div className="border-cream/25 overflow-hidden rounded-2xl border-2">
                  <img
                    src={book.cover}
                    alt={`Cover of ${book.title} by ${book.author}`}
                    loading="lazy"
                    width={704}
                    height={1056}
                    className="h-auto w-full transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </div>
                <span className="text-primary mt-5 text-[0.65rem] font-semibold tracking-[0.2em] uppercase">
                  {book.genre}
                </span>
                <h3 className="mt-2 text-xl leading-tight">{book.title}</h3>
                <p className="text-cream/60 mt-1 text-sm">by {book.author}</p>
                <p className="text-cream/75 mt-3 flex-1 text-sm leading-relaxed text-pretty">
                  {book.blurb}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
