export default function StatementBand() {
  return (
    <section className="overflow-hidden border-y border-parak-stone bg-white py-8 small:py-10">
      <div className="flex animate-marquee whitespace-nowrap">
        {Array.from({ length: 2 }).map((_, copy) => (
          <p
            key={copy}
            className="flex shrink-0 items-center gap-10 px-5 font-display text-2xl small:text-3xl tracking-tight text-parak-ink/80"
            aria-hidden={copy === 1}
          >
            {[
              "Quiet fabrics",
              "Honest cuts",
              "Everyday ease",
              "Made to last",
              "Less noise",
              "Better pieces",
            ].map((phrase) => (
              <span key={`${copy}-${phrase}`} className="inline-flex items-center gap-10">
                {phrase}
                <span className="text-parak-stone">·</span>
              </span>
            ))}
          </p>
        ))}
      </div>
    </section>
  )
}
