# Blaze DHT — Brand Asset Pack

The Nested Return identity, packaged for implementation. If you're a
developer wiring this into the product, this file is the map — everything
else is the territory.

## The mark, in one line

An outer form with a corner missing, and the missing piece returning at a
45° rotation to touch the main form at exactly two points. See
`brand/typography.md` and the identity board (not included in this pack)
for the full rationale. Two proportion cuts exist:

- **Master proportions** (`logo/blaze-symbol*.svg`, `logo/blaze-logo*.svg`) —
  subtler cut, used at 40px and above (headers, marketing, social).
- **Compact proportions** (`icons/icon.svg`, `favicon/favicon.svg`, and every
  PNG rasterized from them) — a bolder cut with a larger notch, built
  specifically so the mark survives down to 16px. Don't mix the two — don't
  drop the compact icon into a 400px hero, and don't use the master symbol
  for a 16px favicon; it was tested and it muddies.

## Which logo to use where

| Context | File |
|---|---|
| Light background | `logo/blaze-logo-light.svg` (identical to `blaze-logo.svg`) |
| Dark background | `logo/blaze-logo-dark.svg` |
| One-color print, embroidery, fax, engraving | `logo/blaze-logo-monochrome.svg` |
| Symbol only, no wordmark | `logo/blaze-symbol*.svg` (same light/dark/monochrome pattern) |

## Icons & favicon

- App icons (all sizes 32–512): generated from `icons/icon.svg`. Don't
  re-export at a size not already provided — regenerate from the SVG
  instead, so the compact proportions stay correct.
- Favicon: use `favicon/favicon.svg` where SVG favicons are supported, with
  `favicon-32.png` / `favicon-16.png` as the PNG fallback.
- iOS home screen: `favicon/apple-touch-icon.png` (180px, no transparency
  concerns — it's already a filled tile).
- PWA setup: see `brand/manifest-assets.md` for the exact `manifest.json`
  and `<head>` snippet.

## React (Vite)

```jsx
import BlazeLogo from "./react/BlazeLogo";
import BlazeSymbol from "./react/BlazeSymbol";

<BlazeLogo />                          // default, light background
<BlazeLogo variant="dark" height={32} />
<BlazeSymbol variant="mono" size={20} />
```

Both components are self-contained (inline SVG, no image imports, no
dependencies). `variant` is `"light" | "dark" | "mono"`.

## Brand colors

| Token | Hex | Use |
|---|---|---|
| Ink | `#111111` | primary dark, text, outer form on light |
| Paper | `#F5F4F0` | primary light, backgrounds, outer form on dark |
| Ember | `#D9481D` | the single accent — the returning diamond only |

Machine-readable versions: `brand/brand-colors.css`, `brand/brand-colors.json`.
Full token set (spacing, radius, type scale): `brand/design-tokens.css`.

## Typography

Manrope (Google Fonts, free). Full spec, weights, and web embed snippet in
`brand/typography.md`. Wordmark SVGs use live `<text>`, not flattened
paths — load Manrope on the page and the wordmark picks it up automatically;
otherwise it falls back to Arial/Helvetica.

## Social

`social/og-image.png` and `social/twitter-card.png`, both 1200×630, dark
background, no new colors or graphics beyond the established palette.

## File structure

```
blaze-dht-assets/
├── logo/          symbol + full lockup SVGs (light / dark / monochrome)
├── icons/         icon.svg + PNGs, 32–512px
├── favicon/       favicon.svg + PNGs + apple-touch-icon
├── social/        og-image.png, twitter-card.png
├── react/         BlazeLogo.jsx, BlazeSymbol.jsx
├── brand/         colors, design tokens, typography, manifest guide
└── README.md
```
