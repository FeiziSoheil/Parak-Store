import { Metadata } from "next"

import CategoryMosaic from "@modules/home/components/category-mosaic"
import CategoryNav from "@modules/home/components/category-nav"
import CollectionSpotlight from "@modules/home/components/collection-spotlight"
import Editorial from "@modules/home/components/editorial"
import FeaturedProducts from "@modules/home/components/featured-products"
import FinalCta from "@modules/home/components/final-cta"
import Hero from "@modules/home/components/hero"
import Journal from "@modules/home/components/journal"
import Lookbook from "@modules/home/components/lookbook"
import Materials from "@modules/home/components/materials"
import Newsletter from "@modules/home/components/newsletter"
import ProductShelf from "@modules/home/components/product-shelf"
import SaleBanner from "@modules/home/components/sale-banner"
import ServiceStrip from "@modules/home/components/service-strip"
import StatementBand from "@modules/home/components/statement-band"
import Values from "@modules/home/components/values"
import { listCategories } from "@lib/data/categories"
import { listCollections } from "@lib/data/collections"
import { listProducts } from "@lib/data/products"
import { getRegion } from "@lib/data/regions"
import { HttpTypes } from "@medusajs/types"

export const metadata: Metadata = {
  title: "Parak",
  description:
    "Modern essentials with quiet confidence. Clothing for everyday.",
}

function isParakProduct(product: HttpTypes.StoreProduct) {
  return Boolean(product.handle?.startsWith("clothing-"))
}

function hasTag(product: HttpTypes.StoreProduct, value: string) {
  return Boolean(
    product.tags?.some((tag) => tag.value?.toLowerCase() === value)
  )
}

export default async function Home(props: {
  params: Promise<{ countryCode: string }>
}) {
  const params = await props.params
  const { countryCode } = params

  const region = await getRegion(countryCode)

  const [{ collections }, categories, catalogResult] = await Promise.all([
    listCollections({
      fields: "id, handle, title",
    }),
    listCategories({ limit: 20 }),
    region
      ? listProducts({
          regionId: region.id,
          queryParams: {
            limit: 48,
            order: "-created_at",
          },
        })
      : Promise.resolve(null),
  ])

  if (!collections || !region) {
    return null
  }

  const catalog = (catalogResult?.response.products || []).filter(
    isParakProduct
  )

  const newArrivals = catalog
    .filter((product) => hasTag(product, "new-arrival"))
    .slice(0, 8)

  const arrivalsShelf =
    newArrivals.length >= 4 ? newArrivals : catalog.slice(0, 8)

  const bestsellers = catalog
    .filter((product) => hasTag(product, "bestseller"))
    .slice(0, 4)

  const bestsellersShelf =
    bestsellers.length >= 4
      ? bestsellers
      : catalog.filter((product) => !arrivalsShelf.includes(product)).slice(0, 4)

  const lookbookProducts = arrivalsShelf.slice(0, 6)
  const spotlightCollections = collections.slice(0, 2)
  const featuredCollections = collections.slice(0, 3)
  const safeCategories = categories || []

  return (
    <>
      <Hero />
      <CategoryNav categories={safeCategories} />
      <ProductShelf
        title="New arrivals"
        eyebrow="Just in"
        products={arrivalsShelf}
        region={region}
      />
      <CollectionSpotlight collections={spotlightCollections} />
      <StatementBand />
      <div className="bg-white">
        <ul className="flex flex-col">
          <FeaturedProducts collections={featuredCollections} region={region} />
        </ul>
      </div>
      <Lookbook products={lookbookProducts} />
      <SaleBanner />
      <ProductShelf
        title="Most worn"
        eyebrow="Bestsellers"
        products={bestsellersShelf}
        region={region}
        columns={4}
      />
      <Values />
      <CategoryMosaic categories={safeCategories} />
      <Materials />
      <ServiceStrip />
      <Editorial />
      <Journal />
      <Newsletter />
      <FinalCta />
    </>
  )
}
