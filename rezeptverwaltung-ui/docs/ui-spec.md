# UI Specification - Recipe Management Prototype

This specification reverse engineers the UI shown in the provided application screenshot and aligns it with the uploaded functional specification. It is written so another frontend developer can recreate the interface without needing the original visual reference.

---

## 1. Design Direction

The UI is a **clean, card-based recipe application** with a **warm culinary visual tone** and **light, modern productivity styling**.

### Core visual characteristics

- **Bright neutral app shell** with soft off-white background.
- **Strong green primary color** used for branding, actions, category accents, badges, and headings.
- **Food photography** used prominently in hero, cards, and recipe detail content.
- **Rounded cards** with light borders and soft shadows.
- **Compact but comfortable spacing**, optimized for dashboard-like browsing.
- **Mobile-first card layout** that scales into a 3-column desktop composition.
- **Balanced mix of editorial and app UI patterns**:
  - editorial through large food imagery and hero presentation
  - app UI through forms, badges, search, actions, sidebars

### Tone

- Friendly
- Organized
- Fresh
- Practical
- Visually approachable rather than ultra-minimal

---

## 2. Design Tokens

## 2.1 Color Tokens

Use semantic tokens rather than hardcoding values in components.

### Brand / Primary

| Token | Value | Usage |
|---|---|---|
| `--color-primary-700` | `#4F7F2B` | Main action buttons, section labels, active accents |
| `--color-primary-600` | `#5E8E35` | Hover states, strong highlights |
| `--color-primary-500` | `#6FA043` | Secondary brand surfaces |
| `--color-primary-100` | `#EEF6E6` | Tinted backgrounds, icon tiles |
| `--color-primary-50` | `#F7FBF3` | Soft section backgrounds |

### Neutrals

| Token | Value | Usage |
|---|---|---|
| `--color-bg-app` | `#F6F4EF` | Global page background |
| `--color-surface` | `#FFFFFF` | Cards, panels, form surfaces |
| `--color-surface-muted` | `#FAF9F6` | Soft nested panels |
| `--color-border` | `#E7E2D8` | Primary border |
| `--color-border-strong` | `#D8D1C4` | Inputs, dividers, stronger separation |
| `--color-text-900` | `#1F1F1B` | Primary text |
| `--color-text-700` | `#4E4C45` | Secondary text |
| `--color-text-500` | `#7C786E` | Placeholder, tertiary labels |
| `--color-text-300` | `#B6B0A3` | Disabled text |
| `--color-white` | `#FFFFFF` | Inverse text |

### Accent / Category-supportive tones

These are not core brand colors, but useful for subtle backgrounds and category areas.

| Token | Value | Usage |
|---|---|---|
| `--color-yellow-100` | `#F8EFCB` | Soft action tiles |
| `--color-yellow-700` | `#8A6B15` | Yellow-tinted icon/text accents |
| `--color-red-500` | `#E34D4D` | Delete icons, destructive action |
| `--color-red-100` | `#FDECEC` | Danger background |
| `--color-green-100` | `#EAF4E3` | Success/recipe callout tint |
| `--color-green-800` | `#3E6A22` | Brand-heavy text |

### Status / Feedback

| Token | Value | Usage |
|---|---|---|
| `--color-success` | `#3C8C4A` | Success state |
| `--color-warning` | `#C8921E` | Warnings |
| `--color-error` | `#D94C4C` | Validation and delete |
| `--color-info` | `#4A7BAE` | Optional informational state |

---

## 2.2 Typography Tokens

### Font Families

| Token | Value | Usage |
|---|---|---|
| `--font-family-base` | `"Inter", "Segoe UI", sans-serif` | All UI text |
| `--font-family-display` | `"Inter", "Segoe UI", sans-serif` | Hero and large headings |
| `--font-family-mono` | `"SFMono-Regular", "Consolas", monospace` | Optional technical labels |

The screenshot suggests a modern sans-serif with clean geometry. **Inter** is a strong implementation choice.

### Font Sizes

| Token | Value |
|---|---|
| `--font-size-12` | `0.75rem` |
| `--font-size-13` | `0.8125rem` |
| `--font-size-14` | `0.875rem` |
| `--font-size-15` | `0.9375rem` |
| `--font-size-16` | `1rem` |
| `--font-size-18` | `1.125rem` |
| `--font-size-20` | `1.25rem` |
| `--font-size-24` | `1.5rem` |
| `--font-size-32` | `2rem` |
| `--font-size-48` | `3rem` |

