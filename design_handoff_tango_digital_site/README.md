# Handoff: Tango Digital — marketing site (single page)

## Overview
A one-page marketing site for **Tango Digital**, the freelance practice of Tim Brown, a digital growth consultant in Exeter (UK). Three services: websites, lead generation, AI & automation. Audience: small businesses — trades & home services, clinics & health practices, legal & finance, hospitality & food, e-commerce & retail.

The positioning is deliberately anti-agency: agency-grade work from one operator, without agency pricing or account-manager layers. Primary conversion goal: **book a free 20-minute call**.

Target stack for implementation: **Next.js (App Router) + Tailwind CSS**.

## About the design files
`Tango Digital.dc.html` in this bundle is a **design reference created in HTML** — a prototype that shows the intended look, layout and behaviour. It is **not production code to copy**. It runs on a bespoke in-house prototyping runtime (`support.js`, `<x-dc>`, `<sc-for>`, `<sc-if>`, inline-style-only authoring, an `<image-slot>` custom element). None of that should ship.

The task is to **recreate this design in Next.js + Tailwind**: real React components, Tailwind utility classes mapped from the values documented below, real `next/image` assets in place of the image placeholders. Where this document and the HTML disagree, this document wins.

## Fidelity
**High fidelity.** Colors, type sizes, spacing, borders and motion are final and specified exactly below. Recreate closely. Two caveats:

- **Content is placeholder.** All four case studies, all eight testimonials, the prices, the email address and every image are invented stand-ins pending real material from the client. Structure is final; strings are not.
- **Responsive is desktop-first.** The prototype was designed and reviewed at desktop widths and uses fluid `clamp()` type plus `auto-fit` grids, so it degrades acceptably — but tablet and mobile layouts have not been designed. Breakpoint guidance is given per section; use judgement and confirm mobile with the client.

---

## Design tokens

### Colors
| Token | Hex | Use |
|---|---|---|
| `bone` | `#F5F4F0` | Page background (light sections); text color on dark sections |
| `white` | `#FFFFFF` | Card surfaces, alternating section background |
| `bone-hover` | `#FAFAF7` | Card hover surface (light) |
| `ink` | `#0E1112` | Primary text on light |
| `ink-2` | `#3E4447` | Body text in panels / list items |
| `ink-3` | `#5B6265` | Secondary body text, nav links |
| `ink-4` | `#8A9094` | Mono meta labels, captions |
| `forest` | `#0C6B57` | Accent on light sections — eyebrows, prices, buttons, links |
| `mint` | `#7FD9C1` | Accent on dark sections — eyebrows, buttons |
| `night` | `#0E1314` | Dark section background (hero, contact) |
| `night-deep` | `#080D0E` | Form input fill inside dark sections |
| `glass` | `rgba(20,26,26,.42)` | Difference-panel frosted card fill |

Alpha rules (do not substitute solid greys):
- Hairlines on light: `rgba(14,17,18,.12)`; section dividers `rgba(14,17,18,.1)`; stronger borders `rgba(14,17,18,.24)`
- Grid overlay on light: `rgba(14,17,18,.06)`
- On dark: text `rgba(245,244,240,.82)` / `.72` / `.55` / `.5`; borders `.28` / `.25` / `.16` / `.14` / `.12`; grid overlay `rgba(245,244,240,.055)`

### Typography
Two Google fonts, loaded via `next/font/google`:
- **Archivo** (400, 500, 600, 700) — all headings and body. Fallback `system-ui, sans-serif`.
- **JetBrains Mono** (400, 500) — every eyebrow, label, caption, price, ticker item, nav link, arrow glyph, and the service bullet lists. Fallback `monospace`.

