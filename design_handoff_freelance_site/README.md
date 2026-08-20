# Handoff: Tim Brown — one-page freelance site

## Overview
A single-page marketing site for Tim Brown, a freelance web designer (web design, optimisation/SEO, AI & automation) based in Devon, UK. One scrolling page, seven sections, one interactive overlay. The page's only jobs are: establish credibility, show the work, and get the visitor into the contact form at the bottom.

Target stack for this build: **Next.js (App Router) + Tailwind CSS**, fully responsive, and it must look genuinely designed on mobile — not a desktop layout squeezed down. Mobile guidance is given per section below.

## About the design files
The files in this bundle are **design references authored in HTML** — a prototype showing intended look and behaviour. They are **not production code to copy**. Recreate the design in a fresh Next.js + Tailwind app using idiomatic React components and Tailwind utilities. Ignore the prototype's runtime specifics entirely: the `<x-dc>` wrapper, `support.js`, the `DCLogic` class, `{{ }}` template holes, `style-hover`/`style-focus` attributes, and the `<image-slot>` custom element are all prototyping scaffolding. In particular:

- `style-hover="…"` → Tailwind `hover:` utilities.
- `style-focus="…"` → `focus:` utilities.
- `<image-slot id="…" placeholder="…">` → a real `next/image` fill image (or a neutral `#E9E3D9` placeholder block until assets land). Each slot's `placeholder` text says what image belongs there.
- The `DCLogic` class → one `'use client'` component holding the panel/form state.

## Fidelity
**High fidelity.** Colours, type sizes, spacing, borders and motion below are final and should be matched closely on desktop. Mobile layouts are specified in prose rather than pixel-measured — implement them to the intent described, using the same tokens.

## Design tokens

### Colour
| Token | Hex | Use |
|---|---|---|
| `ink` | `#1F1D1A` | Primary text on light |
| `ink-soft` | `#56504A` | Body paragraphs |
| `ink-dark` | `#24211D` | Dark panels: hero left, expectations band, footer |
| `cream` | `#FAF7F2` | Page background |
| `cream-text` | `#F6F1E9` | Text on dark |
| `white` | `#FFFFFF` | Service columns, testimonial cards |
| `rust` | `#B5502E` | Accent: logo dot, icons, primary button, link colour |
| `rust-dark` | `#98411F` | Primary button hover |
| `rust-link-hover` | `#8E3C1F` | Link hover |
| `stone` | `#E9E3D9` | Image placeholder fill |
| `rule` | `#E3DCD1` | Hairlines / section rules |
| `rule-card` | `#EAE2D6` | Testimonial card border |
| `rule-btn` | `#D6CDC0` | Carousel button border |
| `muted` | `#8C857B` | Meta text, footer links |
| `muted-dark` | `#B8B0A4` | Body copy on dark |
| `muted-light` | `#D9CFC2` | Card overlay meta |
| `hairline-dark` | `#4A443C` | Form field underline |
| `hairline-dark-2` | `#3A342D` | Footer divider |
| `underline-accent` | `#E0C4B5` | Text-link underline, default |
| `selection` | `#EBD9CD` | `::selection` background |

### Type
Two Google fonts, both loaded via `next/font/google`:

- **Bebas Neue** (400 only) — all headings, the wordmark, the expectations band, card titles. It is naturally condensed and all-caps; do **not** add `uppercase` or negative tracking. Headings use slightly positive tracking (`0.005em`–`0.01em`) and tight leading (`0.98`–`1.04`).
- **Public Sans** (300/400/500/600/700) — all body copy, nav, buttons, form fields, testimonial quotes.

