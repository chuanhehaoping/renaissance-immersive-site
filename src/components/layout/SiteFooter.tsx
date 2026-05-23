export function SiteFooter() {
  return (
    <footer className="relative z-10 border-t border-ink/10 bg-warm-white/70 py-12">
      <div className="mx-auto flex max-w-editorial flex-col gap-6 px-6 md:flex-row md:items-end md:justify-between md:px-10">
        <div>
          <p className="font-display text-2xl text-ink">Atelier Lunes</p>
          <p className="mt-2 text-xs uppercase tracking-roman text-ink-soft">
            A quiet renaissance · MMXXVI
          </p>
        </div>
        <div className="grid grid-cols-2 gap-x-10 gap-y-2 text-sm text-ink-soft md:grid-cols-3">
          <a href="#philosophy" className="hover:text-gold">
            Philosophy
          </a>
          <a href="#collection" className="hover:text-gold">
            Collection
          </a>
          <a href="#craft" className="hover:text-gold">
            Craft
          </a>
          <a href="#experience" className="hover:text-gold">
            Experience
          </a>
          <a href="#gallery" className="hover:text-gold">
            Gallery
          </a>
          <a href="#final-cta" className="hover:text-gold">
            Correspondence
          </a>
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-editorial px-6 text-[0.7rem] uppercase tracking-roman text-ink-soft/70 md:px-10">
        This is a fictional brand experience built as a craft exercise. No commercial affiliation
        with any existing house.
      </p>
    </footer>
  );
}
