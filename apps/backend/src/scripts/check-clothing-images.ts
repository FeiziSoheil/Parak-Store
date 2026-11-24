import { ContainerRegistrationKeys } from "@medusajs/framework/utils"
import type { ExecArgs } from "@medusajs/framework/types"

export default async function checkClothingImages({ container }: ExecArgs) {
  const query = container.resolve(ContainerRegistrationKeys.QUERY)
  const logger = container.resolve(ContainerRegistrationKeys.LOGGER)

  const { data: products } = await query.graph({
    entity: "product",
    fields: ["handle", "thumbnail", "images.url"],
  })

  const clothing = products.filter(
    (p) => typeof p.handle === "string" && p.handle.startsWith("clothing-")
  )

  const withLocal = clothing.filter(
    (p) =>
      typeof p.thumbnail === "string" &&
      p.thumbnail.includes("/images/products/")
  )
  const withS3 = clothing.filter(
    (p) =>
      typeof p.thumbnail === "string" &&
      p.thumbnail.includes("medusa-public-images")
  )

  logger.info(`clothing products: ${clothing.length}`)
  logger.info(`with /images/products/ thumbnail: ${withLocal.length}`)
  logger.info(`still on medusa S3 demo: ${withS3.length}`)

  const sample = clothing.find((p) => p.handle === "clothing-1-tee") || clothing[0]
  if (sample) {
    logger.info(`sample handle: ${sample.handle}`)
    logger.info(`sample thumbnail: ${sample.thumbnail}`)
    logger.info(
      `sample images: ${JSON.stringify((sample.images || []).map((i) => i?.url))}`
    )
  }
}
