const VALUES = [
  {
    title: "Fabric first",
    body: "We start with touch and drape — cottons, merinos, and linens chosen for how they feel after a hundred wears.",
  },
  {
    title: "Cut for living",
    body: "Silhouettes that move with you. Room where you need it, structure where it counts.",
  },
  {
    title: "Fewer, better",
    body: "A focused edit. Pieces that stack, swap, and stay in rotation season after season.",
  },
]

export default function Values() {
  return (
    <section className="bg-white">
      <div className="content-container py-16 small:py-24">
        <div className="mb-12 max-w-xl">
          <p className="mb-2 text-xs uppercase tracking-[0.18em] text-parak-slate/50">
            Approach
          </p>
          <h2 className="font-display text-2xl small:text-3xl tracking-tight text-parak-ink">
            How we build a wardrobe
          </h2>
        </div>

        <ul className="grid grid-cols-1 small:grid-cols-3 gap-10 small:gap-12">
          {VALUES.map((value, index) => (
            <li key={value.title} className="border-t border-parak-stone pt-6">
              <p className="mb-4 font-display text-sm text-parak-slate/40">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="font-display text-xl tracking-tight text-parak-ink mb-3">
                {value.title}
              </h3>
              <p className="text-sm leading-relaxed text-parak-slate/65">
                {value.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
