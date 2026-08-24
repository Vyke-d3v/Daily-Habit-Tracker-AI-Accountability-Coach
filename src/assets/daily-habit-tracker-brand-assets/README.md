# Daily Habit Tracker — brand assets

## Brand colors
- Primary (background/UI): `#3C3489`
- Blaze flame (streak-only, don't reuse elsewhere): `#E8593C`
- Sprout leaf / growth accent: `#639922`
- Reward/badge accent: `#EF9F27`

## Favicon (drop into your `public/` folder)
- `favicon.ico` — multi-size (16/32/48px), reference in `<link rel="icon" href="/favicon.ico">`
- `favicon-16.png`, `favicon-32.png` — for `<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png">` etc.
- `apple-touch-icon-180.png` — `<link rel="apple-touch-icon" href="/apple-touch-icon-180.png">`
- `pwa-icon-192.png`, `pwa-icon-512.png` — reference in `manifest.json` under `icons`

## App icon (mobile / dashboard)
- `app-icon.svg` — master vector, purple rounded-square tile with Blaze inside
- `app-icon-*.png` — pre-rendered at 16/32/48/64/128/180/192/256/512/1024px

## Logo for web use
- `logo-full-horizontal.svg` / `.png` — icon + "Daily Habit Tracker" wordmark, use in nav/header
- `blaze-icon-transparent.svg` / `blaze-icon-transparent-1024.png` — icon only, no background, for social profile pictures or anywhere you need it on a non-purple surface

## In-app system (reference sheets — slice into individual assets as needed)
- `streak-stages.svg` / `.png` — Blaze at day 1 / 3 / 7 / 30 streak intensity. Swap these in as the user's streak grows.
- `achievement-badges.svg` / `.png` — 7-day, 30-day, 100-day, and perfect-month badges

## Notes
- All SVGs are hand-coded vector paths (no fonts embedded in the icon/badge files) so they'll scale cleanly to any size without a design tool.
- The wordmark in `logo-full-horizontal.svg` uses a system sans-serif font stack — swap the `font-family` if you pick a brand typeface later.
