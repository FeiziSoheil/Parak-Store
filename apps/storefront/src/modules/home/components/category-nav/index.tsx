import { HttpTypes } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

type CategoryNavProps = {
  categories: HttpTypes.StoreProductCategory[]
}

export default function CategoryNav({ categories }: CategoryNavProps) {
  const topLevel = categories.filter((c) => !c.parent_category).slice(0, 8)

  if (!topLevel.length) {
    return null
  }

  return (
    <section className="border-b border-parak-stone bg-parak-mist">
      <div className="content-container py-10 small:py-14">
        <div className="mb-8 flex items-end justify-between gap-6">
          <h2 className="font-display text-2xl small:text-3xl tracking-tight text-parak-ink">
            Shop by category
          </h2>
          <LocalizedClientLink
            href="/store"
            className="hidden small:inline-flex text-sm text-parak-slate/70 transition-colors hover:text-parak-ink"
          >
            View all
          </LocalizedClientLink>
        </div>

        <nav aria-label="Product categories">
          <ul className="flex gap-x-8 gap-y-4 overflow-x-auto no-scrollbar pb-1 small:flex-wrap small:overflow-visible">
            {topLevel.map((category, index) => (
              <li
                key={category.id}
                className="shrink-0 opacity-0 animate-soft-reveal"
                style={{ animationDelay: `${index * 60}ms` }}
              >
                <LocalizedClientLink
                  href={`/categories/${category.handle}`}
                  className="group relative inline-block font-display text-lg small:text-xl text-parak-ink/55 transition-colors duration-300 hover:text-parak-ink"
                >
                  {category.name}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-parak-ink transition-all duration-300 group-hover:w-full" />
                </LocalizedClientLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  )
}