| Role | Font | Size | Weight | Line-height | Letter-spacing |
|---|---|---|---|---|---|
| Hero h1 | Archivo | `clamp(40px, 6.2vw, 96px)` | 600 | .96 | −.045em |
| Section h2 | Archivo | `clamp(34px, 4.2vw, 60px)` | 600 | 1.02 | −.035em |
| About h2 / panel h3 | Archivo | `clamp(34px, 4vw, 54px)` / `clamp(28px, 3.4vw, 40px)` | 600 | 1.03 / 1.05 | −.035em / −.03em |
| Contact h2 | Archivo | `clamp(40px, 5.4vw, 80px)` | 600 | .98 | −.04em |
| Service card h3 | Archivo | 30px | 600 | 1.05 | −.03em |
| Case card title | Archivo | 24px | 600 | 1.15 | −.025em |
| Process step h3 | Archivo | 22px | 600 | — | −.02em |
| Hero lede | Archivo | 20px | 400 | 1.5 | — |
| Contact lede / about lede | Archivo | 18px / 19px | 400 | 1.55 | — |
| FAQ question | Archivo | 19px | 500 | — | −.02em |
| Testimonial quote | Archivo | 17px | 400 | 1.55 | −.01em |
| Body / table cell | Archivo | 15–16px | 400 | 1.6–1.65 | — |
| Eyebrow (`03 / Difference`) | Mono | 11px | 400 | — | .2em, uppercase |
| Nav link | Mono | 13px | 400 | — | .12em, uppercase |
| Meta / caption / price | Mono | 10–12px | 400 | — | .1em–.18em, uppercase |

Apply `text-wrap: balance` to the hero h1 and `text-wrap: pretty` to long paragraphs.

### Spacing, radii, shadow
- Section vertical padding: `110px` (`120px` hero and contact). Horizontal gutter: `40px`. Content max-width: **1320px**, centred. Narrower sections: comparison `1100px`, FAQ `980px`.
- Card padding `32–38px`; difference panel `clamp(28px, 4vw, 64px)`; detail panel body `40px`.
- Radii are near-zero by design: buttons and cards `2px`; the difference panel `22px`; pills, circular arrows and the avatar `9999px`.
- Only one shadow in the design: the slide-in panel, `-30px 0 80px rgba(8,12,12,.28)`.

---

## Page structure (top to bottom)

1. Sticky header
2. `#top` — hero **(dark)**
3. Sector ticker strip
4. `#services` — 01 / Services
5. `#process` — 02 / Process
6. `#results` — 03 / Difference **(photo + frosted glass)**
7. `#work` — 04 / Case studies (carousel + slide-in panel)
8. `#versus` — 05 / Comparison
9. `#about` — 06 / Operator
10. `#faq` — 07 / FAQ
11. `#testimonials` — 08 / Testimonials (two marquees)
12. `#contact` — 09 / Contact **(dark)**
13. Footer

Note the section id `#results` is historical — its content is the "Difference" section. Rename freely.

---

## Sections in detail

### Header (sticky)
`position: sticky; top: 0; z-index: 50`. Padding `18px 40px`. Background `rgba(245,244,240,.86)` with `backdrop-filter: blur(14px)`; bottom hairline `rgba(14,17,18,.1)`. Flex row, `justify-content: space-between`, `gap: 24px`.

- **Left:** wordmark "Tango Digital" (Archivo 19px/700, −.02em) with baseline-aligned mono kicker "EST. SOLO" (10px, .18em, `ink-4`), `gap: 10px`. Links to `#top`.
- **Right nav:** `gap: 32px` — Services, Process, Work, Vs. Agency, About, FAQ (mono 13px, .12em, uppercase, `ink-3`), then the CTA button "Book a call →" (`forest` fill, `bone` text, 13px/600, padding `11px 18px`, radius 2px; hover → `ink` fill, white text). The arrow is a mono `→` glyph, not an icon.

Global smooth scrolling: `html { scroll-behavior: smooth; scroll-padding-top: 96px }` — the padding keeps headings clear of the bar. In Tailwind: `scroll-smooth scroll-pt-24` on `<html>`.

Mobile: collapse the nav to a hamburger sheet; keep the CTA visible in the bar.

### Hero `#top` — dark
Background `night`, padding `120px 40px 90px`, bottom hairline `rgba(245,244,240,.12)`. **Technical grid overlay** — two layers, this exact recipe reappears on the contact section:

