import { HttpTypes } from "@medusajs/types"
import InteractiveLink from "@modules/common/components/interactive-link"
import ProductPreview from "@modules/products/components/product-preview"

type ProductShelfProps = {
  title: string
  eyebrow?: string
  href?: string
  linkLabel?: string
  products: HttpTypes.StoreProduct[]
  region: HttpTypes.StoreRegion
  columns?: 3 | 4
}

export default function ProductShelf({
  title,
  eyebrow = "Selected",
  href = "/store",
  linkLabel = "View all",
  products,
  region,
  columns = 4,
}: ProductShelfProps) {
  if (!products.length) {
    return null
  }

  return (
    <section className="content-container py-14 small:py-20">
      <div className="mb-10 flex items-end justify-between gap-4">
        <div>
          <p className="mb-2 text-xs uppercase tracking-[0.18em] text-parak-slate/50">
            {eyebrow}
          </p>
          <h2 className="font-display text-2xl small:text-3xl tracking-tight text-parak-ink">
            {title}
          </h2>
        </div>
        <InteractiveLink href={href}>{linkLabel}</InteractiveLink>
      </div>
      <ul
        className={
          columns === 3
            ? "grid grid-cols-2 small:grid-cols-3 gap-x-4 gap-y-10 small:gap-x-6 small:gap-y-12"
            : "grid grid-cols-2 small:grid-cols-4 gap-x-4 gap-y-10 small:gap-x-6 small:gap-y-12"
        }
      >
        {products.map((product) => (
          <li key={product.id}>
            <ProductPreview product={product} region={region} isFeatured />
          </li>
        ))}
      </ul>
    </section>
  )
}
