/**
 * Points seeded clothing products at the generated JPEGs (byte-identical copies).
 *
 * Files are served from the storefront public folder:
 *   apps/storefront/public/images/products/clothing-*.jpg
 * → http://localhost:8000/images/products/clothing-*.jpg
 *
 *   npx medusa exec ./src/scripts/apply-clothing-images.ts
 */
import { readFileSync } from "fs"
import { join } from "path"
import { updateProductsWorkflow } from "@medusajs/medusa/core-flows"
import {
  ContainerRegistrationKeys,
  Modules,
} from "@medusajs/framework/utils"
import type { ExecArgs } from "@medusajs/framework/types"

const INGEST_CHUNK_SIZE = 25

type ImageMap = {
  products: Record<string, string>
}

export default async function applyClothingImages({ container }: ExecArgs) {
  const logger = container.resolve(ContainerRegistrationKeys.LOGGER)
  const query = container.resolve(ContainerRegistrationKeys.QUERY)

  const mapPath = join(
    process.cwd(),
    "src/scripts/clothing-image-map.json"
  )
  const map = JSON.parse(readFileSync(mapPath, "utf8")) as ImageMap

  const storefrontUrl = (
    process.env.STOREFRONT_URL ||
    process.env.NEXT_PUBLIC_BASE_URL ||
    "http://localhost:8000"
  )
    .replace(/\/$/, "")
    .replace("https://localhost", "http://localhost")

  const { data: products } = await query.graph({
    entity: "product",
    fields: ["id", "handle"],
  })

  const clothing = products.filter(
    (product) =>
      typeof product.handle === "string" &&
      product.handle.startsWith("clothing-") &&
      map.products[product.handle]
  )

  let updated = 0

  for (const product of clothing) {
    const handle = product.handle as string
    const url = `${storefrontUrl}/images/products/${handle}.jpg`

    await updateProductsWorkflow(container).run({
      input: {
        products: [
          {
            id: product.id,
            thumbnail: url,
            images: [{ url }],
          },
        ],
      },
    })

    updated++

    if (updated % 10 === 0) {
      logger.info(`Updated images for ${updated}/${clothing.length} products`)
    }
  }

  const search = container.resolve(Modules.SEARCH)
  const { data: allProducts } = await query.graph({
    entity: "product",
    fields: ["id"],
  })

  for (let start = 0; start < allProducts.length; start += INGEST_CHUNK_SIZE) {
    const chunk = allProducts.slice(start, start + INGEST_CHUNK_SIZE)

    await search.ingest({
      name: "product.updated",
      data: chunk.map((product) => ({ id: product.id })),
    } as never)
  }

  logger.info(
    `Done. Updated ${updated} clothing product image(s) → ${storefrontUrl}/images/products/`
  )
}