```css
background-image:
  linear-gradient(rgba(245,244,240,.055) 1px, transparent 1px),
  linear-gradient(90deg, rgba(245,244,240,.055) 1px, transparent 1px);
background-size: 100% 88px, 88px 100%;
```
(The light-section equivalent uses `rgba(14,17,18,.06)`.)

Column stack, `max-width: 1320px`, `gap: 56px`:
1. **Byline row** — 52px circular photo of Tim (`overflow: hidden`, 1px `rgba(245,244,240,.25)` border) + mono 11px .2em uppercase `rgba(245,244,240,.72)`: "Tim Brown — Digital Growth Consultant in Exeter". `gap: 14px`.
2. **h1** — "Beat the competition." / line break / "Skip the agency" in `rgba(245,244,240,.5)` + " price tag." in `bone`. `max-width: 1150px`.
3. **Two-column row** (`minmax(0,1.15fr) minmax(0,1fr)`, `gap: 64px`, `align-items: end`):
   - Left: lede paragraph, 20px, `rgba(245,244,240,.82)`, max 620px — "Websites, lead generation, and AI automation — built by one operator who actually does the work. No account managers, no retainer theatre, no 40-slide reports about nothing."
   - Right: button pair (`gap: 12px`, wrapping) — primary "Book a free 20-min call →" (`mint` fill, `night` text; hover → `bone` fill, `night` text) and secondary "See what I do" (1px `rgba(245,244,240,.28)` border, `bone` text; hover border → `bone`). Below, mono 11px `rgba(245,244,240,.55)`: "No pitch deck. No pressure. Straight answers."

Mobile: single column; the button pair stacks full-width.

### Sector ticker
Full-bleed strip on `white`, `padding: 16px 0`, hairline top and bottom, `overflow: hidden`. Inner flex `width: max-content`, `gap: 48px`, `animation: 38s linear infinite` translating `0 → -50%`. Five sectors, each followed by a `forest` `/` separator, mono 12px .16em uppercase `ink-4`: Trades & home services / Clinics & health practices / Legal & finance / Hospitality & food / E-commerce & retail. **The item set is duplicated verbatim so the −50% loop is seamless** — same technique as the testimonial rows.

### 01 / Services
Light section (page `bone`). Header row: `space-between`, `align-items: end`, wrapping — left, eyebrow "01 / Services" (mono, `forest`) + h2 "Three things, done properly."; right, 16px `ink-3` paragraph max 360px ("Take one or all three. They compound: a fast site feeds the lead engine, automation handles what the leads trigger."). `gap: 64px` to the card grid.

Grid: `repeat(auto-fit, minmax(300px, 1fr))`, `gap: 20px`. Three cards, each `white`, 1px `rgba(14,17,18,.12)` border, padding `38px 34px 34px`, `min-height: 420px`, flex column `gap: 26px`, hover surface `#FAFAF7`:

| Card | Code | Price label | Body | Bullets (mono 12px, `ink-2`, `→ ` prefix) |
|---|---|---|---|---|
| Websites | S/01 | from $2.5k | "Fast, sharp, built to convert — not a template with your logo dropped in. Sub-second loads, written copy, tracking wired from day one." | Design & build · Conversion copy · Local SEO foundations · Analytics & call tracking |
| Lead generation | S/02 | from $900/mo | "Paid search, local visibility, and follow-up that doesn't leak. Measured in booked jobs and enquiries — not impressions." | Google & Meta campaigns · Landing pages per offer · Google Business Profile · Lead scoring & routing |
| AI & automation | S/03 | from $1.5k | "The unfair advantage small businesses aren't using yet. Answer every enquiry in seconds, chase every quote, kill the admin." | Instant enquiry response · Quote & review follow-up · CRM & booking workflows · Reporting on autopilot |

Card internals: top row is `space-between` — mono code (`ink-4`) left, price (`forest`) right. Then h3, then body (`flex: 1` so bullet blocks bottom-align across cards), then the bullet list separated by a `padding-top: 22px` hairline, `gap: 10px`.