| Role | Font | Size | Leading | Tracking |
|---|---|---|---|---|
| H1 (hero) | Bebas | `clamp(38px, 4.1vw, 62px)` | 0.98 | 0.005em |
| H2 (intro) | Bebas | `clamp(30px, 3.1vw, 46px)` | 1.02 | 0.01em |
| H2 (section) | Bebas | `clamp(28px, 2.8vw, 40px)` | 1.04 | — |
| H2 (about/how) | Bebas | `clamp(28px, 2.7vw, 40px)` | 1.15 | — |
| H2 (footer) | Bebas | `clamp(32px, 3.4vw, 50px)` | 1.0 | 0.01em |
| H3 (service) | Bebas | 34px | — | — |
| H3 (work card) | Bebas | 27px | 1.15 | — |
| H2 (panel) | Bebas | 36px | 1.0 | 0.01em |
| Wordmark | Bebas | 21px | — | 0.01em |
| Band item | Bebas | 28px | — | 0.045em |
| Body | Public Sans 400 | 16px | 1.75 | — |
| Body on dark | Public Sans 400 | 16px | 1.6–1.7 | — |
| Service body | Public Sans 400 | 15px | 1.7 | — |
| Quote | Public Sans 400 | 17px | 1.6 | — |
| Nav link | Public Sans 400 | 13px | — | 0.06em, uppercase |
| Button label | Public Sans 400/500 | 13–14px | — | 0.03–0.05em, uppercase |
| Card meta | Public Sans 400 | 11px | — | 0.12em, uppercase |
| Form label | Public Sans 400 | 12px | — | 0.08em, uppercase |
| Attribution name | Public Sans 500 | 14px | — | — |
| Attribution company | Public Sans 400 | 13px | — | — |

### Layout
- **Content container: max 1160px**, centred. In the prototype this is `padding: 0 max(32px, calc((100% - 1160px) / 2))` — in Tailwind use `mx-auto w-full max-w-[1160px] px-8` (or `px-5` on mobile) inside a full-bleed section.
- No border radius anywhere. Square corners are the house style — the only exceptions are the logo dot and the panel close button, both circles.
- No box shadows except the slide-out panel: `-24px 0 60px rgba(20,18,15,0.28)`.
- Section vertical rhythm (desktop): 104–130px. On mobile drop to 64–72px.
- Hairlines are always 1px `#E3DCD1`.

### Motion
- Panel slide: `transform 380ms cubic-bezier(0.22, 0.61, 0.36, 1)`.
- Panel scrim fade: `opacity 320ms ease`.
- Marquees: linear, infinite; expectations band 42s, testimonial rows 64s each. Pause all on hover of the row group. Disable under `prefers-reduced-motion`.

## Screens / views

There is one page (`/`) plus one overlay. Anchor ids: `#services`, `#work`, `#about`, `#contact`.

---

### 1. Hero
**Purpose:** say what he does and who he is in one screen, and offer the single CTA.

**Desktop layout:** full-bleed CSS grid, two columns `38% / 1fr`, `min-height: 700px; height: 92vh`.

- **Left column** — background `#24211D`, text `#F6F1E9`, padding `44px 48px 56px`, flex column with `justify-content: space-between`.
  - Top: wordmark row — a 34px `#B5502E` circle + "Tim Brown" in Bebas 21px, 12px gap.
  - Bottom: flex column, 28px gap:
    - H1: "Websites, search and quiet automation — built by one person who answers the phone."
    - Paragraph, `#B8B0A4`, 16px/1.6, `max-width: 34ch`: "Freelance web design, SEO and AI workflows. Based in Devon, working with people I like."
    - CTA `<a href="#contact">`: 1px border `#6E675E`, text `#F6F1E9`, padding `14px 26px`, 14px uppercase, tracking 0.04em, 10px gap, trailing arrow icon (see Assets). Hover: background + border `#B5502E`, text `#FFFFFF`.
