import { Metadata } from "next"

import SupportTemplate from "@modules/support/templates"

export const metadata: Metadata = {
  title: "Support",
  description:
    "Parak support — shipping, returns, sizing, and contact for order help.",
}

export default function SupportPage() {
  return <SupportTemplate />
}
