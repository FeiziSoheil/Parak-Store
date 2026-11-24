import LocalizedClientLink from "@modules/common/components/localized-client-link"

export default function SupportClosing() {
  return (
    <section className="bg-parak-slate text-white">
      <div className="content-container flex flex-col items-start small:items-center small:text-center py-16 small:py-24">
        <h2 className="font-display text-[clamp(1.75rem,4vw,3rem)] tracking-tight leading-[1.1] max-w-xl">
          Prefer to check yourself?
        </h2>
        <p className="mt-4 max-w-md text-sm text-white/60 leading-relaxed">
          Your account holds order history, addresses, and return-ready details.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <LocalizedClientLink
            href="/account"
            className="inline-flex items-center justify-center bg-white px-7 py-3 text-sm font-medium text-parak-ink transition-colors duration-300 hover:bg-parak-mist"
          >
            Your account
          </LocalizedClientLink>
          <LocalizedClientLink
            href="/store"
            className="inline-flex items-center justify-center border border-white/30 px-7 py-3 text-sm text-white transition-colors duration-300 hover:border-white"
          >
            Continue shopping
          </LocalizedClientLink>
        </div>
      </div>
    </section>
  )
}
