import LocalizedClientLink from "@modules/common/components/localized-client-link"

export default function Editorial() {
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
      <div className="relative content-container flex min-h-[42vh] flex-col justify-center py-20 small:py-28">
        <p className="font-display text-[clamp(2rem,5vw,3.75rem)] leading-[1.05] tracking-tight max-w-2xl">
          Less noise.
          <br />
          Better pieces.
        </p>
        <p className="mt-5 max-w-md text-base text-white/65 leading-relaxed">
          A focused wardrobe of fabrics and fits that work together — nothing
          extra, nothing loud.
        </p>
        <LocalizedClientLink
          href="/store"
          className="mt-10 inline-flex w-fit items-center gap-3 border-b border-white/40 pb-1 text-sm tracking-wide transition-colors duration-300 hover:border-white"
        >
          Browse the store
          <span aria-hidden>→</span>
        </LocalizedClientLink>
      </div>
    </section>
  )
}
