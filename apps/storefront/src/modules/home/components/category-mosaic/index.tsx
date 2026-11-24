import Image from "next/image"
import { HttpTypes } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { CategoryImage } from "types/global"

const FALLBACK_IMAGES = [
  "/images/brand/category-tops.jpg",
  "/images/brand/category-layers.jpg",
  "/images/brand/category-shorts.jpg",
  "/images/brand/category-pants.jpg",
]

type CategoryWithImages = HttpTypes.StoreProductCategory & {
  product_category_image?: CategoryImage[]
}

type CategoryMosaicProps = {
  categories: CategoryWithImages[]
}

export default function CategoryMosaic({ categories }: CategoryMosaicProps) {
  const topLevel = categories.filter((c) => !c.parent_category).slice(0, 4)

  if (topLevel.length < 2) {
    return null
  }

  return (
    <section className="bg-parak-mist">
      <div className="content-container py-14 small:py-20">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <p className="mb-2 text-xs uppercase tracking-[0.18em] text-parak-slate/50">
              Departments
            </p>
            <h2 className="font-display text-2xl small:text-3xl tracking-tight text-parak-ink">
              Find your lane
            </h2>
          </div>
          <LocalizedClientLink
            href="/store"
            className="hidden small:inline-flex text-sm text-parak-slate/70 transition-colors hover:text-parak-ink"
          >
            All categories
          </LocalizedClientLink>
        </div>

        <div className="grid grid-cols-2 small:grid-cols-4 gap-3 small:gap-4">
          {topLevel.map((category, index) => {
            const thumbnail = category.product_category_image?.find(
              (img) => img.type === "thumbnail"
            )?.url
            const firstCategoryImage = category.product_category_image?.[0]?.url
            const productImage = (
              category as CategoryWithImages & {
                products?: { thumbnail?: string | null }[]
              }
            ).products?.[0]?.thumbnail

            const imageSrc =
              thumbnail ||
              firstCategoryImage ||
              productImage ||
              FALLBACK_IMAGES[index % FALLBACK_IMAGES.length]

            return (
              <LocalizedClientLink
                key={category.id}
                href={`/categories/${category.handle}`}
                className="group relative block aspect-[3/4] overflow-hidden bg-parak-stone"
              >
                <Image
                  src={imageSrc}
                  alt={category.name}
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-parak-ink/55 via-transparent to-transparent"
                  aria-hidden
                />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h3 className="font-display text-lg small:text-xl text-white tracking-tight">
                    {category.name}
                  </h3>
                </div>
              </LocalizedClientLink>
            )
          })}
        </div>
      </div>
    </section>
  )
}
