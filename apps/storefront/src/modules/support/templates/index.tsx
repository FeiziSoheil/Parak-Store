import SupportClosing from "@modules/support/components/closing"
import SupportContact from "@modules/support/components/contact"
import SupportFaq from "@modules/support/components/faq"
import SupportHero from "@modules/support/components/hero"
import SupportTopics from "@modules/support/components/topics"

export default function SupportTemplate() {
  return (
    <>
      <SupportHero />
      <SupportTopics />
      <SupportFaq />
      <SupportContact />
      <SupportClosing />
    </>
  )
}
