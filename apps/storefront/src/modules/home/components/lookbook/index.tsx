import Image from "next/image"
import { HttpTypes } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

type LookbookProps = {
  products: HttpTypes.StoreProduct[]
}

export default function Lookbook({ products }: LookbookProps) {
  const frames = products.slice(0, 6)

  if (frames.length < 3) {
    return null
  }

  return (
    <section className="bg-parak-ink text-white overflow-hidden">
      <div className="content-container pt-14 small:pt-20 pb-6">
        <p className="mb-2 text-xs uppercase tracking-[0.18em] text-white/45">
          Lookbook
        </p>
        <h2 className="font-display text-2xl small:text-3xl tracking-tight">
          In the frame
        </h2>
      </div>

      <div className="flex gap-3 small:gap-4 overflow-x-auto no-scrollbar px-6 pb-14 small:pb-20">
        {frames.map((product) => {
          const image = product.thumbnail || product.images?.[0]?.url
          if (!image) {
            return null
          }

          return (
            <LocalizedClientLink
              key={product.id}
              href={`/products/${product.handle}`}
              className="group relative shrink-0 w-[220px] small:w-[280px] aspect-[3/4] overflow-hidden bg-parak-slate"
            >
              <Image
                src={image}
                alt={product.title || ""}
                fill
                sizes="280px"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-parak-ink/70 via-transparent to-transparent opacity-80"
                aria-hidden
              />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <p className="text-sm text-white/90 truncate">{product.title}</p>
              </div>
            </LocalizedClientLink>
          )
        })}
      </div>
    </section>
  )
}
