export default function AboutStory() {
  return (
    <section id="story" className="scroll-mt-20 bg-white">
      <div className="content-container py-20 small:py-28">
        <p className="mb-3 text-xs uppercase tracking-[0.18em] text-parak-slate/50 opacity-0 animate-soft-reveal">
          Our story
        </p>
        <h2
          className="font-display text-[clamp(1.75rem,4vw,3rem)] tracking-tight text-parak-ink leading-[1.15] max-w-3xl opacity-0 animate-soft-reveal"
          style={{ animationDelay: "80ms" }}
        >
          We started Parak to make clothes that disappear into your week —
          soft, reliable, and free of noise.
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-8 small:grid-cols-2 small:gap-16 max-w-4xl">
          <p
            className="text-sm small:text-base leading-relaxed text-parak-slate/65 opacity-0 animate-soft-reveal"
            style={{ animationDelay: "160ms" }}
          >
            Most wardrobes grow loud and crowded. Ours does the opposite. Every
            silhouette is cut for real movement; every fabric is chosen for how
            it feels on day one hundred, not just day one.
          </p>
          <p
            className="text-sm small:text-base leading-relaxed text-parak-slate/65 opacity-0 animate-soft-reveal"
            style={{ animationDelay: "240ms" }}
          >
            Parak is a focused edit — tees, layers, trousers, and the quiet
            pieces in between. Nothing seasonal for the sake of it. Nothing you
            have to explain.
          </p>
        </div>
      </div>
    </section>
  )
}