- **Right column** — `background: #E9E3D9`, holds the hero image (fills the column, `object-fit: cover`). Two overlays:
  - A top scrim for nav legibility: absolutely positioned, `inset: 0 0 auto 0`, height 130px, `linear-gradient(to bottom, rgba(20,18,15,0.42), rgba(20,18,15,0))`, `pointer-events: none`.
  - Nav, absolute `top: 34px; right: 44px`, flex, 30px gap: Services / Work / About / Contact. `#FAF7F2`, 13px uppercase, tracking 0.06em, `text-shadow: 0 1px 6px rgba(0,0,0,0.35)`; hover `#FFFFFF`.

**Mobile:** stack to one column. Image first as a ~48vh full-width band with the scrim, then the dark block below it with its own padding (`32px 20px 40px`) — or keep the dark block first if you prefer copy-first; either reads well, pick one and be consistent. Replace the inline nav with a slim sticky header: dark `#24211D` bar, wordmark left, hamburger right, opening a full-screen `#24211D` menu with the four links at ~28px Bebas plus the "Let's connect" CTA. Minimum 44px hit targets. H1 lands around 40–44px; keep it on 3–4 lines.

---

### 2. Intro statement
**Purpose:** the positioning argument.

**Desktop:** inside the container, padding `120px … 104px`. Grid `1.15fr / 1fr`, gap `8vw`, `align-items: start`.
- Left: H2 — "Most small businesses don't need an agency. They need one person who understands the work and finishes it."
- Right (10px top padding), two paragraphs `#56504A` 16px/1.75, 18px gap:
  1. "I've spent the last decade building sites for joiners, bars and economists — and for teams at the World Bank. Same approach either way: understand the business, write it down plainly, then build something quick and easy to look after."
  2. "You talk to me from the first call to launch. No handovers, no account managers, no surprise invoices."

**Mobile:** single column, heading then paragraphs, 24px gap, section padding `64px 20px`.

---

### 3. Services (`#services`)
**Purpose:** the three offers.

**Desktop:** the section itself is **full-bleed** with `border-top` and `border-bottom` 1px `#E3DCD1` running edge to edge. Inside it, the container-width grid of three equal columns has `background: #FFFFFF` (in the prototype achieved with `background-clip: content-box` on the padded container — in Tailwind just put the white on the inner max-w-[1160px] grid).

Each column: padding `66px 40px 76px`, flex column, **150px gap between icon and the title/body group** — that large gap is deliberate and gives the columns their height. Column borders: left border on column 1, right border on all three (so all four vertical rules are drawn).

Each column contains a 30px stroked SVG icon (`stroke: #B5502E`, `stroke-width: 1.4`, `fill: none`, 24×24 viewBox), then H3 (Bebas 34px) + body (15px/1.7 `#56504A`), 14px gap:

1. **Web design** — monitor icon (`<rect x="2.5" y="4" width="19" height="13" rx="1.5"/><path d="M9 20.5h6M12 17v3.5"/>`) — "Sites that load fast, read well and are built so you can update them yourself. Design, copy shaping and build, start to finish."
2. **Optimisation** — rising line + arrow (`<path d="M3 17l5.5-6 4 3.5L21 6"/><path d="M15.5 6H21v5.5"/>`) — "Local and technical SEO for people who'd rather be found than famous. Clear reporting, no monthly retainer padding."
3. **AI & automation** — 'A' + up arrow (`<path d="M3 18l5-11 5 11M4.7 14.4h6.6"/><path d="M18 17V6M18 6l-3 3M18 6l3 3"/>`) — "The dull, repeated jobs — quotes, enquiries, admin — handled quietly in the background so your week gets shorter."

**Mobile:** one column, full-width white block. Drop the icon→title gap to ~40px and the padding to `40px 24px 48px`. Keep 1px `#E3DCD1` dividers **between** rows (horizontal now, not vertical) and the outer top/bottom rules edge to edge.

---

### 4. Expectations band
**Purpose:** a running list of what a client can expect.