Footnote under the grid, mono 11px `ink-4` uppercase: "Ranges, not quotes. Scope decides the number — you'll get it in writing before anything starts."

**Prices are placeholders and the currency is unconfirmed** — the client is UK-based, so these are likely to become GBP. Do not hard-code them in JSX; put them in a content module.

### 02 / Process
Background `white`. Eyebrow "02 / Process" + h2 "Four weeks, not four months." Grid `repeat(auto-fit, minmax(240px, 1fr))`, `gap: 40px`. Four steps, each a column with a **2px `forest` top border**, `padding-top: 24px`, `gap: 16px`: mono week label (`WEEK 01`… `WEEK 04+`, .16em — the first in `forest`, the rest `ink-4`), h3, then 15px `ink-3` body.

1. **Audit & angle** — "I look at what your competitors are doing, where your enquiries actually come from, and what's leaking. You get a plan, free, before you commit."
2. **Build** — "Site, landing pages, tracking, automations. One person building means no handoffs and no telephone game."
3. **Switch on** — "Campaigns live, follow-up running, phone tracked. First leads land within days, not next quarter."
4. **Tune** — "Cut what doesn't pay, double what does. One page of numbers a month — the ones that affect your bank account."

### 03 / Difference — photo + frosted glass
The most involved section. `position: relative; padding: 120px 40px; overflow: hidden`.

Layers, back to front:
1. Full-bleed background photograph, `position: absolute; inset: 0`, `object-fit: cover` — a wide landscape or workspace shot.
2. Scrim: `linear-gradient(180deg, rgba(8,12,12,.55), rgba(8,12,12,.72))`, `pointer-events: none`.
3. Content, `max-width: 1320px`, centred.

The content is one **frosted card**: `background: rgba(20,26,26,.42)`, `backdrop-filter: blur(18px)`, 1px `rgba(255,255,255,.16)` border, `border-radius: 22px`, padding `clamp(28px,4vw,64px)`. Inside, a wrapping flex row with `align-items: flex-start` and `gap: clamp(36px,4vw,64px)`:

- **Left, `flex: 1 1 300px; max-width: 400px`** (the cap is what pushes the features right — keep it): mint eyebrow "03 / Difference"; h2 "The Tango" / "difference" on two lines, white; 16px `rgba(255,255,255,.78)` paragraph max 420px — "Marketing built the way software is built — measured, automated, and shipped fast. You get the tooling big brands pay agencies to operate, run by the person who set it up."; then a **white pill button** "About me" (`border-radius: 9999px`, padding `13px 26px`, `ink` text, hover fill `mint`) linking to `#about`, `align-self: flex-start`.
- **Right, `flex: 3 1 560px`**: grid `repeat(auto-fit, minmax(190px, 1fr))`, `gap: 34px`, `align-content: start`. Three feature columns, each `gap: 22px`: a **112×88px icon slot** (line art), then a white uppercase heading (15px/600, .1em, `line-height: 1.35`), then 14px `rgba(255,255,255,.72)` body, max 280px. Columns 2 and 3 carry `padding-left: 34px` and a `border-left: 1px solid rgba(255,255,255,.22)` — vertical hairline dividers; column 1 has neither. All three must align at the top.

Features:
1. **Built, not outsourced** — "Every site, campaign and automation is made by one operator who answers your calls — no juniors learning on your budget."
2. **Tomorrow-ready** — "AI and automation wired in from day one, so your follow-up, quoting and reporting run while you are on the tools."
3. **You own everything** — "Your domain, ad accounts, data and automations stay in your name. Leave whenever you like and take the whole engine with you."

Mobile: when the features stack, swap `border-left`/`padding-left` for `border-top`/`padding-top` so the dividers stay horizontal.

### 04 / Case studies — carousel + slide-in panel
Background `white`. `padding: 110px 0` (no horizontal padding — the track bleeds); `overflow: hidden`.

