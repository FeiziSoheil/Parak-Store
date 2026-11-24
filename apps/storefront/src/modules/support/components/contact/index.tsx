"use client"

import { FormEvent, useState } from "react"

export default function SupportContact() {
  const [status, setStatus] = useState<"idle" | "done">("idle")

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatus("done")
  }

  return (
    <section id="contact" className="scroll-mt-20 bg-white">
      <div className="content-container py-16 small:py-24">
        <div className="grid grid-cols-1 gap-12 small:grid-cols-12 small:gap-10">
          <div className="small:col-span-5">
            <p className="mb-2 text-xs uppercase tracking-[0.18em] text-parak-slate/50">
              Contact
            </p>
            <h2 className="font-display text-2xl small:text-3xl tracking-tight text-parak-ink">
              Still need a hand?
            </h2>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-parak-slate/65">
              Send a note with your order number if you have one. We typically
              reply within one business day.
            </p>
            <p className="mt-8 text-sm text-parak-slate/55">
              <span className="block text-xs uppercase tracking-[0.18em] text-parak-slate/40 mb-2">
                Email
              </span>
              <a
                href="mailto:hello@parak.studio"
                className="text-parak-ink transition-opacity hover:opacity-70"
              >
                hello@parak.studio
              </a>
            </p>
          </div>

          <div className="small:col-span-7">
            {status === "done" ? (
              <div className="flex min-h-[280px] items-center border-t border-parak-stone pt-8 small:border-t-0 small:pt-0">
                <p className="font-display text-xl tracking-tight text-parak-ink">
                  Message received — we&apos;ll be in touch soon.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 gap-4 xsmall:grid-cols-2">
                  <div>
                    <label
                      className="mb-2 block text-xs uppercase tracking-[0.14em] text-parak-slate/45"
                      htmlFor="support-name"
                    >
                      Name
                    </label>
                    <input
                      id="support-name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      className="w-full border border-parak-stone bg-parak-mist/40 px-4 py-3 text-sm text-parak-ink outline-none transition-colors placeholder:text-parak-slate/40 focus:border-parak-ink"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      className="mb-2 block text-xs uppercase tracking-[0.14em] text-parak-slate/45"
                      htmlFor="support-email"
                    >
                      Email
                    </label>
                    <input
                      id="support-email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      className="w-full border border-parak-stone bg-parak-mist/40 px-4 py-3 text-sm text-parak-ink outline-none transition-colors placeholder:text-parak-slate/40 focus:border-parak-ink"
                      placeholder="you@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    className="mb-2 block text-xs uppercase tracking-[0.14em] text-parak-slate/45"
                    htmlFor="support-order"
                  >
                    Order number
                    <span className="normal-case tracking-normal text-parak-slate/35">
                      {" "}
                      (optional)
                    </span>
                  </label>
                  <input
                    id="support-order"
                    name="order"
                    type="text"
                    className="w-full border border-parak-stone bg-parak-mist/40 px-4 py-3 text-sm text-parak-ink outline-none transition-colors placeholder:text-parak-slate/40 focus:border-parak-ink"
                    placeholder="e.g. ord_01..."
                  />
                </div>

                <div>
                  <label
                    className="mb-2 block text-xs uppercase tracking-[0.14em] text-parak-slate/45"
                    htmlFor="support-message"
                  >
                    Message
                  </label>
                  <textarea
                    id="support-message"
                    name="message"
                    required
                    rows={5}
                    className="w-full resize-y border border-parak-stone bg-parak-mist/40 px-4 py-3 text-sm text-parak-ink outline-none transition-colors placeholder:text-parak-slate/40 focus:border-parak-ink"
                    placeholder="How can we help?"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-2 inline-flex w-fit items-center justify-center bg-parak-ink px-7 py-3 text-sm font-medium text-white transition-colors duration-300 hover:bg-parak-slate"
                >
                  Send message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
