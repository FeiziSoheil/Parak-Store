import LocalizedClientLink from "@modules/common/components/localized-client-link"

export default function SaleBanner() {
  return (
    <section className="bg-parak-ink text-white">
      <div className="content-container flex flex-col small:flex-row small:items-end small:justify-between gap-8 py-14 small:py-16">
        <div className="max-w-lg">
          <p className="mb-3 text-xs uppercase tracking-[0.18em] text-white/45">
            Limited run
          </p>
          <h2 className="font-display text-3xl small:text-4xl tracking-tight leading-tight">
            Pieces marked down — while they last
          </h2>
          <p className="mt-4 text-sm text-white/60 leading-relaxed">
            End-of-season essentials and last sizes, still cut from the same
            fabrics.
          </p>
        </div>
        <LocalizedClientLink
          href="/store"
          className="inline-flex w-fit items-center justify-center bg-white px-7 py-3 text-sm font-medium text-parak-ink transition-colors duration-300 hover:bg-parak-mist"
        >
          Shop sale
        </LocalizedClientLink>
      </div>
    </section>
  )
}
