const TOPICS = [
  {
    id: "shipping",
    title: "Shipping",
    body: "Tracked delivery on every order. Most regions dispatch within 1–2 business days.",
  },
  {
    id: "returns",
    title: "Returns",
    body: "30 days to change your mind. Items should be unworn with tags attached.",
  },
  {
    id: "sizing",
    title: "Sizing",
    body: "Fit notes live on every product page — written for real movement, not mannequins.",
  },
  {
    id: "orders",
    title: "Orders",
    body: "Track status, update details, and manage returns from your account.",
  },
]

export default function SupportTopics() {
  return (
    <section id="topics" className="scroll-mt-20 border-y border-parak-stone bg-white">
      <div className="content-container py-14 small:py-20">
        <div className="mb-10 max-w-xl">
          <p className="mb-2 text-xs uppercase tracking-[0.18em] text-parak-slate/50">
            Help topics
          </p>
          <h2 className="font-display text-2xl small:text-3xl tracking-tight text-parak-ink">
            Start here
          </h2>
        </div>

        <ul className="grid grid-cols-1 gap-10 small:grid-cols-2 small:gap-x-12 small:gap-y-14">
          {TOPICS.map((topic, index) => (
            <li key={topic.id} id={topic.id} className="scroll-mt-24 border-t border-parak-stone pt-6">
              <p className="mb-3 font-display text-sm text-parak-slate/40">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="font-display text-xl tracking-tight text-parak-ink mb-3">
                {topic.title}
              </h3>
              <p className="text-sm leading-relaxed text-parak-slate/65">
                {topic.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
