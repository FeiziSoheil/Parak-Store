import Image from "next/image"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

const HERO_IMAGE = "/images/brand/spotlight-01.jpg"

export default function AboutHero() {
  return (
    <section className="relative h-[calc(100svh-4rem)] min-h-[520px] w-full overflow-hidden bg-parak-mist">
      <div className="absolute inset-0">
        <Image
          src={HERO_IMAGE}
          alt="Parak essential wardrobe"
          fill
          priority
          quality={85}
          sizes="100vw"
          className="object-cover object-[center_30%] animate-hero-ken"
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to top, #f2f2f0 0%, rgba(242,242,240,0.78) 30%, rgba(242,242,240,0.2) 58%, rgba(228,227,223,0.4) 100%), linear-gradient(115deg, rgba(42,52,57,0.1), transparent 55%)",
          }}
          aria-hidden
        />
      </div>

      <div className="relative z-10 flex h-full flex-col justify-end content-container pb-14 small:pb-20">
        <div className="max-w-xl">
          <h1
            className="font-display text-[clamp(3.5rem,12vw,8rem)] leading-[0.88] tracking-tight text-parak-ink opacity-0 animate-hero-fade-up"
            style={{ animationDelay: "80ms" }}
          >
            Parak
          </h1>
          <p
            className="mt-5 max-w-md text-base small:text-lg text-parak-slate/70 leading-relaxed opacity-0 animate-hero-fade-up"
            style={{ animationDelay: "220ms" }}
          >
            A quiet clothing label for everyday essentials — fewer pieces,
            better made.
          </p>
          <div
            className="mt-8 flex flex-wrap items-center gap-5 opacity-0 animate-hero-fade-up"
            style={{ animationDelay: "360ms" }}
          >
            <LocalizedClientLink
              href="/store"
              className="inline-flex items-center justify-center bg-parak-ink px-7 py-3 text-sm font-medium text-white transition-colors duration-300 hover:bg-parak-slate"
            >
              Shop the collection
            </LocalizedClientLink>
            <a
              href="#story"
              className="group inline-flex items-center gap-2 text-sm text-parak-slate/70 transition-colors duration-300 hover:text-parak-ink"
            >
              Our story
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