Header row inside a 1320px / 40px-gutter container, `space-between`, `align-items: end`: eyebrow "04 / Case studies" + h2 "Work, and what it did." on the left; on the right, two **52px circular outline buttons** (`←` / `→`, 1px `rgba(14,17,18,.24)`, hover border and text → `forest`), `gap: 10px`. Give them `aria-label`s.

Track, `margin-top: 56px`: flex row, `gap: 2%`, each card `flex: 0 0 36%`. The peek effect comes from the transform:

```
transform: translateX(calc(-1 * slide * 38% - 19%));
transition: transform .7s cubic-bezier(.16,1,.3,1);
```

With four 36% cards and a 2% gap, the `-19%` base offset pushes the first card half off the left edge, so **two cards read fully with a half-card bleeding off each side**. `slide` is `0` or `1`, clamped (`prev` → `max(0, slide-1)`, `next` → `min(1, slide+1)`).

Each card is a `<button>`: `aspect-ratio: 4/3`, 1px `rgba(14,17,18,.12)` border (hover → `forest`), `overflow: hidden`, zero padding, left-aligned text. Inside: cover image; a `linear-gradient(180deg, rgba(8,12,12,0) 35%, rgba(8,12,12,.82) 100%)` scrim (`pointer-events: none`); and bottom-anchored text at `padding: 28px` — mono 11px .16em uppercase `mint` tag line, then 24px/600 white title.

Under the track, mono 11px `ink-4` uppercase: "Click any project to read what happened →".

**Slide-in detail panel.** Clicking a card sets `detail` to its index and renders two fixed layers:
- Scrim: `inset: 0`, `z-index: 80`, `rgba(8,12,12,.55)`, fades in over 300ms; clicking it closes.
- Panel: `<aside>` pinned right, `z-index: 90`, `width: min(620px, 94vw)`, full height, `background: bone`, 1px left border `rgba(14,17,18,.14)`, `box-shadow: -30px 0 80px rgba(8,12,12,.28)`, `overflow-y: auto`. Enters with `translateX(100% → 0)` over **500ms `cubic-bezier(.16,1,.3,1)`**.

Panel contents, top to bottom: a `16/10` cover image (the same asset as the card) with a 44px round close button top-right (20px inset, `bone` fill; hover `forest` fill, white glyph); then a `40px` body column, `gap: 24px` — mono `forest` tag line; h3 title; a **Sector** block fenced by hairlines top and bottom (`padding: 20px 0`, mono 10px label + 15px value); then **The problem**, **What I did** and **Outcome**, each a mono 10px uppercase `ink-4` label over a 16px/1.65 `ink-2` paragraph; finally a `forest` button "Talk about something similar →" that closes the panel and jumps to `#contact`.

Behaviour to add in the real build (the prototype omits it): close on `Escape`, trap focus while open, lock body scroll, and return focus to the invoking card. Consider a Radix/Headless UI dialog.

Case study data — **all four are invented placeholders**:

| # | Title | Tags | Sector |
|---|---|---|---|
| 0 | Ridgeway Roofing | Web build · Local SEO | Trades & home services |
| 1 | Marlow Dental | Lead generation · Automation | Clinics & health practices |
| 2 | Hale & Croft Legal | Web build · AI content | Professional services |
| 3 | Ember Kitchen | Automation · Lead generation | Hospitality & food |

Full problem / work / outcome copy for each is in the prototype's logic class (`caseData`) — lift it from there if you need placeholder text, but expect all of it to be replaced.

### 05 / Comparison
Background `white`, content `max-width: 1100px`. Eyebrow "05 / Comparison" + h2 "Same work. Different bill."

A bordered table built from CSS grid — three columns `minmax(0,1.3fr) minmax(0,1fr) minmax(0,1fr)`. Header row on `rgba(14,17,18,.035)` with a bottom hairline: mono 11px .16em uppercase — "Item" and "Typical agency" in `ink-4`, "Tango Digital" in `forest`. Cells `padding: 22px 24px`; every row has a `rgba(14,17,18,.09)` bottom hairline. First column 15px/500 `ink`, agency column 15px `ink-4` (visibly de-emphasised), Tango column 15px `ink`.

