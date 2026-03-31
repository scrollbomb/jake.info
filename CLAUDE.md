# jake.info — Design & Build Brief

## Overview

Three-page portfolio site for Jake Osmun, creative director, director, and visual artist based in Phoenix, AZ. Operating under No Future LLC.

**Primary audience:** Clients and hiring managers  
**Goal:** Establish commercial credibility instantly. The design is invisible and precise — the work carries the weight.  
**Tone:** Editorial minimal. Clean, typographic, lets the work breathe. No decorative elements.

---

## Routes

| Route | Description |
|---|---|
| `jake.info/` | Redirect to `/work` |
| `jake.info/work` | Reel hero · 3-col project grid · client strip footer |
| `jake.info/cv` | 2-col layout · experience, recognition, tools · PDF download |
| `jake.info/info` | Lede statement · 2-col meta grid · contact |

---

## Color

| Token | Hex | Usage |
|---|---|---|
| Background | `#F5F2ED` | Page background (warm off-white) |
| Primary text | `#1A1714` | Headings, nav, titles |
| Secondary text | `#6B6560` | Meta, labels, body detail |
| Border / divider | `#E0DBD4` | All lines, dividers, borders |

**No accent color.** Hover states use `opacity: 0.5` on text links and a `1px underline` on the active nav item. All interaction feedback is typographic, not chromatic.

---

## Typography

**Primary typeface:** ABC Diatype  
**Fallback stack:** `'Aktiv Grotesk', 'Helvetica Neue', Helvetica, Arial, sans-serif`  
**Weights used:** Regular (400) and Medium (500) only. No bold (600+).

| Role | Size | Weight | Color | Notes |
|---|---|---|---|---|
| Nav / name | 13px | 500 | `#1A1714` | `letter-spacing: 0.02em` |
| Project title | 14px | 500 | `#1A1714` | `letter-spacing: -0.01em` |
| Meta / labels | 11px | 400 | `#6B6560` | `letter-spacing: 0.08em`, uppercase |
| Info page lede | 20px | 500 | `#1A1714` | `line-height: 1.45`, `letter-spacing: -0.02em` |
| Body / detail | 12–13px | 400 | `#6B6560` | `line-height: 1.7` |
| Client strip | 11px | 400 | `#6B6560` | `letter-spacing: 0.07em`, uppercase |

---

## Layout & Grid

- **Max content width:** 1080px, centered
- **Page margins:** 24px mobile · 48px desktop
- **Work grid:** 3 col desktop · 2 col tablet · 1 col mobile
- **Grid gap:** 12px
- **Thumbnail aspect ratio:** 16:10
- **Nav height:** 48px, fixed

---

## Navigation

- Fixed top nav, always visible while scrolling
- Nav is transparent on page load
- At ~20px scroll depth: `border-bottom: 0.5px solid #E0DBD4` appears
- Active page link: `opacity: 1` + `text-decoration: underline`
- Inactive links: `opacity: 1` default, `opacity: 0.4` on hover, `transition: opacity 120ms ease-out`
- Left: `Jake Osmun` (name, 13px/500)
- Right: `Work · CV · Info`

---

## Motion

| Element | Behavior |
|---|---|
| Default transition | `opacity, transform 120ms ease-out` |
| Thumbnail hover | GIF swap on `mouseenter`, still on `mouseleave`. No scale transform. |
| Modal open | `opacity: 0 → 1` + `translateY(8px) → translateY(0)` · 150ms ease-out |
| Modal close | `opacity: 1 → 0` · 100ms ease-out |
| Nav link hover | `opacity: 1 → 0.4` · 120ms |
| Page transitions | Fade out 100ms · fade in 120ms on new page load |

---

## Page: /work

### Structure

1. **Fixed nav** (see Navigation above)
2. **Reel hero** — full-width video embed (Vimeo), 16:9, explicit play button (no autoplay). Centered play icon with thin circular border. Label below: `DIRECTOR REEL 2024 — 2:40`
3. **Project grid** — 3-col, 12px gap, dense
4. **Client strip** — bottom of page, single row of client names in uppercase spaced caps

### Project thumbnail

Each thumbnail in the grid has three states:

| State | Behavior |
|---|---|
| Default | Static `still.jpg`, 16:10 ratio |
| Hover | Swap `src` to `preview.gif` on `mouseenter`, revert on `mouseleave` |
| Click | Open project modal (see Modal below) |

