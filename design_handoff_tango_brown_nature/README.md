# Handoff: Tango Brown — One-Page Marketing Site

## Overview
A single-page marketing site for **Tim Brown**, a freelance digital growth consultant trading as **Tango Brown** (Exeter, Devon, UK). It presents his positioning, four services, selected work, an about section, and a contact slide-out. Visual direction: **calm, editorial, nature-inspired** — deep forest greens, warm cream, a gold accent, full-bleed photography and generous whitespace.

Target build: **Next.js + Tailwind CSS**, kept **lightweight** — no heavy UI libraries, minimal dependencies. This is a **single page** with in-page anchor navigation and a slide-out contact panel (not multi-route).

## About the Design File
`design_reference/Tango Brown - Nature.dc.html` is a **working HTML prototype** — the source of truth for layout, spacing, color, type, copy, and interactions. It uses a small in-house runtime (`support.js`, `<x-dc>`, `<sc-for>`, `<image-slot>`, `{{ }}` holes) that you should **not** port. Recreate the design in idiomatic React + Tailwind; use the HTML only to read exact values and copy.

## Fidelity
**High-fidelity.** Colors, type, spacing and interactions are final — recreate accurately. Exact values below.

## Recommended Setup
- **Next.js** (App Router), one route (`app/page.tsx`) composed of section components. Nav items are anchor links (`#services`, `#work`, `#about`, `#top`) with CSS `scroll-behavior:smooth`.
- **Tailwind CSS** — put the tokens below into `tailwind.config` (`theme.extend.colors`, `fontFamily`). Everything is achievable with utilities; the few dynamic bits (carousel transform, slide-out transforms) are inline styles or a tiny `clsx`/state toggle.
- **Fonts** via `next/font/google`:
  - **DM Sans** — all headings (`font-weight: 500`) and the logo wordmark. Also the project-quote and hero-overlay text.
  - **Public Sans** — body copy, nav links, eyebrow labels, form fields, footer.
- **Client components** (`"use client"`): the contact slide-out, the work carousel. Everything else can be server components.
- Images: replace every `<image-slot>` with `next/image`. They are drag-and-drop placeholders — **the client supplies real photography** (hero, portrait, 4 service images, 4 project images). Until then use a neutral placeholder fill `#e7e1d2`, radius 0.

## Design Tokens

### Colors
- Cream page bg: `#f5f1e8`
- Default text (on cream): `#2a3327`; muted body `#4c5145`; softer muted `#5c6153`
- **Gold accent** (eyebrows, headline, names, active dot): `#e0a94a`
- Hero / top band bg (near-black warm): `#252523`; text on it `#f5f1e8`, muted `#d7d4c8` / `#bdbbb0` / `#a9a79c`
- About band bg (warm sand): `#eae4d5`
- CTA band bg (forest green): `#26332a`; muted label on it `#96a086`
- Footer bg (deep green-black): `#1e281f`; text `#c8cebd`, faint label `#7f886f`, divider `#33402f`
- Card / panel greens (service + used elsewhere): `#2f4131` and `#33352f`; text on them `#c7d1bc` / `#c8c8bd`, headings `#fff`
- Contact slide-out bg: `#26332a`; field borders `#3f5138`, labels `#8fa082`, close-btn border `#3a4a34`
- Hairline borders on cream: `#ddd6c7`; carousel arrow border `#c3c1af`; muted grey labels `#8a917c`
- Link hover: `#5a6b4d`. Selection: bg `#2f4131`, text `#f5f1e8`

### Typography
- **Headings — DM Sans, weight 500**, tight tracking `letter-spacing: -.01em`, line-height 1.05–1.12. Not uppercase.
- **Body — Public Sans**, weights 300 (most paragraphs), 400, 600 (labels/links).
- **Eyebrows/labels:** Public Sans 12–13px, weight 600, `letter-spacing: .14em–.22em`, `text-transform: uppercase`. Gold (`#e0a94a`) on dark bands, grey (`#8a917c`) on cream, sage (`#96a086`) on green.
- Heading sizes (fluid `clamp(min, vw, max)`):
  - Hero H1 (gold): `clamp(34px,4.8vw,66px)`
  - Intro H2: `clamp(26px,3vw,42px)`
  - Services / Work H2: `clamp(28px,3.4vw,46px)`
  - About H2: `clamp(28px,3.1vw,40px)`
  - CTA H2: `clamp(32px,4.2vw,58px)`
  - Service card title (h3): 32px fixed; contact slide-out h2: 38px fixed
  - Hero overlay text: `clamp(22px,2.6vw,34px)`; project quote: `clamp(24px,2.4vw,32px)`
- Body: 15–17px, line-height 1.65–1.7. Min body size 15px.