| Item | Typical agency | Tango Digital |
|---|---|---|
| Who builds it | Junior, offshore team | Me, start to finish |
| Setup fee | $8k–$25k | From $2.5k |
| Monthly retainer | $3k–$6k + ad spend | From $900 + ad spend |
| Contract | 6–12 months locked | Month to month |
| Time to first campaign | 8–12 weeks | About 3 weeks |
| Reporting | 40 slides of impressions | One page: leads, cost, revenue |
| Who owns the accounts | The agency, usually | You, always |

Mobile: this must not scroll horizontally — restack each row as a small card with the two values labelled.

### 06 / Operator (About)
Light section. Grid `repeat(auto-fit, minmax(280px, 1fr))`, `gap: 56px`, `align-items: start`.

- **Left, capped at `max-width: 420px`** (essential — without the cap the portrait stretches when the grid collapses): a `4/5` portrait on `white` with a 1px `rgba(14,17,18,.12)` border, then a mono 11px `ink-4` caption "Founder & operator — Tango Digital".
- **Right:** eyebrow "06 / Operator"; h2 "One person. That's the point."; a 19px `ink-2` lede — "Agencies sell you a team and give you a junior. I sell you me — the person who plans it, builds it, and answers when you call. Fewer people means less cost, faster decisions, and nobody to hide behind when something isn't working."; a 16px `ink-3` paragraph — "I use modern tooling and AI where it removes hours of grunt work, and judgement where it doesn't. That's how a solo operator delivers what used to need six people — and why the invoice looks nothing like an agency's."; then three outline chips (`gap: 10px`, padding `9px 14px`, 1px `rgba(14,17,18,.18)`, mono 11px uppercase `ink-2`): **Direct line, always** · **Month to month** · **You own everything**.

### 07 / FAQ
Background `white`, content `max-width: 980px`. Eyebrow "07 / FAQ" + h2 "The awkward questions."

An accordion: hairline above the first item, each item closed by a bottom hairline. The question is a full-width `<button>` — transparent, no border, `padding: 26px 4px`, `space-between`, Archivo 19px/500 `ink` (hover `forest`), with a `forest` 18px mono `+` / `−` on the right. **Single-open**: opening one closes the others; clicking the open one closes it. Answer paragraph `padding: 0 60px 28px 4px`, 16px/1.65 `ink-3`.

Six items, first open by default:
1. **Why are you cheaper than an agency?** — "No office, no sales team, no layers of management billing your account. Modern tooling and automation do the work that used to need a department, so the cost of delivery is genuinely lower — I'm not discounting, I just have less to pay for."
2. **One person — what if you get hit by a bus?** — "Everything is built in your accounts, documented, and portable. If I vanish tomorrow you keep the site, the ad accounts, the automations and the data, and any competent operator can pick it up. No proprietary platform holding you hostage."
3. **Do I have to sign a long contract?** — "No. Build work is fixed-scope and fixed-price. Ongoing work is month to month — if it stops paying for itself, you stop. That's the whole accountability mechanism."
4. **Is the AI stuff just hype?** — "The hype is. The useful part is boring: answering every enquiry within a minute, chasing quotes nobody followed up, drafting content, and killing admin. Those move revenue for a small business more than anything fashionable."
5. **What if I already have a website I like?** — "Then we don't touch it. Plenty of engagements are lead generation and automation only, on top of what you've got. I'll tell you honestly if the site is the thing holding you back."
6. **How do I know it's working?** — "Tracking goes in before spend does — calls, forms, and where each lead came from. One page a month: leads in, cost per lead, what closed. If the numbers don't move, we change the plan or you leave."

Use `<button aria-expanded aria-controls>` over a real region, or a headless accordion. Animate height if you like — the prototype simply mounts/unmounts.

### 08 / Testimonials
Background `bone`, `padding: 110px 0`, top hairline, `overflow: hidden`. Header inside the 1320px container: eyebrow "08 / Testimonials" + h2 "Owners, not marketers." `margin-bottom: 56px`.

