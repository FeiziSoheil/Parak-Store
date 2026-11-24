# Parak — Image Inventory & Generation Prompts

Guide for generating brand photography that matches the Parak storefront design system.

## Design system (reference)

| Token | Hex | Role |
|-------|-----|------|
| Ink | `#141414` | Primary text, CTAs, dark bands |
| Mist | `#F2F2F0` | Page wash, hero base |
| Stone | `#E4E3DF` | Borders, muted surfaces |
| Slate | `#2A3439` | Secondary text, cool shadows |

- **Fonts:** Syne (display) + Manrope (body)
- **Mood:** Quiet contemporary apparel — modern essentials, quiet confidence
- **Avoid:** Neon, purple gradients, glossy ecommerce glare, logos/text baked into images, busy props

### Shared prompt prefix

Paste this before any prompt (or keep it in your generator’s style lock):

```text
Brand photography for Parak, a quiet contemporary clothing label. Palette: warm mist #F2F2F0, stone #E4E3DF, near-black ink #141414, muted slate #2A3439. Soft natural daylight, low contrast, matte fabrics, no logos, no text, no watermarks, no neon, no purple gradients, no glossy ecommerce studio glare. Editorial fashion photography, Scandinavian calm, honest everyday luxury.
```

---

## 1. Image inventory

### Hardcoded / brand slots (generate these first)

| # | Placement | Source file | Role | Aspect / size | Current asset |
|---|-----------|-------------|------|---------------|---------------|
| 1 | Hero | `apps/storefront/src/modules/home/components/hero/index.tsx` | Full-bleed homepage background (`object-[center_35%]`) | Full viewport; prefer tall crop | Medusa `sweatshirt-vintage-front.png` |
| 2 | Collection Spotlight A | `.../collection-spotlight/index.tsx` | Left collection card | ~3:4, min-h 520px desktop | `tee-black-front.png` |
| 3 | Collection Spotlight B | same | Right collection card | same | `sweatpants-gray-front.png` |
| 4 | Materials | `.../materials/index.tsx` | Left half editorial split | ~1:1–4:5, 50vw desktop | `tee-white-front.png` |
| 5 | Category Mosaic fallback 1 | `.../category-mosaic/index.tsx` | Category tile when no product thumb | **3:4** | `tee-white-front.png` |
| 6 | Category Mosaic fallback 2 | same | Category tile | **3:4** | `sweatshirt-vintage-front.png` |
| 7 | Category Mosaic fallback 3 | same | Category tile | **3:4** | `shorts-vintage-front.png` |
| 8 | Category Mosaic fallback 4 | same | Category tile | **3:4** | `sweatpants-gray-front.png` |
| 9 | Open Graph | `apps/storefront/src/app/opengraph-image.jpg` | Link preview | **1600×900** | Local JPEG |
| 10 | Twitter Card | `apps/storefront/src/app/twitter-image.jpg` | Twitter card | **1600×900** | Local JPEG |

### Dynamic (from Medusa product media)

| # | Placement | Role | Aspect |
|---|-----------|------|--------|
| 11 | Lookbook (`lookbook/index.tsx`) | Horizontal strip, up to 6 frames | **3:4**, 220–280px wide |
| 12 | Product shelves / rails / store grid (`thumbnail`) | Product cards | Featured **3:4**, default **9:16** |
| 13 | PDP Image Gallery | Product detail gallery | **≈29:34** |
| 14 | Cart / search / orders | Micro thumbs | Square or ~56×64 (crop from product shots) |

**Not images:** brand mark is text “Parak” (no logo file). Favicon is `public/favicon.ico` only.

---

## 2. Generation prompts

### 1 — Hero (full-bleed)

**Suggested size:** 2400×3000 (or 2400×1600). Tall crop works better with `object-[center_35%]`.

```text
Editorial full-bleed fashion photograph for a clothing brand homepage hero. A single model wearing a soft, heavyweight vintage-wash crewneck sweatshirt in warm heather grey, mid-shot to upper body, calm neutral expression, looking slightly off-camera. Soft north-facing daylight, gentle shadows, misty warm-grey backdrop (#F2F2F0–#E4E3DF). Composition leaves open negative space in the lower third and left side for large typography overlay. Fabric texture visible: brushed fleece, natural drape. Quiet confidence, modern essentials mood. Shot on 85mm lens, shallow depth of field, cinematic but understated. No logos, no text, no props clutter. Photorealistic, high resolution, muted color grade matching ink/mist/stone palette.
```

