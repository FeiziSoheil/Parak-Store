import Image from "next/image"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

const MATERIALS_IMAGE = "/images/brand/materials.jpg"

export default function Materials() {
  return (
    <section className="bg-white">
      <div className="grid grid-cols-1 small:grid-cols-2 min-h-[520px]">
        <div className="relative min-h-[320px] bg-parak-mist order-2 small:order-1">
          <Image
            src={MATERIALS_IMAGE}
            alt="Soft cotton tee fabric detail"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-center"
          />
        </div>
        <div className="flex flex-col justify-center content-container small:px-16 py-16 small:py-20 order-1 small:order-2">
          <p className="mb-2 text-xs uppercase tracking-[0.18em] text-parak-slate/50">
            Materials
          </p>
          <h2 className="font-display text-3xl small:text-4xl tracking-tight text-parak-ink max-w-md leading-tight">
            Soft where it matters. Strong where it lasts.
          </h2>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-parak-slate/65">
            From washed cotton tees to dense wool layers — every fabric is
            chosen for hand-feel, color hold, and how it ages.
          </p>
          <LocalizedClientLink
            href="/store"
            className="mt-8 inline-flex w-fit items-center gap-2 border-b border-parak-ink/30 pb-1 text-sm text-parak-ink transition-colors hover:border-parak-ink"
          >
            Explore fabrics
            <span aria-hidden>→</span>
          </LocalizedClientLink>
        </div>
      </div>
    </section>
  )
}
