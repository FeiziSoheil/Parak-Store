import Image from "next/image"
import { HttpTypes } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

const SPOTLIGHT_IMAGES = [
  "/images/brand/spotlight-01.jpg",
  "/images/brand/spotlight-02.jpg",
]

type CollectionSpotlightProps = {
  collections: HttpTypes.StoreCollection[]
}

export default function CollectionSpotlight({
  collections,
}: CollectionSpotlightProps) {
  const items = collections.slice(0, 2)

  if (items.length < 2) {
    return null
  }

  return (
    <section className="bg-parak-mist">
      <div className="content-container py-14 small:py-20">
        <div className="mb-10">
          <p className="mb-2 text-xs uppercase tracking-[0.18em] text-parak-slate/50">
            Season
          </p>
          <h2 className="font-display text-2xl small:text-3xl tracking-tight text-parak-ink">
            Two ways to dress the week
          </h2>
        </div>

        <div className="grid grid-cols-1 small:grid-cols-2 gap-4 small:gap-6">
          {items.map((collection, index) => (
            <LocalizedClientLink
              key={collection.id}
              href={`/collections/${collection.handle}`}
              className="group relative block min-h-[420px] small:min-h-[520px] overflow-hidden bg-parak-stone"
            >
              <Image
                src={SPOTLIGHT_IMAGES[index] || SPOTLIGHT_IMAGES[0]}
                alt={collection.title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-parak-ink/70 via-parak-ink/15 to-transparent"
                aria-hidden
              />
              <div className="absolute inset-x-0 bottom-0 p-8 small:p-10 text-white">
                <p className="text-xs uppercase tracking-[0.18em] text-white/60 mb-3">
                  Collection
                </p>
                <h3 className="font-display text-3xl small:text-4xl tracking-tight">
                  {collection.title}
                </h3>
                <p className="mt-4 text-sm text-white/75 inline-flex items-center gap-2 transition-transform duration-300 group-hover:translate-x-1">
                  Shop now <span aria-hidden>→</span>
                </p>
              </div>
            </LocalizedClientLink>
          ))}
        </div>
      </div>
    </section>
  )
}
