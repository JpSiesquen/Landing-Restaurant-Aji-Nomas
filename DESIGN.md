# Design System Strategy: The Sensory Gallery

## 1. Overview & Creative North Star
This design system is built to mirror the culinary soul of Lima: a collision of ancestral tradition and avant-garde precision. We are moving away from the "template" look of standard restaurant sites to embrace a **Creative North Star** we call **"The Sensory Gallery."**

The objective is to treat the UI as a high-end editorial spread. We achieve this through **intentional asymmetry**, where images of vibrant Peruvian ingredients overlap container boundaries, and **high-contrast typography scales** that prioritize white space over structural lines. By breaking the rigid grid, we create a sense of movement and "flavor" that feels expensive, curated, and deeply intentional.

---

## 2. Colors: Tonal Depth & Appetite
Our palette is a sophisticated interpretation of Peru’s rich biodiversity. We use deep reds and ochres to stimulate the appetite, balanced by charcoal and bone neutrals to maintain a premium "fine-dining" atmosphere.

### The "No-Line" Rule
**Explicit Instruction:** You are prohibited from using 1px solid borders for sectioning or containment. 
Boundaries must be defined solely through background color shifts. For example, a card should be defined by placing a `surface_container_lowest` element against a `surface_container_low` section. We define space through mass and tone, not outlines.

### Surface Hierarchy & Nesting
Treat the UI as physical layers of fine paper. 
- **Base Layer:** Use `surface` (#f7f7f2) for the primary page background.
- **Elevation Layer 1:** Use `surface_container_low` (#f1f1ec) for secondary sections (e.g., a "Chef’s Specials" block).
- **Elevation Layer 2:** Use `surface_container_highest` (#dcddd7) for high-impact callouts or persistent navigation.
- **Nesting:** For deep hierarchy, nest a `surface_container_lowest` card inside a `surface_container_high` section to create a soft, natural "lift."

### The Glass & Gradient Rule
To move beyond "flat" design:
- Use **Glassmorphism** for floating elements (like a sticky reservation bar). Apply `surface_container` with 80% opacity and a `backdrop-blur` of 16px.
- Use **Signature Gradients** for primary CTAs. Transition from `primary` (#b12121) to `primary_container` (#ff766c) at a 135-degree angle to provide a velvet-like texture that flat color cannot replicate.

---

## 3. Typography: Editorial Authority
We utilize a high-contrast pairing: **Epilogue** for its bold, charismatic modernist weight and **Manrope** for its clean, technical legibility.

- **Display (Epilogue):** Used for dish names and major storytelling headlines. The `display-lg` (3.5rem) should be used with tight letter-spacing to feel like a high-end magazine cover.
- **Headline (Epilogue):** Guides the user through the narrative of the menu. Use `headline-lg` for section headers, always paired with generous top-margin spacing.
- **Body & Titles (Manrope):** All functional text and descriptions. Use `body-lg` for descriptions of ingredients to ensure the "story" of the food is readable.
- **Labels (Manrope):** Reserved for technical data (e.g., "Gluten-Free," "Spicy Level") in `label-md`.

---

## 4. Elevation & Depth: Tonal Layering
Traditional shadows and borders are "cheap" shortcuts. In this design system, we convey hierarchy through **Tonal Layering**.

### The Layering Principle
Instead of a shadow, place a `surface_container_lowest` card on a `surface_container_low` background. The slight shift in "off-white" creates a sophisticated, architectural depth.

### Ambient Shadows
When an element must "float" (e.g., a modal or a floating action button):
- Use an **Extra-Diffused Shadow**: Blur 24px, Spread -4px.
- **Shadow Color:** Use the `on_surface` color at 6% opacity. Never use pure black shadows; they look "dirty" on our warm palette.

### The "Ghost Border" Fallback
If a border is required for accessibility (e.g., input fields), use a **Ghost Border**:
- Token: `outline_variant` at 20% opacity. 
- **Forbid:** 100% opaque, high-contrast borders.

---

## 5. Components: Functional Elegance

### Buttons
- **Primary:** `primary` background with `on_primary` text. No border. Use `rounded-md` (0.375rem) for a modern, slightly sharp look.
- **Secondary:** Use `secondary_container` with `on_secondary_container` text. This provides a warm, earthy alternative to the aggressive red.
- **Tertiary:** Text-only in `primary` with a 2px `surface_tint` underline that expands on hover.

### Cards (The "Menu Item")
- Forbid divider lines. Separate the dish name (`title-lg`) from the price and description using vertical white space (use the 1.5rem spacing token).
- Use `surface_container_low` for the card background.
- Apply a `primary` accent corner (only 4px wide) to featured "Chef’s Choice" items.

### Selection Chips
- Use `tertiary_container` for selected states. The golden yellow (`tertiary`) signals a premium "Gold Standard" selection.
- Unselected chips should use `surface_container_highest` with no border.

### Input Fields
- Underline-only style using `outline_variant` at 40% opacity.
- On focus, transition the underline to `primary` with a 2px thickness. This minimizes visual clutter in a text-heavy menu.

---

## 6. Do’s and Don’ts

### Do:
- **Do overlap elements:** Let a high-resolution image of a ceviche dish "break" out of its container and overlap into the next section.
- **Do use color as a separator:** Transition from a `surface` section to a `secondary_container` section to signal a change in content (e.g., from "Menu" to "Our Story").
- **Do use asymmetric margins:** Align text to the left but allow images to sit off-center to create a dynamic, editorial rhythm.

### Don't:
- **Don't use 1px dividers:** Never use a line to separate menu items. Use the space.
- **Don't use pure black:** Use `on_background` (#2d2f2c) for text. Pure black is too harsh for the warm, appetizing tones of this system.
- **Don't over-round corners:** Stick to `rounded-md` (0.375rem). The system should feel sharp and professional, not bubbly or "app-like."
- **Don't crowd the text:** If a section feels "full," add more padding. Luxury is defined by the space you *don't* use.