**Suggested filename:** `public/images/hero.jpg`

---

### 2 — Collection Spotlight A

**Suggested size:** 1600×2000

```text
Large editorial collection card photograph, vertical crop. Model in a refined black cotton tee, relaxed everyday pose, standing in a bright minimal interior with stone-colored walls and soft morning light. Focus on the garment silhouette and fabric hand-feel. Warm mist background tones, low-saturation grade. Composition: subject centered-upper so a dark gradient can sit at the bottom for white title text. Quiet contemporary menswear/womenswear unisex styling. Matte fabric, no logos, no text overlays in the image. Photorealistic fashion editorial, 50mm, natural light.
```

**Suggested filename:** `public/images/spotlight-01.jpg`

---

### 3 — Collection Spotlight B

**Suggested size:** 1600×2000

```text
Matching editorial pair to a brand collection series. Model wearing soft grey tailored sweatpants / relaxed lounge trousers, full-length or three-quarter frame, walking slowly across a calm concrete-and-linen set. Cool slate undertones (#2A3439) balanced with warm mist highlights. Same lighting language as a quiet apparel lookbook: soft window light, no hard flash. Leave lower third slightly darker for title overlay. Cohesive with a black-tee companion image — same color grade, same calm mood. No logos, no text. Photorealistic, muted, premium everyday.
```

**Suggested filename:** `public/images/spotlight-02.jpg`

---

### 4 — Materials (split editorial)

**Suggested size:** 1800×1800 or 1600×2000

```text
Extreme close-up fabric detail photograph for a materials story section. Soft washed white cotton jersey tee laid or draped, macro texture of knit loops and natural fiber, gentle folds catching soft daylight. Palette: ivory, mist grey, warm stone. Sense of touch — “soft where it matters.” Clean, almost abstract composition, half of a split-layout webpage (image left, copy right). No model face required; hands optional and understated if present. No logos, no text, no harsh studio lighting. Photorealistic textile photography, shallow depth, tactile and quiet.
```

**Suggested filename:** `public/images/materials.jpg`

---

### 5 — Category Mosaic fallback (Tops / T-Shirts)

**Suggested size:** 1200×1600 (3:4)

```text
Vertical 3:4 fashion still for a category tile labeled tops. Clean white cotton t-shirt on a calm figure or artfully hung, soft mist background (#F2F2F0), centered product, space at bottom for white category name overlay. Quiet Parak brand aesthetic, muted grade, natural light, no logos, no text in frame. Photorealistic ecommerce-editorial hybrid.
```

**Suggested filename:** `public/images/category-tops.jpg`

---

### 6 — Category Mosaic fallback (Layers / Sweatshirts)

**Suggested size:** 1200×1600 (3:4)

```text
Vertical 3:4 category tile. Soft vintage-wash sweatshirt in warm grey, worn or styled simply against a stone-toned backdrop. Editorial calm, fabric texture clear, lower third free for dark gradient + title. Matching color grade to mist/ink palette. No logos, no text. Photorealistic.
```

**Suggested filename:** `public/images/category-layers.jpg`

---

### 7 — Category Mosaic fallback (Shorts / light bottoms)

**Suggested size:** 1200×1600 (3:4)

```text
Vertical 3:4 category tile. Tailored casual shorts in washed sand or soft grey, lifestyle crop mid-body to knee, bright airy daylight, warm stone environment. Quiet contemporary clothing brand look. Bottom area darker for overlay text. No logos, no text. Photorealistic.
```

**Suggested filename:** `public/images/category-shorts.jpg`

---

### 8 — Category Mosaic fallback (Pants / heavy bottoms)

**Suggested size:** 1200×1600 (3:4)

```text
Vertical 3:4 category tile. Grey relaxed sweatpants or chinos, full lower-body editorial crop, soft concrete and linen tones, muted slate shadows. Cohesive with other Parak category tiles (same light, same grade). Space at bottom for category name. No logos, no text. Photorealistic.
```

**Suggested filename:** `public/images/category-pants.jpg`

---

### 9 & 10 — Open Graph / Twitter Card

**Exact size:** **1600×900** (one image; copy to both files)

```text
1600x900 social share image for clothing brand Parak. Wide cinematic still: model in essential wardrobe (soft grey sweatshirt or black tee), calm pose, misty warm-grey environment, generous negative space on the left or center for optional brand wordmark later. Mood: modern essentials, quiet confidence. Muted palette ink #141414, mist #F2F2F0, stone #E4E3DF. No readable text in the image, no logos, no UI mockups. Photorealistic, sharp, suitable as Open Graph and Twitter card.
```