### Font Weights

| Token | Value |
|---|---|
| `--font-weight-regular` | `400` |
| `--font-weight-medium` | `500` |
| `--font-weight-semibold` | `600` |
| `--font-weight-bold` | `700` |
| `--font-weight-extrabold` | `800` |

### Line Heights

| Token | Value |
|---|---|
| `--line-height-tight` | `1.2` |
| `--line-height-normal` | `1.45` |
| `--line-height-relaxed` | `1.6` |

---

## 2.3 Radius Tokens

| Token | Value | Usage |
|---|---|---|
| `--radius-6` | `6px` | Inputs, chips |
| `--radius-8` | `8px` | Small controls |
| `--radius-12` | `12px` | Cards, upload zones |
| `--radius-16` | `16px` | Main shells |
| `--radius-20` | `20px` | Hero overlays if needed |
| `--radius-pill` | `999px` | Badges, label pills |

---

## 2.4 Spacing Tokens

Use a 4px base system.

| Token | Value |
|---|---|
| `--space-4` | `4px` |
| `--space-8` | `8px` |
| `--space-12` | `12px` |
| `--space-16` | `16px` |
| `--space-20` | `20px` |
| `--space-24` | `24px` |
| `--space-32` | `32px` |
| `--space-40` | `40px` |
| `--space-48` | `48px` |
| `--space-64` | `64px` |

---

## 2.5 Shadow Tokens

The UI uses soft, diffuse elevation rather than strong material shadows.

| Token | Value | Usage |
|---|---|---|
| `--shadow-sm` | `0 1px 2px rgba(31,31,27,0.05), 0 1px 3px rgba(31,31,27,0.06)` | Inputs, subtle elevation |
| `--shadow-md` | `0 4px 12px rgba(31,31,27,0.08)` | Cards |
| `--shadow-lg` | `0 10px 24px rgba(31,31,27,0.10)` | Raised panels |
| `--shadow-xl` | `0 18px 40px rgba(31,31,27,0.12)` | Hero or modal emphasis |

---

## 2.6 Motion Tokens

Motion is subtle and should not feel playful.

| Token | Value |
|---|---|
| `--duration-fast` | `120ms` |
| `--duration-normal` | `180ms` |
| `--duration-slow` | `240ms` |
| `--easing-standard` | `ease` |
| `--easing-emphasized` | `cubic-bezier(0.2, 0, 0, 1)` |

---

## 3. Grid and Layout System

## 3.1 Viewport Behavior

### Desktop
- Breakpoint: `>= 1200px`
- Main content presented as **three primary vertical cards/panels** in one row.
- Page acts like a showcase board with three device-like previews or three app panels side-by-side.

### Tablet
- Breakpoint: `768px - 1199px`
- Reduce to **2 columns**, stacking the third panel below.
- Sidebar content on details page may move under main recipe content.
- Form rows partially collapse.

### Mobile
- Breakpoint: `<= 767px`
- Single-column stacked layout.
- Full-width buttons where relevant.
- Cards and inner grids collapse vertically.

## 3.2 App Container

| Property | Spec |
|---|---|
| Max width | `1360px - 1440px` |
| Horizontal padding desktop | `24px` |
| Horizontal padding tablet | `20px` |
| Horizontal padding mobile | `16px` |
| Section gap between major columns | `20px` |
| Outer top spacing | `24px - 32px` |

## 3.3 Grid Structure

### Global page grid
- **Desktop**: 12-column conceptual grid
- **Tablet**: 8-column grid
- **Mobile**: 4-column grid

### Screenshot recreation grid
For the showcased composite layout:
- 3 equal-width content columns on desktop
- gap: `20px`
- each column rendered as a large card panel

### Internal panel layout
Use vertical stacking with:
- section gap: `16px`
- content padding: `16px`
- dense nested groups separated by `12px` or `16px`

---

## 4. Page-Level Layout Patterns

## 4.1 Showcase Shell

The screenshot presents three independent app screens side-by-side under a large title area.

