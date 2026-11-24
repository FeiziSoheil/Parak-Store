"use client"

import { FormEvent, useState } from "react"

export default function Newsletter() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "done">("idle")

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!email.trim()) {
      return
    }
    setStatus("done")
    setEmail("")
  }

  return (
    <section className="bg-white">
      <div className="content-container py-16 small:py-24">
        <div className="mx-auto max-w-xl text-center">
          <p className="mb-2 text-xs uppercase tracking-[0.18em] text-parak-slate/50">
            Stay close
          </p>
          <h2 className="font-display text-2xl small:text-3xl tracking-tight text-parak-ink">
            New drops, quietly announced
          </h2>
          <p className="mt-4 text-sm text-parak-slate/60 leading-relaxed">
            No weekly noise — just early access when something worth wearing
            lands.
          </p>

          {status === "done" ? (
            <p className="mt-10 text-sm text-parak-ink">You&apos;re on the list.</p>
          ) : (
            <form
              onSubmit={onSubmit}
              className="mt-10 flex flex-col xsmall:flex-row gap-3"
            >
              <label className="sr-only" htmlFor="parak-newsletter-email">
                Email address
              </label>
              <input
                id="parak-newsletter-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                className="flex-1 border border-parak-stone bg-parak-mist/40 px-4 py-3 text-sm text-parak-ink outline-none transition-colors placeholder:text-parak-slate/40 focus:border-parak-ink"
              />
              <button
                type="submit"
                className="bg-parak-ink px-7 py-3 text-sm font-medium text-white transition-colors duration-300 hover:bg-parak-slate"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
