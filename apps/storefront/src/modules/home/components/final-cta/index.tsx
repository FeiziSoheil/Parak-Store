import LocalizedClientLink from "@modules/common/components/localized-client-link"

export default function FinalCta() {
  return (
    <section className="bg-parak-slate text-white">
      <div className="content-container flex flex-col items-start small:items-center small:text-center py-20 small:py-28">
        <h2 className="font-display text-[clamp(2.25rem,5vw,4rem)] tracking-tight leading-[1.05] max-w-2xl">
          Ready when you are
        </h2>
        <p className="mt-5 max-w-md text-sm text-white/60 leading-relaxed">
          Browse the full edit — tees, layers, trousers, and the quiet pieces
          in between.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <LocalizedClientLink
            href="/store"
            className="inline-flex items-center justify-center bg-white px-7 py-3 text-sm font-medium text-parak-ink transition-colors duration-300 hover:bg-parak-mist"
          >
            Shop all
          </LocalizedClientLink>
          <LocalizedClientLink
            href="/account"
            className="inline-flex items-center justify-center border border-white/30 px-7 py-3 text-sm text-white transition-colors duration-300 hover:border-white"
          >
            Your account
          </LocalizedClientLink>
        </div>
      </div>
    </section>
  )
}