### Layout & spacing
- Content max-width **1280px**, centered, horizontal padding **48px**.
- **Exception:** the hero image container is max-width **1400px** — intentionally wider than the 1280 content column (a slight bleed). Keep this.
- Section vertical rhythm ~88–136px. Grids use CSS `gap` (don't space with margins).
- **Border radius: 0** on buttons, cards, images, inputs. The only circles: the 34px "TB" logo badge, the 52px carousel arrows, and the 40px contact close button (all `border-radius:50%`).
- Hairline dividers are `1px solid`; card copy panels have generous 44px padding.

### Buttons
- **Light button** (on dark/green): bg `#f5f1e8`, text `#26332a`, `padding:16px 34px`, weight 600, radius 0, arrow "→". Used for CTA + form submit.
- **Outline button** (on hero photo): transparent, `1.5px solid rgba(245,241,232,.85)`, white text, radius 0.
- **Nav "Get in touch":** `1.5px solid rgba(245,241,232,.55)`, radius 0, `padding:10px 22px`.
- **Text link w/ underline** (About "Work with me →"): `border-bottom:1.5px solid #26332a`.

## Sections (top → bottom)

### Nav (absolute, over hero)
Transparent, absolutely positioned over the dark hero band, `z-index:20`. Left: 34px circular outlined "TB" badge + "Tango Brown" wordmark (DM Sans 22/500) linking to `#top`. Right: anchor links Services / Work / About + a square outlined **"Get in touch"** that opens the contact slide-out. All text cream (`#f5f1e8`). No sticky behavior in the prototype (add a sticky/solid-on-scroll variant if you like, but not required).

### Hero (`#top`, dark band `#252523`)
- Top padding 118px to clear the nav. Inside the **1280** column: gold H1 (`I've got your marketing & technology covered.`), max-width 18ch.
- Then the **1400** column: a full-width photo (`height:min(64vh,620px)`) with a centered overlay — white serif-weight line (`Your website should be quietly working for you…`, max-width 22ch, subtle text-shadow) and an outline **"Start a project"** button (opens contact). Small italic caption bottom-right (`Exeter, Devon`).
- **Intro** (still inside the dark band, 1280 col): 2-column grid — left gold eyebrow "Tango Brown" + H2; right three paragraphs (last one italic). See file for copy.

### Services (`#services`, cream)
- Top hairline border. Eyebrow "What I do" + H2 "Four ways I help your business grow."
- **2×2 grid** (`grid-template-columns:1fr 1fr; gap:32px`) of 4 cards. Each card: image on top (`height:260px`) then a solid green panel (`#2f4131` or `#33352f`, 44px padding) containing: muted number ("01"–"04"), white 32px title, description, and an "Includes" list — 4 rows each separated by a `1px solid rgba(255,255,255,.14)` top border. Card bg colors alternate per the data.
- Data (num, title, desc, 4 bullet points, panel bg/body colors) is in `baseServices()` — lift verbatim.

### About (`#about`, sand `#eae4d5`)
2-column grid: left portrait image (`height:600px`), right eyebrow "About me" + H2 "Hi, I'm Tim Brown." + two paragraphs + a "Work with me →" underlined link (opens contact). Copy in file.

### Selected Work (`#work`, cream) — full-width quote carousel
- Header row: eyebrow "Selected work" + H2, and on the right two circular arrow buttons (prev/next, 52px).
- **Carousel:** a viewport `overflow:hidden` wrapping a flex track; each slide is `flex:0 0 100%`. The track translates `translateX(-slide*100%)` with `transition: transform .6s cubic-bezier(.4,0,.2,1)`. **One project per slide.**
- Each slide: full-width photo (`height:min(62vh,600px)`) with an overlay card bottom-left (`max-width:640px`, bg `rgba(30,32,29,.82)`, 44/48px padding): gold eyebrow (`proj.tag`), a large quote in quotation marks (`proj.desc`), then gold name (`proj.name`) + muted role (`proj.role`).
- Below: centered **progress dots** — 4px tall bars, active one is 40px wide & gold (`#e0a94a`), inactive 20px & `rgba(90,107,77,.4)`; clicking a dot jumps to that slide.
- Arrows **wrap around** (prev from first → last, next from last → first). Data in `baseWork()` (4 items).

### CTA (green `#26332a`)
Centered: sage eyebrow "Let's begin" + H2 "Let's grow your business online." + light "Start a project →" button (opens contact).

### Footer (deep green `#1e281f`)
3-column grid: contact block (name, email, phone, location) + "Site" links (About/Work anchors, Contact opens slide-out) + "Services" links (anchors to `#services`). Bottom row (top border): `© 2026 Tango Brown — Tim Brown` and "Digital Growth Consultant".

### Contact slide-out (global)
- A fixed full-screen **overlay** (`rgba(20,28,20,.5)`, fades in, click to close) + a **panel** fixed to the right (`width:min(480px,100vw)`, bg `#26332a`, `box-shadow:-20px 0 60px rgba(0,0,0,.3)`) that slides in via `transform: translateX(100% → 0)` with `transition .45s cubic-bezier(.4,0,.2,1)`.
- Contents: sage eyebrow "Get in touch" + circular close (✕), H2 "Let's start something.", intro line, then a form — **Name** & **Email** (bottom-border-only inputs, border `#3f5138`), **About your project** (full-border textarea), and a light square "Send message →" button. Below: a bordered contact block (email/phone/location).
- Opened from: nav button, hero button, About link, CTA button, footer "Contact". Closed by overlay click or the ✕.

## Interactions & State (all local, no store)
- `contact` (boolean) → slide-out open/close (overlay + panel transforms).
- `slide` (index) → carousel position; prev/next wrap around; dots jump.
- Smooth-scroll anchors for nav.
- Contact form is presentational in the mock — wire to your backend/email (e.g. a Next route handler + transactional email). Validate name + email required, valid email format.

## Assets
Available in the project for real content: `devon-joinery.png` (real screenshot of the Devon Joinery project — good for the first work slide), plus `clients-bg.jpg`. Everything else (hero, portrait, 3 remaining projects, 4 service images) is a placeholder the client will supply. Copy is final and lives in the prototype's `baseServices()` / `baseWork()` and the section markup — **lift it verbatim**.

## Files
- `design_reference/Tango Brown - Nature.dc.html` — the complete prototype (all sections, copy, carousel + slide-out logic). **Primary source of truth.**
- `design_reference/devon-joinery.png`, `clients-bg.jpg` — assets.

> Ignore `support.js`, `image-slot.js`, and the `<x-dc>` / `<sc-for>` / `{{ }}` syntax — that's prototype runtime, not part of the design.
