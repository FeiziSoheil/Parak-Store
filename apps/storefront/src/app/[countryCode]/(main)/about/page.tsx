import { Metadata } from "next"

import AboutTemplate from "@modules/about/templates"

export const metadata: Metadata = {
  title: "About",
  description:
    "Parak is a quiet clothing label for everyday essentials — fewer pieces, better made.",
}

export default function AboutPage() {
  return <AboutTemplate />
}