**Suggested filenames:**

- `apps/storefront/src/app/opengraph-image.jpg`
- `apps/storefront/src/app/twitter-image.jpg`

---

### 11 — Lookbook frames (series of 6)

**Suggested size:** 1200×1600 (3:4) each

Template (replace `[GARMENT]`):

```text
Vertical 3:4 lookbook frame for a dark-ink fashion strip. Model wearing [GARMENT] from a quiet contemporary brand, candid editorial moment — walking, adjusting sleeve, or still portrait. Soft daylight, desaturated warm-cool mix, background slightly darker so it sits on a near-black (#141414) section. Lower third can accept a subtle dark gradient for product title. Natural skin, matte fabrics, no logos, no text. Photorealistic street-studio hybrid, cohesive series of six.
```

`[GARMENT]` variants:

1. oversized hoodie  
2. washed black tee  
3. grey joggers  
4. linen overshirt  
5. soft dress  
6. structured jacket  

These usually come from product thumbnails in Medusa; generate only if you want dedicated lookbook art direction.

---

### 12–14 — Product photography

See **[Section 5 — Product catalog images](#5-product-catalog-images-100-products)** below for the full plan (counts, per-type prompts, naming).

---

## 3. Generation priority

1. Hero  
2. Materials + both Collection Spotlights  
3. Four Category Mosaic fallbacks  
4. OG / Twitter `1600×900`  
5. **100 product catalog images** (1 front per product — Section 5)  
6. Optional: Lookbook series + PDP extra angles  

---

## 4. Wiring (applied)

Images from `Oct 15 - 13_50/` were copied **byte-identical** (no re-encode) into:

```text
apps/storefront/public/images/brand/     # hero, spotlights, materials, categories, og
apps/storefront/public/images/products/  # clothing-1-tee.jpg … clothing-100-*.jpg
apps/backend/static/products/            # same product files (backup)
```

Storefront components use `/images/brand/...`.  
Product thumbnails in Medusa point to `http://localhost:8000/images/products/{handle}.jpg`.

Re-apply product URLs after reseeding:

```bash
cd apps/backend && STOREFRONT_URL=http://localhost:8000 npx medusa exec ./src/scripts/apply-clothing-images.ts
```

---

## 5. Product catalog images (100 products)

Seed script: `apps/backend/src/scripts/seed-clothing-products.ts`  
Handles: `clothing-1-tee` … `clothing-100-loafers` (20 types × 5 each).

### How many to generate?

| Plan | Images | What you get |
|------|-------:|--------------|
| **A — Minimum (recommended start)** | **100** | 1 front hero per product → grid, shelves, lookbook, cart |
| **B — Strong PDP** | **200** | Front + fabric/detail (or back) per product |
| **C — Full gallery** | **400** | Front + back + macro + lifestyle per product |

**Start with Plan A (100).** Use the same file as thumbnail + first gallery image in Medusa. Add Plan B/C later for bestsellers only if needed.

Grid / Lookbook aspect: **3:4** → generate **1200×1600**.  
PDP crop is ~29:34 — same 3:4 shots work with `object-cover`.

### Shared product prefix

```text
Parak catalog product photo. Quiet contemporary clothing brand. Seamless warm mist background #F2F2F0, soft even daylight, matte fabric, true color, subtle natural shadow, no mannequin glare, no logos, no text, no hangtags, no watermarks. Ghost mannequin OR simple on-model crop — keep face minimal or crop above nose if on-model. Aspect ratio 3:4, centered garment, ecommerce-editorial hybrid, muted stone/ink grade, photorealistic, sharp fabric texture.
```

### Color / material variants (cycle per type)

Each type appears **5 times**. Rotate these so the five shots don’t look identical:

| Variant # | Color mood | Material cue |
|-----------|------------|--------------|
| 1 | Soft black / ink | Cotton |
| 2 | Warm heather grey | Fleece or merino |
| 3 | Off-white / ivory | Linen or washed cotton |
| 4 | Stone / sand | Twill or denim (where relevant) |
| 5 | Muted slate / olive-grey | Wool or heavy cotton |

### Naming convention

```text
clothing-{n}-{type}.jpg

Examples:
  clothing-1-tee.jpg
  clothing-21-hoodie.jpg
  clothing-100-loafers.jpg
```

Match `n` to the product handle index (`clothing-1-tee` → `1`).

---

### Per-type prompts (20 types)

Paste **Shared product prefix** + the type block + one **Variant** row.

#### 1. Tee (handles `clothing-1,21,41,61,81-tee`)

```text
Front catalog shot of a premium everyday crewneck t-shirt, clean silhouette, fine jersey knit, short sleeves, slight natural drape at hem. [VARIANT: color + material]. Centered on mist backdrop, chest-up or full flat-front ghost mannequin. Quiet essential tee for Parak.
```

#### 2. Polo (`…-polo`)

```text
Front catalog shot of a refined short-sleeve polo shirt with a soft collar and minimal placket, no logo embroidery. [VARIANT]. Neat but relaxed fit, matte pique or jersey. Mist backdrop, ecommerce-editorial.
```

#### 3. Hoodie (`…-hoodie`)

```text
Front catalog shot of an oversized heavyweight hoodie with kangaroo pocket and soft hood, drawcords understated (no branding). [VARIANT]. Brushed fleece interior hint at cuff/hem. Centered 3:4, calm and cozy.
```

#### 4. Sweatshirt (`…-sweatshirt`)

```text
Front catalog shot of a classic crewneck sweatshirt, ribbed cuffs and hem, midweight fleece, relaxed shoulders. [VARIANT]. No prints, no logos. Soft mist studio, tactile fabric visible.
```

#### 5. Crewneck (`…-crewneck`)

```text
Front catalog shot of a refined knit crewneck sweater (finer than a sweatshirt), clean round neck, soft drape. [VARIANT: prefer merino/wool cues]. Quiet knitwear editorial on mist background.
```

#### 6. Joggers (`…-joggers`)

```text
Front catalog shot of relaxed tapered joggers, elastic waist (no loud branding), soft cuff ankles, matte fleece or cotton loopback. [VARIANT]. Full garment visible from waist to hem, or ghost lower-body. 3:4 vertical.
```

#### 7. Chinos (`…-chinos`)

```text
Front catalog shot of tailored casual chinos, clean flat front, soft crease optional, matte twill. [VARIANT: sand/stone/ink]. Full-length trousers on ghost mannequin or folded neat front view. Quiet office-casual.
```

#### 8. Jeans (`…-jeans`)

```text
Front catalog shot of modern straight or relaxed jeans, subtle wash (not distressed), matte denim, clean hardware. [VARIANT: indigo-grey, stone, soft black]. No loud whiskering. Mist backdrop, full front.
```

#### 9. Shorts (`…-shorts`)

```text
Front catalog shot of tailored casual shorts above the knee, clean pockets, matte cotton/twill. [VARIANT]. Summer-essential, airy but premium. Centered on mist background.
```

#### 10. Overshirt (`…-overshirt`)

```text
Front catalog shot of a soft structured overshirt / shacket, chest pockets minimal, corozo or matte buttons, worn open or closed. [VARIANT]. Layering piece, linen or twill texture clear.
```

#### 11. Jacket (`…-jacket`)

```text
Front catalog shot of a light everyday jacket (not technical/sport), clean zip or button front, soft shoulders, quiet outerwear. [VARIANT]. Mist studio, full torso, no logos.
```

#### 12. Blazer (`…-blazer`)

```text
Front catalog shot of an unstructured soft blazer, single breasted, natural shoulder, matte wool or cotton blend. [VARIANT: charcoal, stone, soft black]. Office-ready but relaxed Parak mood.
```

#### 13. Dress (`…-dress`)

```text
Front catalog shot of a simple midi or easy day dress, clean lines, no busy prints — solid muted color. [VARIANT]. Soft drape, cotton/linen/silk cue. On-model or ghost, elegant and quiet.
```

#### 14. Skirt (`…-skirt`)

```text
Front catalog shot of a minimal A-line or straight skirt, midi length preferred, matte fabric. [VARIANT]. Clean waistband, no logos. Mist backdrop, vertical 3:4.
```

#### 15. Cap (`…-cap`)

```text
Catalog still life of an unstructured soft baseball cap, matte cotton, no logo embroidery (or tiny tone-on-tone only). [VARIANT]. Soft shadow on mist background, slightly elevated angle, product-centered.
```

#### 16. Beanie (`…-beanie`)

```text
Catalog still life of a soft ribbed beanie, folded cuff, fine knit merino or cotton. [VARIANT]. Cozy winter accessory, no patches/logos. Centered on mist backdrop.
```

#### 17. Socks (`…-socks`)

```text
Catalog flat lay of a pair of fine crew socks, neatly overlapped, ribbed cuff visible, matte cotton/merino. [VARIANT]. Minimal still life on mist background, soft shadow.
```

#### 18. Tote (`…-tote`)

```text
Catalog shot of a structured-casual canvas or heavy cotton tote bag, standing or softly stuffed to show shape, long straps, no printed graphics. [VARIANT: natural canvas, ink, stone]. Mist backdrop.
```

#### 19. Sneakers (`…-sneakers`)

```text
Catalog three-quarter view of minimal low-top sneakers, clean cupsole, matte leather or canvas, quiet hardware. [VARIANT: white/grey/ink — keep understated]. Soft shadow, mist background, no loud branding.
```

#### 20. Loafers (`…-loafers`)

```text
Catalog three-quarter view of refined leather loafers, soft almond toe, matte finish, minimal stitching. [VARIANT: black, taupe, dark brown-grey]. Quiet footwear editorial on mist backdrop.
```

---

### Variant fill-in examples (for Tee × 5)

Use these as the `[VARIANT]` line:

1. Soft black cotton jersey, washed matte finish  
2. Warm heather grey midweight cotton  
3. Ivory / off-white washed cotton, slightly lived-in  
4. Stone beige cotton, sun-faded quietly  
5. Muted slate blue-grey cotton  

Repeat the same 5 color moods for every other type (adjust material words to match the type).

---

### Checklist: 100 filenames

| Type | Product indices (`n`) | Files |
|------|----------------------|-------|
| Tee | 1, 21, 41, 61, 81 | `clothing-{n}-tee.jpg` |
| Polo | 2, 22, 42, 62, 82 | `clothing-{n}-polo.jpg` |
| Hoodie | 3, 23, 43, 63, 83 | `clothing-{n}-hoodie.jpg` |
| Sweatshirt | 4, 24, 44, 64, 84 | `clothing-{n}-sweatshirt.jpg` |
| Crewneck | 5, 25, 45, 65, 85 | `clothing-{n}-crewneck.jpg` |
| Joggers | 6, 26, 46, 66, 86 | `clothing-{n}-joggers.jpg` |
| Chinos | 7, 27, 47, 67, 87 | `clothing-{n}-chinos.jpg` |
| Jeans | 8, 28, 48, 68, 88 | `clothing-{n}-jeans.jpg` |
| Shorts | 9, 29, 49, 69, 89 | `clothing-{n}-shorts.jpg` |
| Overshirt | 10, 30, 50, 70, 90 | `clothing-{n}-overshirt.jpg` |
| Jacket | 11, 31, 51, 71, 91 | `clothing-{n}-jacket.jpg` |
| Blazer | 12, 32, 52, 72, 92 | `clothing-{n}-blazer.jpg` |
| Dress | 13, 33, 53, 73, 93 | `clothing-{n}-dress.jpg` |
| Skirt | 14, 34, 54, 74, 94 | `clothing-{n}-skirt.jpg` |
| Cap | 15, 35, 55, 75, 95 | `clothing-{n}-cap.jpg` |
| Beanie | 16, 36, 56, 76, 96 | `clothing-{n}-beanie.jpg` |
| Socks | 17, 37, 57, 77, 97 | `clothing-{n}-socks.jpg` |
| Tote | 18, 38, 58, 78, 98 | `clothing-{n}-tote.jpg` |
| Sneakers | 19, 39, 59, 79, 99 | `clothing-{n}-sneakers.jpg` |
| Loafers | 20, 40, 60, 80, 100 | `clothing-{n}-loafers.jpg` |

**Total Plan A: 100 images.**

---

### Optional Plan B (extra per product)

Only if you want richer PDP. Second shot prompt:

```text
Same Parak product as the front shot, matching colorway: close-up fabric and construction detail (stitching, cuff, collar, sole, or weave). Soft daylight, mist backdrop, 3:4, no logos, photorealistic tactile macro-editorial.
```

→ +100 files named `clothing-{n}-{type}-detail.jpg` → **200 total**.

---

### After generation

1. Upload each image to the matching product in **Medusa Admin** (thumbnail + images).  
2. Or ask to wire a script that maps `clothing-{n}-{type}.jpg` → product handle `clothing-{n}-{type}`.  
3. Lookbook / shelves pick up `product.thumbnail` automatically — no storefront code change needed.

---

## 6. Grand total (brand + products)

| Set | Count |
|-----|------:|
| Brand hardcoded slots | 9 |
| Products Plan A | **100** |
| **Total to generate now** | **109** |
| Optional Lookbook dedicated | +6 |
| Optional Plan B details | +100 |