**Desktop:** full-bleed `#24211D`, `padding: 26px 0`, `overflow: hidden`, 30px bottom margin. A single row of items in Bebas 28px `#F6F1E9`, tracking 0.045em, `white-space: nowrap`, each followed by a 6px `#B5502E` circle, 26px gaps. The list is duplicated back-to-back and animated `translateX(0) → translateX(-50%)` over 42s linear infinite, so the loop is seamless. Pause on hover; no animation under `prefers-reduced-motion`.

Items, in order: Transparent pricing · Fixed timelines · Ongoing support · One person, start to finish · No monthly lock-in · Built to edit yourself · Honest advice · Replies within a day · Local SEO included.

**Mobile:** identical, at ~22px type and `padding: 18px 0`. Marquees are one of the few things that work better on mobile than a stacked list — keep it.

---

### 5. Work carousel (`#work`)
**Purpose:** proof, and the entry point to project detail.

**Desktop:** section padding `120px 0 90px`. Centred H2 (`max-width: 20ch`, 60px bottom margin): "A few of the people I've built things for."

Below it, a horizontal flex rail: `overflow-x: auto`, `scroll-behavior: smooth`, **scrollbar hidden** (`scrollbar-width: none` + `::-webkit-scrollbar { height: 0 }`), 22px gap, left/right padding equal to the container inset so the first card aligns with the container edge.

Each card: `flex: 0 0 430px`, `height: 545px`, `background: #E9E3D9`, `overflow: hidden`, `cursor: pointer`, `role="button"`, `tabIndex=0`; hover `opacity: 0.94`. Contents:
- Project image, filling the card, `object-fit: cover`.
- Bottom gradient overlay: `inset: auto 0 0 0`, height 62%, `linear-gradient(to bottom, rgba(20,18,15,0), rgba(20,18,15,0.82))`, `pointer-events: none`.
- Overlaid caption block, `inset: auto 0 0 0`, padding `28px 28px 26px`, flex column 7px gap, `pointer-events: none`: meta line (11px uppercase, tracking 0.12em, `#D9CFC2`) then title (Bebas 27px/1.15, `#FAF7F2`).

Under the rail, centred 46px square prev/next buttons, 14px apart: transparent, 1px `#D6CDC0`, glyphs ← and →; hover background `#24211D`, text `#FAF7F2`, border `#24211D`. Each scrolls the rail by `±900px` (two cards) with `scrollBy({ behavior: 'smooth' })`.

**Mobile:** same rail, cards `flex: 0 0 78vw` and ~420px tall, 14px gap, first card inset by the page gutter. Hide the arrow buttons on mobile (native swipe is better) or keep them below at 44px. Consider `scroll-snap-type: x mandatory` + `scroll-snap-align: start` on mobile only.

The nine projects (title · meta · year · scope · url · panel body) are listed in **Project data** below.

---

### 6. About + How I work (`#about`)
Two container-width sections that mirror each other.

**About** — padding `104px` block, grid `1fr / 1fr`, gap `7vw`, `align-items: center`. Left: a 470px-tall `#E9E3D9` image block (portrait). Right: flex column 20px gap — H2 "A bit about me", two paragraphs, then a text link.
1. "I'm Tim. I build websites for a living and I've been doing it long enough to know that the hard part is rarely the code — it's working out what a business actually wants to say."
2. "So we start with a conversation, not a questionnaire. I'll ask about your customers, your busiest month, the jobs you wish you got more of. Then I build the smallest thing that gets you those."

**How working together goes** — padding `24px … 116px`, same grid but **image on the right**. H2 "How working together goes", two paragraphs:
1. "A call, a fixed price, and a date. You'll see the design before anything is built, and you'll see the site before anyone else does. Most projects take three to five weeks."
2. "Afterwards I'm still here — for the small fixes, the new page, the thing that broke on a Sunday. Freelance doesn't have to mean gone."

