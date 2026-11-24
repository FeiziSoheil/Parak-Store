export default function SupportHero() {
  return (
    <section className="relative overflow-hidden bg-parak-mist">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgba(228,227,223,0.65) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(42,52,57,0.06), transparent 55%)",
        }}
        aria-hidden
      />
      <div className="relative content-container flex min-h-[48vh] flex-col justify-end pb-14 pt-24 small:min-h-[56vh] small:pb-20 small:pt-28">
        <p
          className="font-display text-[clamp(3rem,10vw,6.5rem)] leading-[0.88] tracking-tight text-parak-ink opacity-0 animate-hero-fade-up"
          style={{ animationDelay: "60ms" }}
        >
          Parak
        </p>
        <h1
          className="mt-4 font-display text-2xl small:text-3xl tracking-tight text-parak-ink/80 opacity-0 animate-hero-fade-up"
          style={{ animationDelay: "180ms" }}
        >
          Support
        </h1>
        <p
          className="mt-4 max-w-md text-sm small:text-base text-parak-slate/65 leading-relaxed opacity-0 animate-hero-fade-up"
          style={{ animationDelay: "300ms" }}
        >
          Orders, sizing, shipping, and returns — clear answers when you need
          them.
        </p>
        <div
          className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm opacity-0 animate-hero-fade-up"
          style={{ animationDelay: "420ms" }}
        >
          <a
            href="#topics"
            className="text-parak-slate/70 transition-colors hover:text-parak-ink"
          >
            Topics
          </a>
          <a
            href="#faq"
            className="text-parak-slate/70 transition-colors hover:text-parak-ink"
          >
            FAQ
          </a>
          <a
            href="#contact"
            className="text-parak-slate/70 transition-colors hover:text-parak-ink"
          >
            Contact
          </a>
        </div>
      </div>
    </section>
  )
}