### Shell structure
1. Main presentation title
2. Subtitle
3. Three top labels above panels
4. Three panel cards beneath

### Title styling
- Center aligned
- Large bold uppercase green heading
- Secondary subtitle in medium neutral gray
- Generous vertical breathing room

### Panel labels
- Small green rounded rectangular ribbons
- White uppercase text
- Horizontally centered above each panel
- Detached from card, floating visually

---

## 4.2 App Screen Panel

Each screen preview sits inside a large white panel.

| Property | Spec |
|---|---|
| Background | White |
| Border | `1px solid var(--color-border)` |
| Radius | `16px` |
| Shadow | `var(--shadow-md)` |
| Padding | `0` outer shell, internal sections manage their own spacing |
| Overflow | Hidden or clipped within rounded shell |

The panel should feel like a mini application viewport rather than a generic card.

---

## 5. Header Specification

## 5.1 Header Variant: App Header

Used on homepage and content pages.

### Structure
- Left: brand icon + app name
- Right: hamburger icon or utility action
- Single-row compact header

### Style
| Property | Spec |
|---|---|
| Height | `56px - 64px` |
| Horizontal padding | `16px` |
| Border bottom | `1px solid var(--color-border)` or none depending on hero adjacency |
| Background | White |
| Alignment | center vertically, space-between |

### Brand block
- Icon: line-style chef/food related mark
- Text: "Rezeptbuch"
- Font size: `18px`
- Font weight: `700`
- Color: `var(--color-green-800)`

### Right utility icon
- Hamburger icon
- 20-22px
- Neutral dark gray
- Touch target at least `44x44px`

---

## 5.2 Header Variant: Page Header with Back Action

Used on recipe create and recipe detail.

### Structure
- Left cluster: back arrow + page title
- Right cluster: contextual icon actions

### Examples
- Create page: back arrow + "Neues Rezept anlegen"
- Detail page: back arrow + recipe title
- Detail page right actions: edit icon, delete icon

### Style
- Height: `56px`
- Padding inline: `16px`
- Title vertically centered
- Icons use ghost button treatment

---

## 6. Hero / Slider Specification

## 6.1 Hero Container

Used on homepage.

### Structure
- Full-width image block
- Dark overlay
- Left-aligned text
- Circular navigation buttons left and right
- Pagination dots at bottom center

### Style
| Property | Spec |
|---|---|
| Height | `220px - 240px` |
| Radius | `0` if edge-to-edge inside shell |
| Image fit | `cover` |
| Overlay | black at `40% - 50%` opacity gradient |
| Content alignment | vertically centered, left aligned |
| Content max width | `55% - 60%` |

### Hero text
- Heading: `32px` desktop-like within panel, `28px` equivalent if constrained
- Weight: `800`
- Color: white
- Body: `16px`
- Line height: relaxed
- Max 3 lines

### Navigation controls
- Circular dark translucent backgrounds
- White chevrons
- Size: `36px - 40px`
- Positioned vertically centered left/right
- Hover: increase opacity

### Pagination dots
- 3-4 dots
- Active: green
- Inactive: white with reduced opacity

---

## 7. Section Header Specification

Reusable component for sections like categories, random recipes, and content blocks.

### Structure
- Left: title
- Right: optional text link such as "Alle anzeigen"

### Style
| Property | Spec |
|---|---|
| Margin bottom | `12px` |
| Title size | `24px` or `20px` depending on density |
| Title weight | `700` |
| Link size | `14px` |
| Link color | primary green |
| Link weight | `600` |

---

## 8. Card Library

## 8.1 Generic Card

### Base spec
| Property | Spec |
|---|---|
| Background | White |
| Border | `1px solid var(--color-border)` |
| Radius | `12px` |
| Shadow | `var(--shadow-sm)` or none for nested cards |
| Overflow | Hidden |
| Transition | subtle lift on hover |

### Hover
- translateY: `-1px` to `-2px`
- shadow intensifies slightly
- no aggressive animation

---

## 8.2 Category Card

Used in homepage category row.

### Structure
- Top image
- Bottom title bar or overlaid title near bottom
- Entire card clickable

### Style
| Property | Spec |
|---|---|
| Width | 4-up row within homepage panel |
| Height | `100px - 120px` |
| Radius | `12px` |
| Image | full cover |
| Text | white, bold |
| Overlay | subtle bottom gradient for legibility |

