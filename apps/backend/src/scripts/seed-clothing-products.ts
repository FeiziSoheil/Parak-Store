/**
 * Seeds 100 published clothing products across multiple categories.
 *
 *   npx medusa exec ./src/scripts/seed-clothing-products.ts
 *
 * Re-running is idempotent: deterministic handles are skipped if they exist.
 */
import {
  createCollectionsWorkflow,
  createProductCategoriesWorkflow,
  createProductOptionsWorkflow,
  createProductTagsWorkflow,
  createProductsWorkflow,
} from "@medusajs/medusa/core-flows"
import {
  ContainerRegistrationKeys,
  MedusaError,
  Modules,
  ProductStatus,
} from "@medusajs/framework/utils"
import type { ExecArgs } from "@medusajs/framework/types"

const PRODUCT_COUNT = 100
const HANDLE_PREFIX = "clothing"
const BATCH_SIZE = 10
const MAX_VARIANTS = 12
const INGEST_CHUNK_SIZE = 25

function makeRandom(seed: number) {
  let state = seed

  return () => {
    state = (state + 0x6d2b79f5) | 0
    let t = Math.imul(state ^ (state >>> 15), 1 | state)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

const ADJECTIVES = [
  "Vintage",
  "Classic",
  "Relaxed",
  "Tailored",
  "Oversized",
  "Everyday",
  "Heritage",
  "Essential",
  "Cropped",
  "Lightweight",
  "Premium",
  "Urban",
]

const MATERIALS = [
  "Cotton",
  "Linen",
  "Merino",
  "Denim",
  "Fleece",
  "Twill",
  "Wool",
  "Silk",
]

type ClothingType = {
  name: string
  category: string
  image: string
}

const CLOTHING_TYPES: ClothingType[] = [
  {
    name: "Tee",
    category: "T-Shirts",
    image:
      "https://medusa-public-images.s3.eu-west-1.amazonaws.com/tee-black-front.png",
  },
  {
    name: "Polo",
    category: "T-Shirts",
    image:
      "https://medusa-public-images.s3.eu-west-1.amazonaws.com/tee-white-front.png",
  },
  {
    name: "Hoodie",
    category: "Hoodies",
    image:
      "https://medusa-public-images.s3.eu-west-1.amazonaws.com/sweatshirt-vintage-front.png",
  },
  {
    name: "Sweatshirt",
    category: "Sweatshirts",
    image:
      "https://medusa-public-images.s3.eu-west-1.amazonaws.com/sweatshirt-vintage-front.png",
  },
  {
    name: "Crewneck",
    category: "Sweatshirts",
    image:
      "https://medusa-public-images.s3.eu-west-1.amazonaws.com/sweatshirt-vintage-front.png",
  },
  {
    name: "Joggers",
    category: "Pants",
    image:
      "https://medusa-public-images.s3.eu-west-1.amazonaws.com/sweatpants-gray-front.png",
  },
  {
    name: "Chinos",
    category: "Pants",
    image:
      "https://medusa-public-images.s3.eu-west-1.amazonaws.com/sweatpants-gray-front.png",
  },
  {
    name: "Jeans",
    category: "Jeans",
    image:
      "https://medusa-public-images.s3.eu-west-1.amazonaws.com/sweatpants-gray-front.png",
  },
  {
    name: "Shorts",
    category: "Shorts",
    image:
      "https://medusa-public-images.s3.eu-west-1.amazonaws.com/shorts-vintage-front.png",
  },
  {
    name: "Overshirt",
    category: "Jackets",
    image:
      "https://medusa-public-images.s3.eu-west-1.amazonaws.com/sweatshirt-vintage-front.png",
  },
  {
    name: "Jacket",
    category: "Jackets",
    image:
      "https://medusa-public-images.s3.eu-west-1.amazonaws.com/sweatshirt-vintage-front.png",
  },
  {
    name: "Blazer",
    category: "Blazers",
    image:
      "https://medusa-public-images.s3.eu-west-1.amazonaws.com/sweatshirt-vintage-front.png",
  },
  {
    name: "Dress",
    category: "Dresses",
    image:
      "https://medusa-public-images.s3.eu-west-1.amazonaws.com/tee-white-front.png",
  },
  {
    name: "Skirt",
    category: "Skirts",
    image:
      "https://medusa-public-images.s3.eu-west-1.amazonaws.com/shorts-vintage-front.png",
  },
  {
    name: "Cap",
    category: "Accessories",
    image:
      "https://medusa-public-images.s3.eu-west-1.amazonaws.com/coffee-mug.png",
  },
  {
    name: "Beanie",
    category: "Accessories",
    image:
      "https://medusa-public-images.s3.eu-west-1.amazonaws.com/coffee-mug.png",
  },
  {
    name: "Socks",
    category: "Accessories",
    image:
      "https://medusa-public-images.s3.eu-west-1.amazonaws.com/coffee-mug.png",
  },
  {
    name: "Tote",
    category: "Bags",
    image:
      "https://medusa-public-images.s3.eu-west-1.amazonaws.com/coffee-mug.png",
  },
  {
    name: "Sneakers",
    category: "Shoes",
    image:
      "https://medusa-public-images.s3.eu-west-1.amazonaws.com/tee-black-front.png",
  },
  {
    name: "Loafers",
    category: "Shoes",
    image:
      "https://medusa-public-images.s3.eu-west-1.amazonaws.com/tee-white-front.png",
  },
]

const CATEGORIES = [
  ...new Set(CLOTHING_TYPES.map((type) => type.category)),
]

const COLLECTIONS = [
  "Summer Essentials",
  "Winter Layers",
  "Everyday Basics",
  "Limited Run",
  "Office Ready",
  "Weekend Casual",
]

const TAGS = [
  "sale",
  "new-arrival",
  "organic",
  "unisex",
  "bestseller",
  "last-chance",
  "sustainable",
]

const EXTRA_OPTIONS = [
  { title: "Material", values: ["Cotton", "Linen", "Merino", "Fleece"] },
  { title: "Fit", values: ["Regular", "Slim", "Relaxed"] },
  { title: "Sleeve", values: ["Short", "Long"] },
]

type SharedOption = { id: string; title: string; values: string[] }

export default async function seedClothingProducts({ container }: ExecArgs) {
  const logger = container.resolve(ContainerRegistrationKeys.LOGGER)
  const query = container.resolve(ContainerRegistrationKeys.QUERY)
  const random = makeRandom(20261015)

  const pick = <T>(items: T[]): T => items[Math.floor(random() * items.length)]
  const pickSome = <T>(items: T[], max: number): T[] => {
    const count = Math.floor(random() * (max + 1))
    return [...items].sort(() => random() - 0.5).slice(0, count)
  }

  const { data: salesChannels } = await query.graph({
    entity: "sales_channel",
    fields: ["id", "name"],
  })
  const { data: shippingProfiles } = await query.graph({
    entity: "shipping_profile",
    fields: ["id"],
  })
  const { data: stores } = await query.graph({
    entity: "store",
    fields: ["id", "supported_currencies.currency_code"],
  })

  const salesChannel = salesChannels[0]
  const shippingProfile = shippingProfiles[0]

  if (!salesChannel || !shippingProfile) {
    throw new MedusaError(
      MedusaError.Types.NOT_FOUND,
      "No sales channel or shipping profile found. Run the initial data seed first."
    )
  }

  const currencyCodes: string[] = (stores[0]?.supported_currencies ?? [])
    .map((currency) => currency?.currency_code)
    .filter((code): code is string => Boolean(code))

  if (!currencyCodes.length) {
    throw new MedusaError(
      MedusaError.Types.NOT_FOUND,
      "The store has no supported currencies."
    )
  }

  logger.info(
    `Seeding into "${salesChannel.name}" with currencies: ${currencyCodes.join(", ")}`
  )

  // ---- Categories ---------------------------------------------------------

  const { data: existingCategories } = await query.graph({
    entity: "product_category",
    fields: ["id", "name"],
  })
  const missingCategories = CATEGORIES.filter(
    (name) => !existingCategories.some((category) => category.name === name)
  )

  if (missingCategories.length) {
    await createProductCategoriesWorkflow(container).run({
      input: {
        product_categories: missingCategories.map((name) => ({
          name,
          is_active: true,
        })),
      },
    })
    logger.info(`Created ${missingCategories.length} categor(ies)`)
  }

  const { data: allCategories } = await query.graph({
    entity: "product_category",
    fields: ["id", "name"],
  })
  const categoryByName = new Map(
    allCategories.map((category) => [category.name as string, category.id as string])
  )

  // ---- Collections, tags and options --------------------------------------

  const { data: existingCollections } = await query.graph({
    entity: "product_collection",
    fields: ["id", "title"],
  })
  const missingCollections = COLLECTIONS.filter(
    (title) =>
      !existingCollections.some((collection) => collection.title === title)
  )

  if (missingCollections.length) {
    await createCollectionsWorkflow(container).run({
      input: { collections: missingCollections.map((title) => ({ title })) },
    })
    logger.info(`Created ${missingCollections.length} collection(s)`)
  }

  const { data: allCollections } = await query.graph({
    entity: "product_collection",
    fields: ["id", "title"],
  })

  const { data: existingTags } = await query.graph({
    entity: "product_tag",
    fields: ["id", "value"],
  })
  const missingTags = TAGS.filter(
    (value) => !existingTags.some((tag) => tag.value === value)
  )

  if (missingTags.length) {
    await createProductTagsWorkflow(container).run({
      input: { product_tags: missingTags.map((value) => ({ value })) },
    })
    logger.info(`Created ${missingTags.length} tag(s)`)
  }

  const { data: allTags } = await query.graph({
    entity: "product_tag",
    fields: ["id", "value"],
  })

  const { data: existingOptions } = await query.graph({
    entity: "product_option",
    fields: ["id", "title", "values.value"],
    filters: { is_exclusive: false },
  })

  const missingOptions = EXTRA_OPTIONS.filter(
    (option) =>
      !existingOptions.some((existing) => existing.title === option.title)
  )

  if (missingOptions.length) {
    await createProductOptionsWorkflow(container).run({
      input: { product_options: missingOptions },
    })
    logger.info(`Created ${missingOptions.length} shared option(s)`)
  }

  const { data: optionRows } = await query.graph({
    entity: "product_option",
    fields: ["id", "title", "values.value"],
    filters: { is_exclusive: false },
  })

  const sharedOptions: SharedOption[] = optionRows
    .map((option) => ({
      id: option.id as string,
      title: option.title as string,
      values: (option.values ?? [])
        .map((value) => value?.value)
        .filter((value): value is string => Boolean(value)),
    }))
    .filter((option) => option.values.length > 0)

  const sizeOption = sharedOptions.find((option) => option.title === "Size")

  if (!sizeOption) {
    throw new MedusaError(
      MedusaError.Types.NOT_FOUND,
      'No shared "Size" option found. Run the initial data seed first.'
    )
  }

  // ---- Build products -----------------------------------------------------

  const { data: alreadySeeded } = await query.graph({
    entity: "product",
    fields: ["handle"],
  })
  const takenHandles = new Set(
    alreadySeeded.map((product) => product.handle).filter(Boolean)
  )

  const products: Record<string, unknown>[] = []

  for (let index = 0; index < PRODUCT_COUNT; index++) {
    const clothingType = CLOTHING_TYPES[index % CLOTHING_TYPES.length]
    const handle = `${HANDLE_PREFIX}-${index + 1}-${clothingType.name.toLowerCase()}`

    if (takenHandles.has(handle)) {
      continue
    }

    const title = `${pick(ADJECTIVES)} ${pick(MATERIALS)} ${clothingType.name}`
    const categoryId = categoryByName.get(clothingType.category)

    const chosenOptions = [
      sizeOption,
      ...pickSome(
        sharedOptions.filter((option) => option.title !== "Size"),
        2
      ),
    ]

    let combinations: Record<string, string>[] = [{}]

    for (const option of chosenOptions) {
      const next: Record<string, string>[] = []

      for (const combination of combinations) {
        for (const value of option.values) {
          if (next.length >= MAX_VARIANTS) {
            break
          }
          next.push({ ...combination, [option.title]: value })
        }
      }

      combinations = next
    }

    const collection = pick(allCollections)
    const chosenTags = pickSome(allTags, 3)
    const thumbnail = clothingType.image
    const basePrice = 15 + Math.floor(random() * 120)

    products.push({
      title,
      handle,
      subtitle: `${clothingType.category} — ${clothingType.name}`,
      description: `A ${title.toLowerCase()} from our ${clothingType.category.toLowerCase()} collection.`,
      status: ProductStatus.PUBLISHED,
      thumbnail,
      images: [{ url: thumbnail }],
      weight: 200 + Math.floor(random() * 600),
      shipping_profile_id: shippingProfile.id,
      collection_id: collection?.id,
      tag_ids: chosenTags.map((tag) => tag.id as string),
      category_ids: categoryId ? [categoryId] : [],
      sales_channels: [{ id: salesChannel.id }],
      options: chosenOptions.map((option) => ({ id: option.id })),
      variants: combinations.map((combination) => ({
        title: Object.values(combination).join(" / "),
        sku: `${handle.toUpperCase()}-${Object.values(combination).join("-").toUpperCase()}`,
        options: combination,
        prices: currencyCodes.map((currency_code) => ({
          amount: basePrice,
          currency_code,
        })),
      })),
    })
  }

  if (!products.length) {
    logger.info("Every clothing product already exists. Nothing to do.")
    return
  }

  let created = 0

  for (let start = 0; start < products.length; start += BATCH_SIZE) {
    const batch = products.slice(start, start + BATCH_SIZE)

    await createProductsWorkflow(container).run({
      input: { products: batch as never },
    })

    created += batch.length
    logger.info(`Created ${created}/${products.length} clothing products`)
  }

  const search = container.resolve(Modules.SEARCH)
  const { data: allProducts } = await query.graph({
    entity: "product",
    fields: ["id"],
  })

  for (let start = 0; start < allProducts.length; start += INGEST_CHUNK_SIZE) {
    const chunk = allProducts.slice(start, start + INGEST_CHUNK_SIZE)

    await search.ingest({
      name: "product.created",
      data: chunk.map((product) => ({ id: product.id })),
    } as never)
  }

  logger.info(`Search index caught up for ${allProducts.length} product(s).`)
  logger.info(
    `Done. Added ${created} clothing products across ${CATEGORIES.length} categories.`
  )
}
