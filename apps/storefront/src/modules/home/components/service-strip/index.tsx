const SERVICES = [
  {
    title: "Free returns",
    body: "30 days to change your mind — no questions.",
  },
  {
    title: "Thoughtful shipping",
    body: "Tracked delivery, packed to protect the fabric.",
  },
  {
    title: "Size support",
    body: "Unsure? Our fit notes are written for real bodies.",
  },
]

export default function ServiceStrip() {
  return (
    <section className="border-y border-parak-stone bg-white">
      <div className="content-container py-12 small:py-14">
        <ul className="grid grid-cols-1 small:grid-cols-3 gap-8 small:gap-10">
          {SERVICES.map((service) => (
            <li key={service.title}>
              <h3 className="font-display text-base tracking-tight text-parak-ink mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-parak-slate/60 leading-relaxed">
                {service.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