### Content treatment
- Title centered horizontally or aligned lower-left
- Category names short: "Backen", "Kochen", "Salate", "Suppen"

---

## 8.3 Recipe Card

Used in random recipe section and recipe list.

### Structure
- Image
- Title
- Optional metadata

### Style
| Property | Spec |
|---|---|
| Width | responsive grid item |
| Image height | `96px - 120px` |
| Body padding | `8px - 12px` |
| Radius | `12px` |
| Border | light neutral |
| Background | white |

### Typography
- Title size: `13px - 14px`
- Weight: `500` to `600`
- Max lines: 2
- Centered or left-aligned depending on implementation, but screenshot suggests centered for compact cards

---

## 8.4 Action Tile Card

Used for "Rezept neu anlegen" and "Nach Kategorie stöbern".

### Structure
- Leading icon
- Text label
- Whole tile clickable

### Style
| Property | Spec |
|---|---|
| Height | `72px` |
| Radius | `12px` |
| Padding | `16px` |
| Display | horizontal flex |
| Gap | `12px` |
| Background variant 1 | pale green |
| Background variant 2 | pale yellow |
| Icon size | `22px - 24px` |
| Label weight | `600` |

These tiles should feel softer and more inviting than buttons.

---

## 9. Buttons

## 9.1 Button Principles

Buttons are rounded rectangles with medium visual weight. Primary actions use solid green fill. Sizes are compact but accessible.

### Shared button styling
| Property | Spec |
|---|---|
| Height | `40px` default |
| Min width | `96px` |
| Padding | `0 16px` |
| Radius | `8px` |
| Font size | `14px` |
| Font weight | `600` |
| Border | none unless secondary variant |
| Transition | background-color, border-color, box-shadow |

## 9.2 Variants

### Primary Button
- Background: `var(--color-primary-700)`
- Text: white
- Hover: `var(--color-primary-600)`
- Active: slightly darker
- Use cases: Save, Search, main CTA

### Secondary Button
- Background: white
- Border: `1px solid var(--color-border-strong)`
- Text: `var(--color-text-900)`
- Hover: muted surface

### Ghost Button
- Background: transparent
- Text/icon: neutral dark
- Hover: soft muted background
- Use cases: header icon buttons

### Danger Button
- Background: `var(--color-red-500)`
- Text: white
- Hover: darker red

### Icon Button
- Square touch area: `40px` or `44px`
- Centered icon
- Usually ghost or danger-ghost

## 9.3 Full-width behavior
On mobile and in constrained form panels:
- primary submission button spans full width

---

## 10. Forms

## 10.1 Form Layout Principles

The create recipe screen uses a structured, editorial form with grouped content blocks.

### General rules
- Labels always above fields
- Inputs have visible borders
- Section grouping via spacing rather than heavy divider lines
- Two-column layout when space allows
- Dense but readable field grouping

## 10.2 Label Styling

| Property | Spec |
|---|---|
| Font size | `13px - 14px` |
| Font weight | `600` |
| Color | `var(--color-text-900)` |
| Margin bottom | `6px` |

Optional fields can be indicated inline in lighter text.

## 10.3 Input Styling

### Shared input rules
| Property | Spec |
|---|---|
| Height | `40px` |
| Border | `1px solid var(--color-border-strong)` |
| Radius | `8px` |
| Background | white |
| Padding | `0 12px` |
| Font size | `14px` |
| Placeholder | `var(--color-text-500)` |
| Focus ring | `0 0 0 3px rgba(95, 142, 53, 0.18)` |
| Focus border | primary green |

### Textarea
- Min height: `88px`
- Padding top: `10px`
- Resize: vertical only

### Select
- Same as input
- Chevron icon aligned right
- Text color muted until selection chosen

## 10.4 Search Input Pattern

Used on homepage and recipes page.

### Structure
- Large input
- Adjacent search button

### Style
- parent container can be horizontal row
- input flexes
- button fixed width `72px - 88px`
- combined height: `40px`

---

## 10.5 File Upload

The screenshot shows a dashed upload zone.

### Structure
- Dashed bordered drop/select area
- Centered upload icon
- Button-like text label

