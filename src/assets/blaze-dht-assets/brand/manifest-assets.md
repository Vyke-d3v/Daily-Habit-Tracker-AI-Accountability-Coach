# PWA / manifest asset reference

Which file to reference for each purpose in `manifest.json` and `<head>`.

## manifest.json

```json
{
  "icons": [
    { "src": "/icons/icon-192.png", "sizes": "192x192", "type": "image/png", "purpose": "any" },
    { "src": "/icons/icon-512.png", "sizes": "512x512", "type": "image/png", "purpose": "any" },
    { "src": "/icons/icon-192.png", "sizes": "192x192", "type": "image/png", "purpose": "maskable" },
    { "src": "/icons/icon-512.png", "sizes": "512x512", "type": "image/png", "purpose": "maskable" }
  ]
}
```

**Maskable note:** `icon-192.png` / `icon-512.png` were built with generous
padding around the mark (it sits inside the middle ~65% of the tile), which
covers most OS mask shapes (circle, squircle, rounded square) without the
diamond getting clipped. Test against your target platforms before
shipping — if a specific OS crops tighter than expected, a dedicated
`icon-maskable.png` with even more padding is a five-minute re-export from
`icons/icon.svg`, not a redesign.

## `<head>` tags

```html
<link rel="icon" href="/favicon/favicon.svg" type="image/svg+xml">
<link rel="icon" href="/favicon/favicon-32.png" sizes="32x32" type="image/png">
<link rel="icon" href="/favicon/favicon-16.png" sizes="16x16" type="image/png">
<link rel="apple-touch-icon" href="/favicon/apple-touch-icon.png">
<link rel="manifest" href="/manifest.json">
<meta name="theme-color" content="#111111">
```

## Which asset for which job

| Purpose | File |
|---|---|
| Browser tab (modern browsers, SVG support) | `favicon/favicon.svg` |
| Browser tab (PNG fallback) | `favicon/favicon-32.png`, `favicon/favicon-16.png` |
| iOS home screen | `favicon/apple-touch-icon.png` |
| Android home screen / PWA install | `icons/icon-192.png`, `icons/icon-512.png` |
| Windows tiles / general app icon | `icons/icon-144.png` |
| App store / high-res contexts | `icons/icon-512.png` |
| Source of truth for any new size | `icons/icon.svg` |