**Text link style** (both sections): 14px, weight 500, uppercase, tracking 0.03em, inline-flex with 9px gap and the arrow icon, `border-bottom: 1px solid #E0C4B5`, `padding-bottom: 4px`, `align-self: flex-start`; hover border `#B5502E`. Labels: "Let's connect" (About) and "Start a project" (How).

**Mobile:** stack both — image first, then text, in both sections, so the alternation doesn't produce an odd image-below-text block. Image height ~280px, gap 24px, section padding `64px 20px`.

---

### 7. Testimonials
**Purpose:** social proof, at volume, without a slider UI.

**Desktop:** section `padding: 10px 0 130px`, `overflow: hidden`. Centred H2 in a container-width wrapper, `max-width: 24ch`, 56px bottom margin: "See what people say about me."

Then two marquee rows, 20px apart, each its own `overflow: hidden` track:
- **Row 1** scrolls right→left: `translateX(0) → translateX(-50%)`, 64s linear infinite.
- **Row 2** scrolls left→right: `translateX(-50%) → translateX(0)`, 64s linear infinite.
Each row's card list is duplicated back-to-back for a seamless loop. Both rows pause when the group is hovered; both disabled under `prefers-reduced-motion`.

Card: `flex: 0 0 400px`, `background: #FFFFFF`, 1px `#EAE2D6`, padding `34px 34px 30px`, flex column, `justify-content: space-between`, 26px gap. Quote in Public Sans 17px/1.6 `#1F1D1A` wrapped in curly quotes; attribution block below (3px gap): name 14px/500, company 13px `#8C857B`.

**Mobile:** same two rows, cards `flex: 0 0 300px`, padding `26px 24px`, quote 16px. Speed can stay at 64s.

**Row 1:** Sam Vowles / Vowles Carpentry · Rachel Ford / Devon Joinery · Dr Anya Roshan / World Bank · Marco Devlin / The Old Fashioned Cocktail Co. · Li Wen / Sanwei Asia.
**Row 2:** James Patel / IPJ London · Ellie Shaw / 505 Economics · Hannah Croft / Highgrove · Dan Merrow / Moorland Plant Hire · Priya Nandra / Coast Physio.
Full quote text is in **Testimonial data** below.

⚠️ All testimonial names, companies and quotes are **placeholder copy written for the design**. They must be replaced with real, permissioned testimonials before launch.

---

### 8. Contact footer (`#contact`)
**Purpose:** the conversion point. Every CTA on the page anchors here.

**Desktop:** `<footer>`, background `#24211D`, text `#F6F1E9`, padding `110px … 60px` at container width. Grid `1fr / 1fr`, gap `8vw`.

- **Left**, flex column 26px gap: H2 "Tell me what you're trying to build."; paragraph `#B8B0A4` 16px/1.7 `max-width: 38ch` — "A sentence is plenty to start. I reply to everything within a day, and I'll tell you honestly if I'm not the right person."; then a details column (14px gap, 8px top padding): `mailto:` link, `tel:` link, and a `#8C857B` 15px line "Devon, UK — working with clients anywhere". The two links are 17px `#F6F1E9` with `border-bottom: 1px solid #4A443C` and `padding-bottom: 6px`, `align-self: flex-start`; hover border `#B5502E`.
- **Right**, the form: flex column 20px gap. Three fields, each a `<label>` (flex column, 8px gap) whose text is 12px uppercase tracking 0.08em `#8C857B`:
  - Name — text, placeholder "Your name"
  - Email — email, placeholder "you@company.com"
  - What do you need? — textarea, 4 rows, placeholder "A new site, better rankings, less admin…", `resize: vertical`
  Inputs: transparent background, no border except `border-bottom: 1px solid #4A443C`, text `#F6F1E9`, 16px, `padding: 10px 0`, `outline: none`; focus border `#B5502E`.
  Submit: `#B5502E` background, `#FFFFFF` text, no border, padding `16px 32px`, 14px uppercase tracking 0.05em, `align-self: flex-start`, 6px top margin; hover `#98411F`. Label "Send it over".
  On success, a 15px `#C9BFB2` line appears below: "Thanks — that's with me. I'll come back to you within a day."
