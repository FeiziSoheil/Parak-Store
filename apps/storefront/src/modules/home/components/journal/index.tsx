import LocalizedClientLink from "@modules/common/components/localized-client-link"

const POSTS = [
  {
    tag: "Fit notes",
    title: "How we size for real movement",
    href: "/store",
  },
  {
    tag: "Care",
    title: "Washing less, lasting longer",
    href: "/store",
  },
  {
    tag: "Edit",
    title: "Building a five-piece week",
    href: "/store",
  },
]

export default function Journal() {
  return (
    <section className="bg-parak-mist border-y border-parak-stone">
      <div className="content-container py-14 small:py-20">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <p className="mb-2 text-xs uppercase tracking-[0.18em] text-parak-slate/50">
              Journal
            </p>
            <h2 className="font-display text-2xl small:text-3xl tracking-tight text-parak-ink">
              Notes from the studio
            </h2>
          </div>
        </div>

        <ul className="grid grid-cols-1 small:grid-cols-3 gap-0 divide-y small:divide-y-0 small:divide-x divide-parak-stone border border-parak-stone bg-white">
          {POSTS.map((post) => (
            <li key={post.title}>
              <LocalizedClientLink
                href={post.href}
                className="group flex h-full flex-col justify-between p-8 small:p-10 transition-colors hover:bg-parak-mist/60"
              >
                <div>
                  <p className="mb-4 text-xs uppercase tracking-[0.18em] text-parak-slate/45">
                    {post.tag}
                  </p>
                  <h3 className="font-display text-xl small:text-2xl tracking-tight text-parak-ink leading-snug">
                    {post.title}
                  </h3>
                </div>
                <p className="mt-10 text-sm text-parak-slate/55 inline-flex items-center gap-2 transition-transform duration-300 group-hover:translate-x-1">
                  Read <span aria-hidden>→</span>
                </p>
              </LocalizedClientLink>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
