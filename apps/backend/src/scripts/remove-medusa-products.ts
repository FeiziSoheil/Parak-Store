/**
 * Deletes Medusa starter products and optional demo-* catalog leftovers
 * so the storefront only surfaces Parak clothing products.
 *
 *   npx medusa exec ./src/scripts/remove-medusa-products.ts
 */
import { deleteProductsWorkflow } from "@medusajs/medusa/core-flows"
import {
  ContainerRegistrationKeys,
  Modules,
} from "@medusajs/framework/utils"
import type { ExecArgs } from "@medusajs/framework/types"

const STARTER_HANDLES = new Set([
  "t-shirt",
  "sweatshirt",
  "sweatpants",
  "shorts",
])

function shouldRemove(handle: string | null | undefined, title: string | null | undefined) {
  if (!handle && !title) {
    return false
  }

  if (handle && STARTER_HANDLES.has(handle)) {
    return true
  }

  if (handle?.startsWith("demo-")) {
    return true
  }

  if (title?.toLowerCase().startsWith("medusa ")) {
    return true
  }

  return false
}

export default async function removeMedusaProducts({ container }: ExecArgs) {
  const logger = container.resolve(ContainerRegistrationKeys.LOGGER)
  const query = container.resolve(ContainerRegistrationKeys.QUERY)

  const { data: products } = await query.graph({
    entity: "product",
    fields: ["id", "handle", "title"],
  })

  const toDelete = products.filter((product) =>
    shouldRemove(product.handle, product.title)
  )

  if (!toDelete.length) {
    logger.info("No Medusa starter / demo products found. Nothing to delete.")
    return
  }

  const ids = toDelete.map((product) => product.id as string)

  logger.info(
    `Deleting ${ids.length} product(s): ${toDelete
      .map((product) => product.handle || product.title)
      .join(", ")}`
  )

  await deleteProductsWorkflow(container).run({
    input: { ids },
  })

  const search = container.resolve(Modules.SEARCH)
  await search.ingest({
    name: "product.deleted",
    data: ids.map((id) => ({ id })),
  } as never)

  logger.info(`Removed ${ids.length} Medusa / demo product(s).`)
}