- **Bottom bar**: 90px top margin, 26px top padding, `border-top: 1px solid #3A342D`, 13px `#8C857B`, space-between with wrap: "© 2026 Tim Brown" left; right a 24px-gap link row — Services (`#services`), Work (`#work`), LinkedIn — hover `#F6F1E9`.

**Mobile:** stack left block then form, 40px gap, padding `64px 20px 32px`. Inputs must be **16px** minimum to stop iOS zoom-on-focus. Submit button full width. Bottom bar stacks to two centred rows.

---

### 9. Project detail panel (overlay)
**Purpose:** project detail without leaving the page.

Triggered by clicking any work card. Fixed to the right edge: `top/right/bottom: 0`, `width: min(560px, 92vw)`, background `#FAF7F2`, `z-index: 41`, flex column, shadow `-24px 0 60px rgba(20,18,15,0.28)`. Closed state is `translateX(100%)` + `visibility: hidden`; open is `translateX(0)`. Behind it, a scrim: `position: fixed; inset: 0; background: rgba(20,18,15,0.5); z-index: 40`, fading 0→1, `pointer-events` off when closed.

Contents, top to bottom:
1. Close button — absolute `top: 22px; right: 24px`, 40px circle, `rgba(250,247,242,0.9)` (hover `#FFFFFF`), `#1F1D1A` ✕ glyph, `z-index: 2`.
2. Project image — `flex: 0 0 340px`, `#E9E3D9` fallback, `object-fit: cover`.
3. Body — padding `40px 44px 56px`, flex column 22px gap, `overflow-y: auto`:
   - Meta (11px uppercase tracking 0.12em `#8C857B`) + H2 (Bebas 36px/1.0).
   - Description paragraph, 16px/1.75 `#56504A`.
   - A detail block with `border-top: 1px solid #E3DCD1`: two space-between rows at 14px — "What I did" / scope, and "Year" / year.
   - Primary link: `#24211D` background, `#F6F1E9` text, padding `15px 28px`, 13px uppercase tracking 0.05em, 10px gap + arrow icon, `target="_blank" rel="noreferrer"`; hover background `#B5502E`, text `#FFFFFF`. Label "Visit the live site".

**Close affordances:** the ✕, clicking the scrim, and the **Escape** key (window `keydown` listener, cleaned up on unmount).

**Mobile:** make it a bottom sheet instead — full width, `max-height: 92vh`, sliding up from the bottom (`translateY(100%) → translateY(0)`), rounded top corners are *not* in the house style so keep it square, with a 44px close target and image height ~220px. Lock body scroll while open.

**Accessibility:** the panel should be a proper dialog — `role="dialog" aria-modal="true"`, focus moved into it on open, focus trapped while open, focus returned to the triggering card on close. Cards should respond to Enter/Space as well as click (the prototype sets `role="button" tabIndex=0` but does not wire the key handler — please add it).

## Interactions & behaviour summary
| Interaction | Behaviour |
|---|---|
| Any "Let's connect" / "Start a project" / nav Contact | Anchor-scroll to `#contact` (use `scroll-behavior: smooth` on `html`) |
| Work card click / Enter / Space | Opens the detail panel for that project |
| Panel close | ✕, scrim click, or Escape |
| Carousel arrows | `scrollBy(±900px)`, smooth |
| Marquee hover | All marquee animations pause |
| Form submit | Prevent default, show the thank-you line. **Not yet wired to a backend** — see below |
| Hover states | As specified per component above |

## State management
Trivial; one client component is enough (`'use client'` at the top of the page or of an `<InteractiveSections>` wrapper):
- `activeProject: number | null` — index into the project array; `null` = panel closed.
- `sent: boolean` — form success flag.
- A ref to the carousel rail element for `scrollBy`.
- Effect: window `keydown` for Escape, added on mount, removed on unmount.

