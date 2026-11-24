import { listCategories } from "@lib/data/categories"
import { listCollections } from "@lib/data/collections"

import LocalizedClientLink from "@modules/common/components/localized-client-link"

const exploreLinks = [
  { label: "Shop all", href: "/store" },
  { label: "About", href: "/about" },
  { label: "Support", href: "/support" },
  { label: "Account", href: "/account" },
  { label: "Cart", href: "/cart" },
]

export default async function Footer() {
  const { collections } = await listCollections({
    fields: "*products",
  })
  const productCategories = await listCategories()

  const topCategories = productCategories
    ?.filter((c) => !c.parent_category)
    .slice(0, 6)

  return (
    <footer className="w-full border-t border-parak-stone bg-parak-mist">
      <div className="content-container flex flex-col w-full">
        <div className="grid grid-cols-1 gap-12 py-16 small:grid-cols-12 small:gap-8 small:py-20">
          <div className="small:col-span-4 flex flex-col gap-4">
            <LocalizedClientLink
              href="/"
              className="font-display text-3xl tracking-tight text-parak-ink transition-opacity hover:opacity-70"
            >
              Parak
            </LocalizedClientLink>
            <p className="max-w-xs text-sm leading-relaxed text-parak-slate/60">
              Quiet essentials for everyday wear — cut clean, built to last.
            </p>
          </div>

          <div className="small:col-span-8 grid grid-cols-2 gap-10 sm:grid-cols-3">
            {topCategories && topCategories.length > 0 && (
              <div className="flex flex-col gap-y-4">
                <p className="text-xs uppercase tracking-[0.18em] text-parak-slate/50">
                  Categories
                </p>
                <ul
                  className="flex flex-col gap-2.5"
                  data-testid="footer-categories"
                >
                  {topCategories.map((c) => (
                    <li key={c.id}>
                      <LocalizedClientLink
                        className="text-sm text-parak-slate/70 transition-colors hover:text-parak-ink"
                        href={`/categories/${c.handle}`}
                        data-testid="category-link"
                      >
                        {c.name}
                      </LocalizedClientLink>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {collections && collections.length > 0 && (
              <div className="flex flex-col gap-y-4">
                <p className="text-xs uppercase tracking-[0.18em] text-parak-slate/50">
                  Collections
                </p>
                <ul className="flex flex-col gap-2.5">
                  {collections.slice(0, 6).map((c) => (
                    <li key={c.id}>
                      <LocalizedClientLink
                        className="text-sm text-parak-slate/70 transition-colors hover:text-parak-ink"
                        href={`/collections/${c.handle}`}
                      >
                        {c.title}
                      </LocalizedClientLink>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="flex flex-col gap-y-4">
              <p className="text-xs uppercase tracking-[0.18em] text-parak-slate/50">
                Explore
              </p>
              <ul className="flex flex-col gap-2.5">
                {exploreLinks.map((link) => (
                  <li key={link.href}>
                    <LocalizedClientLink
                      className="text-sm text-parak-slate/70 transition-colors hover:text-parak-ink"
                      href={link.href}
                    >
                      {link.label}
                    </LocalizedClientLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex w-full flex-col gap-3 border-t border-parak-stone py-6 small:flex-row small:items-center small:justify-between">
          <p className="text-xs text-parak-slate/45">
            © {new Date().getFullYear()} Parak. All rights reserved.
          </p>
          <p className="text-xs text-parak-slate/45">
            Designed for everyday
          </p>
        </div>
      </div>
    </footer>
  )
}