Two marquee rows, `gap: 20px` between them:
- **Top row scrolls left → right**: `translateX(-50% → 0)`.
- **Bottom row scrolls right → left**: `translateX(0 → -50%)`.

Both `64s linear infinite`, both `width: max-content` with `gap: 20px`, and **both duplicate their card set once** so the loop is seamless. Four quotes per row.

Card: `<figure>`, fixed `width: 400px`, `flex: 0 0 auto`, `white`, 1px `rgba(14,17,18,.12)`, `padding: 32px`, flex column `space-between`, `gap: 24px`. Quote is a `<blockquote>` in Archivo 17px/1.55, −.01em, `ink`, wrapped in typographic quote marks. Caption: 14px/600 name over mono 11px .12em uppercase `ink-4` company.

**All eight testimonials are invented placeholders** — real ones are pending. Row 1: Dave Whitlock (Whitlock Roofing), Priya Raman (Marlow Dental), Tom Beasley (Beasley Plumbing & Heating), Claire Hendry (Hendry & Croft). Row 2: Marcus Oyelowo (Ember Kitchen), Sarah Voss (Voss Interiors), Gavin Doyle (Doyle Electrical), Nadia Karim (Karim Aesthetics). Quote text is in the prototype.

Pause both rows on hover, and freeze them under `prefers-reduced-motion`.

### 09 / Contact — dark
Background `night`, `padding: 120px 40px`, with the **same grid overlay as the hero** (light-on-dark variant). Grid `minmax(0,1fr) minmax(0,.85fr)`, `gap: 80px`, `align-items: start`.

- **Left:** mint eyebrow "09 / Contact"; h2 "Twenty minutes. No pitch." in `bone`; 18px `rgba(245,244,240,.82)` paragraph max 480px — "Tell me what you sell and where the leads are meant to come from. If I can't help, I'll say so and point you somewhere that can."; then the email address as a link with a `rgba(12,107,87,.45)` bottom border (hover → mint) and, under it, mono 11px `rgba(245,244,240,.55)`: "Replies within one business day".
- **Right:** the form card — `rgba(20,26,26,…)`-dark surface, 1px `rgba(245,244,240,.16)` border, `padding: 36px`, flex column `gap: 18px`. Three fields, each a mono 10px .16em uppercase `rgba(245,244,240,.55)` label over an input: **Name** (`Your name`), **Business & website** (`Company, and URL if you have one`), **What do you need** (textarea, 4 rows, `Website, more leads, less admin — or all of it`). Inputs: fill `night-deep` `#080D0E`, 1px `rgba(245,244,240,.2)`, `padding: 14px 16px`, 15px Archivo, radius 2px, no outline, focus border → `mint`. Submit button: full-width, `padding: 16px`, `mint` fill, `night` text, 15px/600 — label "Book my 20 minutes", switching to "Sent — talk soon" after submit.

The prototype's submit only flips that label; **no backend**. Implement for real: a Next.js route handler or server action, validation (name and one contact method required — note the form currently has no email/phone field, which it needs), spam protection, and a success/error state. `hello@tangodigital.com` is a placeholder address.

### Footer
`padding: 32px 40px`, top hairline, flex row `space-between`, wrapping, `gap: 24px`: "Tango Digital" (15px/600), mono 11px `ink-4` "Next-gen marketing for small business", mono 11px `ink-4` "© 2026".

---

## Interactions & behaviour

**Scroll reveal.** Every element marked `data-reveal` fades and rises in: `opacity 0 → 1`, `translateY(16px) → 0`, **600ms `cubic-bezier(.16,1,.3,1)`**, triggered by an `IntersectionObserver` at `threshold: 0.05`, `rootMargin: "0px 0px -8% 0px"`, unobserved after firing. Three hard-won rules — the prototype hit all three as bugs:
1. Anything already within the viewport on mount must render **visible immediately**, never hidden-then-revealed.
2. An element is only hidden at the moment it is observed, so nothing can get stuck invisible.
3. Keep a **failsafe timeout (~4s)** that force-reveals everything, in case an observer never fires.
Honour `prefers-reduced-motion: reduce` by skipping the whole mechanism. In Next.js this belongs in a small `useReveal` hook or a `<Reveal>` client wrapper — but the content must be in the server-rendered HTML regardless (SEO).