The static sections (intro, services, band, about, testimonials) can stay server components; only the carousel + panel and the form need client interactivity.

## Open items for the developer
1. **Form backend is not built.** The prototype only sets a flag. Wire it to a Next.js server action or route handler posting to whatever Tim uses (Resend, Formspree, etc.), with real validation (required name, email format, non-empty message), a pending state on the button, and an error state in the same 15px style as the success line.
2. **Contact details are placeholders**: `hello@timbrown.co` and `+44 7000 000 000`. Get the real ones.
3. **All nine project URLs are `https://example.com`.** Get the real live-site URLs; if a project has no public URL (the World Bank tools may not), hide the button for that project rather than linking nowhere.
4. **The LinkedIn footer link points at `https://www.linkedin.com`** — needs the real profile.
5. **Testimonials are invented placeholder copy** — must be replaced with real, permissioned quotes.
6. **No images exist yet.** Every image position is listed under Assets. Until they arrive, render `#E9E3D9` blocks at the specified sizes.
7. **SEO/meta** was out of scope for the design: add page title, description, Open Graph image, `lang="en-GB"`, and `LocalBusiness`/`Person` JSON-LD — this is a site for someone selling SEO, so it should be exemplary.

## Assets

### Fonts
Bebas Neue (400) and Public Sans (300–700), both from Google Fonts — load via `next/font/google` with `display: 'swap'` and subset `latin`.

### Arrow icon
Used in the hero CTA (18px), both text links (17px), and the panel button (17px). `fill="currentColor"` so it inherits colour; `flex: 0 0 auto; display: block`:

```html
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path></svg>
```

### Service icons
Three 24×24 stroked SVGs, paths given inline in the Services section above.

### Photography (all still to be supplied)
| Slot | Where | Intended content |
|---|---|---|
| `hero` | Hero right column | Tim at work, or a recent site |
| `w1`–`w9` | Work cards | One image per project, portrait-ish crop (430×545 card) |
| `about-1` | About section | Portrait of Tim |
| `about-2` | How I work section | Studio, desk or process shot |
| `panel-w1`–`panel-w9` | Detail panel | Wider crop per project (560×340) |

## Project data
| # | Title | Meta | Year | What I did |
|---|---|---|---|---|
| 1 | Devon Joinery | Joinery workshop · Devon | 2025 | Site, copy shaping, local SEO |
| 2 | Vowles Carpentry | Carpentry · Somerset | 2025 | Site, phone-first editing |
| 3 | The Old Fashioned Cocktail Co. | Drinks brand · E-commerce | 2024 | Design, build, checkout |
| 4 | PIM-PAM | World Bank programme | 2024 | Interface design, front-end |
| 5 | InfraGov Assessment Tool | World Bank programme | 2023 | UX, build, documentation |
| 6 | Sanwei Asia | Manufacturing group · Bilingual | 2023 | Bilingual site, CMS |
| 7 | IPJ London | Practice site · London | 2023 | Design and build |
| 8 | 505 Economics | Research consultancy | 2022 | Site, publication system |
| 9 | Highgrove | Estate · Editorial pages | 2022 | Editorial layouts |

Panel body copy (verbatim):