### Style
| Property | Spec |
|---|---|
| Height | `72px - 80px` |
| Border | `1px dashed var(--color-border-strong)` |
| Radius | `8px` |
| Background | `#FFFDFC` |
| Content alignment | centered |
| Gap | `8px` |
| Text size | `14px` |
| Icon color | neutral dark |

### States
- Hover: background becomes slightly tinted
- Drag active: green border, pale green background
- Error: red border, pale red background

---

## 10.6 Radio Buttons for Difficulty

### Layout
- Vertical stack
- Tight spacing: `8px`
- Each row contains radio + label

### Values
- Leicht
- Mittel
- Fortgeschritten

### Style
- Native input allowed if styled accessibly
- Accent color should match primary green

---

## 10.7 Ingredients Field

In the screenshot the ingredients field appears as a multiline text input rather than repeated input rows.

### Spec
- Large textarea
- Placeholder contains example multi-line list
- Monolithic input for MVP acceptable
- Padding: `12px`
- Min height: `128px`

---

## 10.8 Time Fields

### Structure
- Small grouped numeric/text inputs
- Labels above
- Often stacked within a right-side narrow column

### Fields
- Preparation time
- Cook/bake time
- Optional time notes

### Notes field
- Smaller text input or textarea
- Example hint text references temperature/time note

---

## 10.9 Step Input Component

A critical reusable component.

### Structure
- Left: circular step number indicator
- Center: step description textarea/input
- Right: optional upload box
- Far right: delete icon button

### Desktop arrangement
- single row with aligned columns

### Mobile arrangement
- stacked:
  1. number + delete row
  2. text field
  3. upload field

### Step number
- Small green filled circle
- White number
- Diameter: `20px - 24px`
- Bold numeral

### Delete action
- Small red trash icon
- No heavy background by default
- Touch target 40px

### Add step button
- Small secondary/primary button
- Left-aligned
- Includes plus icon if desired

---

## 11. Recipe Detail Content Specification

## 11.1 Header Row

### Structure
- Left: back arrow
- Center/remaining: recipe title
- Right: edit and delete icons

### Title
- Size: `18px - 20px`
- Weight: `700`
- Single line if possible

## 11.2 Category Badge

Displayed above or near image.

### Style
- Pill badge
- Pale green background
- Green text
- Font size: `12px`
- Padding: `4px 10px`

## 11.3 Main Recipe Image

| Property | Spec |
|---|---|
| Width | full content width |
| Height | `180px - 220px` |
| Radius | `8px` |
| Fit | cover |

## 11.4 Content Columns

Desktop detail panel uses **main content + right sidebar**.

### Main content
Contains:
- Description
- Ingredients list
- Preparation steps with optional images

### Sidebar
Contains:
- Times
- Notes
- Difficulty

The sidebar is implemented as vertically stacked info cards.

---

## 12. Sidebar Specification

## 12.1 Sidebar Box

Reusable for times, difficulty, notes, and similar metadata.

### Style
| Property | Spec |
|---|---|
| Background | `var(--color-surface-muted)` or white |
| Border | `1px solid var(--color-border)` |
| Radius | `12px` |
| Padding | `14px` |
| Gap | `12px` |
| Shadow | minimal or none |

### Heading
- Green title
- Font size: `14px - 16px`
- Font weight: `700`

### Item row
- Icon left
- Label/value stack or inline text
- Gap `10px`

### Example content
- Zubereitungszeit
- Gar-/Backzeit
- Hinweis
- Schwierigkeitsgrad

---

## 13. Lists

## 13.1 Ingredients List

### Style
- Native unordered list acceptable
- Bullet style simple filled dots
- Text size `14px`
- Row spacing `6px`

## 13.2 Preparation Step List

### Structure
- Vertical ordered sequence
- Each step has number badge, text, optional thumbnail

### Layout
- text and image aligned in row on desktop
- image width approx `72px - 84px`
- image height same scale
- rounded corners `8px`

### Step text
- Smaller than body copy
- `13px - 14px`
- relaxed line height
- max width constrained for readability

---

## 14. Iconography

## 14.1 Icon Style

- Outline icons
- Simple, rounded stroke style
- Consistent stroke width around `1.75px - 2px`
- Visually aligned to modern icon sets such as Lucide

## 14.2 Common icons required