Below each thumbnail:
- Client name (11px, uppercase, `#6B6560`)
- Project title (13px/500, `#1A1714`)
- Type · Year (12px, `#6B6560`)

### Client strip

Single row at page bottom. Clients separated by consistent spacing:  
`NIKE · JORDAN · HULU · FOOT LOCKER · ROC NATION · ALIENWARE · HAVAS`

---

## Page: /cv

Two-column layout. Left column = section labels (110px wide). Right column = content.

### Sections

**Experience**
- Creative Director / Director — No Future LLC · Phoenix, AZ · 2015–Present
- Digital Artist (Jake The Degen) — Sotheby's · VERSE · SuperRare · imnotArt · David Bowie Foundation · 2020–Present

**Recognition**
- Press: Billboard · Complex · Hypebeast · CoinDesk · Lyrical Lemonade
- 50M+ annual views · Platinum-certified music video

**Tools**
- Premiere Pro · After Effects · DaVinci Resolve · Blender
- Video synthesis · Hardware glitch · Analog process · Final Cut Pro

### Footer
- PDF download button, right-aligned: `Download PDF ↓`
- Button style: `border: 0.5px solid #E0DBD4`, transparent bg, 12px text

---

## Page: /info

### Lede

Large statement (20px/500), max-width ~520px:

> "Creative director, director, and visual artist. 10+ years making commercial work that doesn't look like commercial work."

### Meta grid

2-column grid below the lede:

| Label | Value |
|---|---|
| Based | Phoenix, AZ |
| Representation | No Future LLC |
| Availability | Open — select projects |
| Contact | jake@jake.info |

Label style: 11px, uppercase, `letter-spacing: 0.08em`, `#6B6560`  
Value style: 13px, `#1A1714`

---

## Project Modal

Triggered on thumbnail click. Full-screen overlay (`background: rgba(0,0,0,0.55)`), modal centered.

### Modal structure

**Header**
- Left: Client name (11px uppercase, `#6B6560`) + Project title (13px/500, `#1A1714`)
- Right: Close button `×`

**Body — two columns**
- Left (ratio ~1.6fr): Vimeo embed, dark background, explicit play button. No autoplay.
- Right (ratio 1fr): Scrollable detail panel

**Detail panel sections** (divided by 0.5px borders):

1. **Role** — e.g. `Creative Director · Director`
2. **Deliverables** — e.g. `2× :30 spots`, `1× :60 hero film`, `Digital cutdowns`
3. **Credits** — label/value table: DP, Editor, Agency, etc.
4. **Press** — publication name + year

**Footer**
- `← Prev` · `2 / 6` · `Next →`
- Allows cycling through projects without closing modal

---

## Asset Requirements (per project)

| File | Spec |
|---|---|
| `still.jpg` | 16:10, min 800px wide, single key frame |
| `preview.gif` | 6–10 sec loop, max 2.5MB, 800px wide |
| Vimeo ID | Unlisted ok, no autoplay |
| Metadata | Client, role, deliverables, credits, press, year |

---

## Content Data Structure
```json
{
  "id": "nike-just-do-it",
  "client": "Nike",
  "title": "Just Do It — Midwest",
  "type": "Brand Campaign",
  "year": "2023",
  "role": "Creative Director · Director",
  "deliverables": ["2× :30 spots", "1× :60 hero film", "Digital cutdowns"],
  "credits": [
    { "role": "DP", "name": "Name Here" },
    { "role": "Editor", "name": "Name Here" },
    { "role": "Agency", "name": "Havas Chicago" }
  ],
  "press": [
    { "publication": "Hypebeast", "year": "2023" },
    { "publication": "Complex", "year": "2023" }
  ],
  "vimeoId": "000000000",
  "still": "/assets/nike-still.jpg",
  "gif": "/assets/nike-preview.gif"
}
```

---

## Build Notes

- All project data should live in a single content file (e.g. `projects.js` or `projects.json`) — easy to update without touching component code
- The reel hero on `/work` is a separate Vimeo embed from project modals
- Modal should trap focus and close on `Escape` key or overlay click
- `← Prev` / `Next →` in modal should cycle through the same ordered array as the grid
- Nav border on scroll: add a class to `<nav>` at `scrollY > 20`, CSS handles the border transition
- ABC Diatype: if using Adobe Fonts, load via `@import` in CSS. If self-hosting, use `@font-face` with woff2
- Compress all GIFs through ezgif.com before deploying — raw exports from Premiere/Resolve are typically 3–5× larger than needed