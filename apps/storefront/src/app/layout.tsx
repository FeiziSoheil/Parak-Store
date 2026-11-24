import { getBaseURL } from "@lib/util/env"
import { Manrope, Syne } from "next/font/google"
import { Metadata } from "next"
import "styles/globals.css"

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
})

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL(getBaseURL()),
  title: {
    default: "Parak",
    template: "%s | Parak",
  },
  description: "Modern essentials. Quiet confidence. Clothing for everyday.",
}

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" data-mode="light" className={`${syne.variable} ${manrope.variable}`}>
      <body className="font-sans antialiased">
        <main className="relative">{props.children}</main>
      </body>
    </html>
  )
}