| Icon | Usage |
|---|---|
| Chef hat / food icon | Brand |
| Menu | Mobile nav / utility |
| Arrow left | Back |
| Search | Search field / action tile |
| Upload | Image upload |
| Pencil | Edit |
| Trash | Delete |
| Clock | Time |
| Award / chef / gauge | Difficulty |
| Tag / category | Category |
| Plus | Add step or create recipe |

## 14.3 Icon colors

- Default: `var(--color-text-700)`
- Brand icons: `var(--color-primary-700)`
- Danger icons: `var(--color-red-500)`
- On dark surfaces: white

---

## 15. Badge System

## 15.1 Base Badge

| Property | Spec |
|---|---|
| Height | auto |
| Padding | `4px 10px` |
| Radius | pill |
| Font size | `12px` |
| Font weight | `600` |

## 15.2 Variants

### Category badge
- Background: pale green
- Text: green

### Difficulty badge
- Leicht: pale green / green text
- Mittel: pale yellow / dark mustard text
- Fortgeschritten: pale neutral or pale red depending emphasis

### Time badge
- Optional muted background with icon

---

## 16. Navigation and Mobile Behavior

## 16.1 Desktop
- Primary navigation may be implicit or compact in prototype
- Content-first layout
- Minimal chrome

## 16.2 Mobile
- Hamburger icon toggles vertical navigation
- Navigation overlay or slide-down pattern acceptable
- Touch targets minimum `44x44px`
- Avoid hover-dependent interactions

---

## 17. Spacing Rules

## 17.1 Page spacing rhythm

- Between title and subtitle: `8px`
- Between subtitle and panel labels: `20px`
- Between labels and panels: `12px`
- Between major page sections inside panels: `16px - 24px`

## 17.2 Component spacing

### Cards
- Card inner padding: `12px` or `16px`
- Gap between cards in small grids: `12px`

### Form groups
- Field to label: `6px`
- Field to next field: `12px - 16px`
- Section to section: `20px - 24px`

### Lists
- Item spacing: `6px - 10px`

### Header internals
- Icon-to-title gap: `12px`

---

## 18. Border and Divider Rules

- Borders are subtle and warm-toned, never cold gray-blue.
- Use `1px solid var(--color-border)` for most cards and containers.
- Use stronger border token on inputs and dashed upload areas.
- Dividers should be used sparingly; whitespace does most separation work.

---

## 19. Responsive Rules

## 19.1 Breakpoints

```css
sm: 480px
md: 768px
lg: 1024px
xl: 1200px
2xl: 1440px
```

## 19.2 Layout changes by breakpoint

### `<= 767px`
- Entire app becomes single column
- Hero text width expands to full readable width
- Category cards become 2 per row or horizontal scroll
- Action tiles stack vertically
- Recipe detail sidebar moves below content
- Step inputs stack fully
- Save button full width
- Edit/delete actions remain top-right but keep 44px touch targets

### `768px - 1199px`
- Two major columns where possible
- Homepage category row can remain 4-up only if cards stay legible; otherwise 2x2 grid
- Recipe detail sidebar drops below or becomes right rail only on larger tablets
- Create form becomes mixed grid:
  - title/image/description full width
  - ingredients + times two-column if space allows

### `>= 1200px`
- Three-panel showcase layout
- Full two-column internals for recipe detail and create page
- Sidebar visible beside main content
- Dense but balanced dashboard spacing

---

## 20. Accessibility Rules

## 20.1 Contrast
- All text must meet WCAG AA.
- Green on white must be dark enough for small text.
- Pale green backgrounds require dark green text, not mid-tone green.

## 20.2 Focus states
- Never remove native focus without replacement.
- All buttons, inputs, links, upload triggers, and icon buttons need visible focus ring.

## 20.3 Semantics
- Buttons for actions, not clickable `div`s.
- Inputs paired with labels.
- Back control implemented accessibly as button or link depending behavior.

## 20.4 Images
- Recipe images require meaningful `alt`.
- Purely decorative icons use `aria-hidden="true"`.

## 20.5 Interactive targets
- Minimum `44x44px` touch target for icon controls and navigation elements.

---

## 21. Component Inventory

The following component library is sufficient to recreate the shown UI.

