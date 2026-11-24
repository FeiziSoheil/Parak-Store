const FAQS = [
  {
    q: "How long does shipping take?",
    a: "Orders usually leave our warehouse within 1–2 business days. Delivery times vary by region — you’ll get a tracking link as soon as the parcel ships.",
  },
  {
    q: "What is your return policy?",
    a: "You have 30 days from delivery to return unworn items with tags attached. Once we receive the return, refunds are processed to the original payment method.",
  },
  {
    q: "How do I find my size?",
    a: "Each product page includes fit notes and measurements. If you’re between sizes, we generally recommend sizing up for softer layers and true-to-size for structured pieces.",
  },
  {
    q: "Can I change or cancel an order?",
    a: "If the order hasn’t shipped yet, contact us as soon as possible with your order number. Once it’s in transit, we’ll help arrange a return when it arrives.",
  },
  {
    q: "How should I care for my garments?",
    a: "Wash less when you can, follow the care label, and air dry when possible. Soft knits and washed cottons last longer with cooler cycles and fewer tumble-dry sessions.",
  },
  {
    q: "Do you ship internationally?",
    a: "Yes — we ship to the regions available at checkout. Duties and taxes may apply depending on your destination and will be shown where required.",
  },
]

export default function SupportFaq() {
  return (
    <section id="faq" className="scroll-mt-20 bg-parak-mist">
      <div className="content-container py-16 small:py-24">
        <div className="mb-12 max-w-xl">
          <p className="mb-2 text-xs uppercase tracking-[0.18em] text-parak-slate/50">
            FAQ
          </p>
          <h2 className="font-display text-2xl small:text-3xl tracking-tight text-parak-ink">
            Common questions
          </h2>
        </div>

        <ul className="mx-auto max-w-3xl divide-y divide-parak-stone border-y border-parak-stone">
          {FAQS.map((item) => (
            <li key={item.q}>
              <details className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-display text-base small:text-lg tracking-tight text-parak-ink marker:content-none [&::-webkit-details-marker]:hidden">
                  <span>{item.q}</span>
                  <span
                    className="shrink-0 text-parak-slate/40 transition-transform duration-300 group-open:rotate-45"
                    aria-hidden
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-parak-slate/65">
                  {item.a}
                </p>
              </details>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
