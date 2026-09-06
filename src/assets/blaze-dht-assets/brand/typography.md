# Blaze DHT — Typography

## Primary font: Manrope

Manrope is a free, open-source geometric sans-serif (Google Fonts). It's the
typeface the identity was designed around — clean, contemporary, no novelty
character, good weight range.

**Web embed:**

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@500;700;800&display=swap" rel="stylesheet">
```

```css
font-family: 'Manrope', Arial, Helvetica, sans-serif;
```

If Manrope isn't loaded (e.g. sandboxed/offline preview environments), the
stack falls back to Arial/Helvetica. The wordmark SVGs use live `<text>`
elements rather than flattened paths specifically so this fallback works
automatically and the wordmark stays editable — swap the `font-family` in one
place rather than re-exporting vector paths.

## Weights in use

| Weight | Use |
|---|---|
| 800 (ExtraBold) | "BLAZE" wordmark, page H1 |
| 700 (Bold) | "DHT" tag, section headers, buttons |
| 500 (Medium) | body copy, captions |

Do not introduce a 4th weight without a specific reason — the system is
deliberately narrow.

## Heading hierarchy (suggested)

| Level | Size | Weight | Letter-spacing |
|---|---|---|---|
| H1 | 32–40px | 800 | normal |
| H2 | 22–26px | 800 | normal |
| H3 | 16–18px | 700 | normal |
| Body | 14–16px | 500 | normal |
| Caption / label | 11–12px | 700 | 0.08–0.16em, uppercase |

Recommended line height: 1.2 for headings, 1.5 for body copy, 1.4 for
captions.

## The "DHT" tag treatment

"DHT" is always secondary to "BLAZE" — smaller, bolder relative weight,
wide letter-spacing (0.14–0.18em), set in Ember on light/dark backgrounds,
or in Ink for the monochrome lockup. It never grows to compete with
"BLAZE" for visual weight; see `blaze-logo.svg` for the exact proportion.

## Do not use

Sci-fi/futuristic display fonts, gaming fonts, handwritten fonts, novelty
geometric fonts, or excessive letter-spacing on body copy. The brand reads
as a serious product, not a display of typography.
