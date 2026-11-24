const PRINCIPLES = [
  {
    title: "Touch before trend",
    body: "We begin with hand-feel and drape. Cottons, merinos, and linens earn their place only after they pass the hundred-wear test.",
  },
  {
    title: "Fit for living",
    body: "Room where you need it, structure where it counts. Patterns are refined for walking, sitting, and the long middle of a day.",
  },
  {
    title: "A smaller closet",
    body: "We design pieces that stack and swap — a short list that stays in rotation instead of a long list that sits unused.",
  },
]

export default function AboutPrinciples() {
  return (
    <section className="border-y border-parak-stone bg-parak-mist">
      <div className="content-container py-16 small:py-24">
        <div className="mb-12 max-w-xl">
          <p className="mb-2 text-xs uppercase tracking-[0.18em] text-parak-slate/50">
            Principles
          </p>
          <h2 className="font-display text-2xl small:text-3xl tracking-tight text-parak-ink">
            What we will not compromise
          </h2>
        </div>

        <ul className="grid grid-cols-1 small:grid-cols-3 gap-10 small:gap-12">
          {PRINCIPLES.map((item, index) => (
            <li key={item.title} className="border-t border-parak-stone pt-6">
              <p className="mb-4 font-display text-sm text-parak-slate/40">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="font-display text-xl tracking-tight text-parak-ink mb-3">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-parak-slate/65">
                {item.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