| Component | Purpose |
|---|---|
| `AppShell` | outer page container |
| `PanelScreen` | white rounded large viewport panel |
| `AppHeader` | top brand/action bar |
| `PageHeader` | back/title/action header |
| `HeroSlider` | homepage hero |
| `SectionHeader` | title + optional link |
| `CategoryCard` | category entry |
| `RecipeCard` | compact recipe tile |
| `ActionTile` | shortcut tiles |
| `SearchBar` | input + button |
| `Button` | primary/secondary/ghost/danger |
| `IconButton` | edit/delete/menu/back |
| `TextField` | standard input |
| `Textarea` | multiline text |
| `SelectField` | category selector |
| `UploadField` | image upload area |
| `RadioGroup` | difficulty |
| `StepInput` | recipe step editor |
| `Badge` | category/difficulty/time |
| `SidebarBox` | times/difficulty/info |
| `MetaItem` | icon + text metadata row |
| `IngredientList` | bullet list |
| `PreparationStepList` | ordered content with thumbnails |

---

## 22. Reconstruction Notes by Screen

## 22.1 Homepage

### Order
1. Header
2. Hero slider
3. Categories section
4. Search section
5. Quick actions
6. Random recipes

### Specific visual behavior
- Categories are compact, image-heavy, 4-up cards
- Search uses one line with green button
- Quick actions use two colored tiles side-by-side
- Random recipes use 4 small recipe cards in one row on desktop-width panel

---

## 22.2 Create Recipe Screen

### Order
1. Header with back action
2. Category select
3. Recipe name field
4. Main image upload
5. Description textarea
6. Two-column block:
   - left: ingredients
   - right: time fields
7. Difficulty radios
8. Preparation step inputs
9. Add step control
10. Save button

### Key style characteristics
- Structured but not overly formal
- Inputs have light borders and ample rounding
- Upload zones are dashed and centered
- Step list is compact and visually sequenced

---

## 22.3 Recipe Detail Screen

### Order
1. Header with back, edit, delete
2. Category badge
3. Main image
4. Main content and sidebar split
5. Description
6. Ingredients
7. Preparation steps with thumbnails
8. Sidebar boxes for time, notes, difficulty

### Key style characteristics
- Main image dominates upper section
- Sidebar uses pale tinted boxes
- Step images are small but visually important
- Typography hierarchy is strong despite compact panel width

---

## 23. Suggested CSS Architecture

Even though HTML is not requested yet, the UI should be structured using scalable styling layers.

## 23.1 File layers
1. `tokens.css`
2. `reset.css`
3. `base.css`
4. `layout.css`
5. `utilities.css`
6. component CSS files
7. page-specific CSS files

## 23.2 Naming convention
Use BEM or a predictable component namespace.

Examples:

```css
.recipe-card {}
.recipe-card__image {}
.recipe-card__title {}
.recipe-card__meta {}
.recipe-card--compact {}

.sidebar-box {}
.sidebar-box__title {}
.sidebar-box__item {}

.step-input {}
.step-input__index {}
.step-input__field {}
.step-input__upload {}
.step-input__delete {}
```

---

## 24. Visual Hierarchy Summary

The screenshot's visual hierarchy depends on this order of emphasis:

1. **Brand green title and section labels**
2. **Large food photography**
3. **White elevated panels**
4. **Section headings**
5. **Primary green CTA buttons**
6. **Soft tinted secondary action tiles**
7. **Compact metadata and utility icons**

If this hierarchy is preserved, the UI will remain faithful even if exact image assets differ.

---

## 25. Implementation Summary

To faithfully recreate the UI:

- Use a **warm neutral background** and **white rounded content panels**.
- Make **green the dominant semantic and branding color**.
- Favor **soft borders and low-contrast shadows** over harsh separators.
- Keep typography **sans-serif, bold in headings, compact in metadata**.
- Build the homepage from **stacked sections inside one app panel**.
- Build the create and detail screens as **dense but breathable structured cards**.
- Use **image-first content blocks**, **pill badges**, **ghost icon actions**, and **soft utility sidebars**.
- Ensure the interface remains **clean, tactile, and highly scannable** across desktop, tablet, and mobile.

This specification is detailed enough for a frontend engineer to reproduce the interface accurately without direct access to the original screenshot.