**Marquees / ticker.** Pure CSS keyframes on duplicated content, as described. No JS.

**Carousel.** `slide` state, 0–1, clamped; transform transition 700ms `cubic-bezier(.16,1,.3,1)`. Add swipe on touch and arrow-key support.

**Detail panel.** `detail: number | null`. 500ms slide-in, 300ms scrim fade. Escape to close, focus trap, scroll lock.

**FAQ.** Single-open index; first item open on load.

**Hover states.** Service cards lighten to `#FAFAF7`; case cards' border goes `forest`; nav links and FAQ questions go `forest`; primary buttons invert (`forest` → `ink`, or `mint` → `bone` on dark); outline buttons brighten their border.

**Motion transitions** all use `cubic-bezier(.16,1,.3,1)`. Standardise it as a Tailwind easing token.

## State
Trivial — all client-side, no data layer:
- `slide: 0 | 1` — carousel position
- `detail: number | null` — open case study
- `faqOpen: number` — open accordion index (0 initially, `-1` for none)
- `sent: boolean` — contact form submitted

Everything else is static content. Put the four content collections (services, process, cases, comparison rows, FAQs, testimonials) in typed modules or MDX so the client can edit them without touching components.

## Suggested component split

```
app/page.tsx
app/layout.tsx                 fonts, metadata, scroll-smooth
components/SiteHeader.tsx      client (mobile menu)
components/Hero.tsx
components/SectorTicker.tsx
components/Services.tsx
components/Process.tsx
components/Difference.tsx
components/CaseCarousel.tsx    client (slide + detail state)
components/CaseDetailPanel.tsx client
components/Comparison.tsx
components/About.tsx
components/Faq.tsx             client
components/Testimonials.tsx
components/Contact.tsx         client (form)
components/SiteFooter.tsx
components/Reveal.tsx          client (IntersectionObserver wrapper)
content/*.ts                   services, cases, faqs, testimonials, comparison
```

## Assets
**Nothing in this bundle is a real asset.** The prototype uses a drag-and-drop placeholder element (`<image-slot>`) in eleven places; replace each with a real `next/image`:

| Slot id | What it needs | Aspect |
|---|---|---|
| `hero-avatar` | Headshot of Tim Brown | 1:1, circular, 52px |
| `diff-1` … `diff-3` | Three line-art icons | ~112×88 |
| `case-0` … `case-3` | One image per case study (used by both card and panel) | 4:3 card, 16:10 panel |
| `difference-bg` | Wide landscape / workspace photograph | full-bleed |
| `about-portrait` | Portrait of Tim Brown | 4:5 |

Fonts are the only third-party dependency: Archivo and JetBrains Mono from Google Fonts — load via `next/font/google` rather than `<link>` tags. There are no icon libraries or SVGs in the design; arrows are mono text glyphs (`→`, `←`, `✕`, `+`, `−`).

## Open questions for the client
1. **Currency and real prices** — quoted in USD, but the business is Exeter-based. Almost certainly should be GBP.
2. **Real case studies** — four are needed, with images and permission to name clients.
3. **Real testimonials** — eight placeholders currently.
4. **Photography** — headshot, portrait, three icons, one wide background shot.
5. **Contact route** — real email address, and whether the form should post to an inbox, a CRM, or a booking tool (the CTA says "book a call", which implies a scheduler like Cal.com or SavvyCal rather than a form).
6. **Contact field for replies** — the form collects no email or phone; add one.
7. **Legal/SEO** — privacy policy, cookie stance if analytics are added, plus per-section metadata, Open Graph image, and `LocalBusiness` structured data for Exeter.

## Files in this bundle
- `Tango Digital.dc.html` — the design reference (**do not ship**; a prototype-runtime file)
- `image-slot.js`, `support.js` — prototype runtime dependencies, included only so the HTML opens and renders locally. Not part of the deliverable.