1. **Devon Joinery** — "A workshop that was getting the wrong sort of enquiry. We rebuilt the site around the jobs they actually wanted — staircases, bespoke fitted furniture — and put the workshop itself front and centre. Local SEO followed. Fewer enquiries now, better ones."
2. **Vowles Carpentry** — "A portfolio the team can add to from a phone, on site, with muddy hands. Photograph the job, drop it in, done — no laptop, no CMS training, no waiting on me."
3. **The Old Fashioned Cocktail Co.** — "A brand-led shop front with a checkout that behaves itself through December. Built for the seasonal spike: fast product pages, honest stock counts, and gifting flows that do not fall over on the busiest weekend of the year."
4. **PIM-PAM** — "A public-facing tool for a World Bank programme. Dense comparative data, plain language, and a structure that lets a minister and a researcher both find what they came for."
5. **InfraGov Assessment Tool** — "An assessment framework that existed as a very long spreadsheet. Turned into something governments can actually fill in — sectioned, saveable, and clear about why each question is being asked."
6. **Sanwei Asia** — "A bilingual site for a manufacturing group, built to be edited from two time zones without either side breaking the other. Structured content, mirrored layouts, one source of truth."
7. **IPJ London** — "A quiet, confident presence for a London practice — and a site that survives referrals. Most visitors arrive having already been told the practice is good; the job was to confirm it in ten seconds."
8. **505 Economics** — "A research consultancy where the writing does the selling, so nothing gets in its way. Long-form pages built for reading, and a publication flow that takes minutes rather than an afternoon."
9. **Highgrove** — "Careful, understated pages for a name that does not need shouting about. Generous imagery, restrained type, and layouts that hold up whether there are three photographs or thirty."

## Testimonial data
Placeholder copy — replace before launch.

**Row 1 (scrolls right → left)**
1. Sam Vowles, Vowles Carpentry — "Tim listened more than he talked, which was a first. The site reads exactly how we speak to customers."
2. Rachel Ford, Devon Joinery — "We went from chasing the wrong jobs to being asked for the work we actually want. That is down to him."
3. Dr Anya Roshan, World Bank — "He took a framework that lived in a 90-tab spreadsheet and made it something governments will finish."
4. Marco Devlin, The Old Fashioned Cocktail Co. — "December used to be the month the website fell over. This year nobody mentioned the website at all."
5. Li Wen, Sanwei Asia — "Two offices, two languages, one site — and neither side can break the other. Quietly impressive."

**Row 2 (scrolls left → right)**
1. James Patel, IPJ London — "Fixed price, fixed date, and he hit both. I have worked with agencies that managed neither."
2. Ellie Shaw, 505 Economics — "Our writing is the product. Tim built something that gets out of its way and still looks considered."
3. Hannah Croft, Highgrove — "He answers the phone. After three agencies, I cannot tell you how much that is worth."
4. Dan Merrow, Moorland Plant Hire — "Half our admin disappeared in a fortnight. I still do not entirely know how."
5. Priya Nandra, Coast Physio — "Straight answers, no jargon, and he told us what not to spend money on."

## Suggested Next.js structure
```
app/
  layout.tsx          # fonts, <html lang="en-GB">, metadata, JSON-LD
  page.tsx            # composes the sections in order
  globals.css         # Tailwind + @keyframes marquee-left / marquee-right
components/
  SiteNav.tsx         # sticky mobile header + desktop overlay nav
  Hero.tsx
  Intro.tsx
  Services.tsx
  ExpectationsBand.tsx
  WorkCarousel.tsx    # 'use client' — rail ref + panel trigger
  ProjectPanel.tsx    # 'use client' — dialog, focus trap, Escape
  AboutBlock.tsx      # reused by About and How I work, prop-flipped image side
  Testimonials.tsx
  ContactFooter.tsx   # 'use client' — form state
lib/
  projects.ts         # the nine projects
  testimonials.ts     # the two rows
```

Marquees are the only custom CSS worth writing — define `@keyframes` in `globals.css` and expose them as Tailwind `animate-*` utilities via `theme.extend.animation`. Everything else is achievable in stock Tailwind utilities plus a handful of arbitrary values (`max-w-[1160px]`, `text-[clamp(38px,4.1vw,62px)]`, `basis-[430px]`).

## Files in this bundle
- `Tim Brown - One Page Site.dc.html` — the design prototype. Open it in a browser to see the intended result, including the marquees and the panel animation. Reference only.
- `image-slot.js`, `support.js` — prototyping runtime the HTML depends on. **Do not port these.**
