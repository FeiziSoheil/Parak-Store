import AboutClosing from "@modules/about/components/closing"
import AboutCraft from "@modules/about/components/craft"
import AboutHero from "@modules/about/components/hero"
import AboutPrinciples from "@modules/about/components/principles"
import AboutStory from "@modules/about/components/story"

export default function AboutTemplate() {
  return (
    <>
      <AboutHero />
      <AboutStory />
      <AboutPrinciples />
      <AboutCraft />
      <AboutClosing />
    </>
  )
}
