import LocalizedClientLink from "@modules/common/components/localized-client-link"

export default function AboutClosing() {
  return (
    <section className="relative overflow-hidden bg-parak-slate text-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgba(242,242,240,0.08) 0%, transparent 45%), linear-gradient(to top, rgba(20,20,20,0.55), transparent 60%)",
        }}
        aria-hidden
      />
      <div className="relative content-container flex min-h-[40vh] flex-col justify-center py-20 small:py-28">
        <p className="font-display text-[clamp(2rem,5vw,3.75rem)] leading-[1.05] tracking-tight max-w-2xl">
          Wear less.
          <br />
          Wear better.
        </p>
        <p className="mt-5 max-w-md text-base text-white/65 leading-relaxed">
          Browse the full edit — or start with a single piece that earns its
          place.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <LocalizedClientLink
            href="/store"
            className="inline-flex items-center justify-center bg-white px-7 py-3 text-sm font-medium text-parak-ink transition-colors duration-300 hover:bg-parak-mist"
          >
            Shop all
          </LocalizedClientLink>
          <LocalizedClientLink
            href="/"
            className="inline-flex items-center justify-center border border-white/30 px-7 py-3 text-sm text-white transition-colors duration-300 hover:border-white"
          >
            Back home
          </LocalizedClientLink>
        </div>
      </div>
    </section>
  )
}
