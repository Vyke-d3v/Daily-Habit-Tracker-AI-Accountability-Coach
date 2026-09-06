/**
 * BlazeLogo — full horizontal lockup: symbol + "BLAZE DHT" wordmark.
 *
 * Usage:
 *   <BlazeLogo />
 *   <BlazeLogo height={28} variant="dark" />
 *   <BlazeLogo height={20} variant="mono" className="my-class" />
 *
 * `height` sets the rendered height in px; width scales automatically
 * (the SVG viewBox is 420x140, ~3:1).
 *
 * variant: "light" (default) | "dark" | "mono" — see BlazeSymbol for details.
 *
 * Requires the Manrope font to be loaded for the intended look; falls back
 * to Arial/Helvetica otherwise. See brand/typography.md for the web embed.
 */
const COLORS = {
  light: { outer: "#111111", notch: "#F5F4F0", diamond: "#D9481D", blaze: "#111111", dht: "#D9481D" },
  dark: { outer: "#F5F4F0", notch: "#111111", diamond: "#D9481D", blaze: "#F5F4F0", dht: "#D9481D" },
  mono: { outer: "#111111", notch: "#F5F4F0", diamond: "#111111", blaze: "#111111", dht: "#111111" },
};

export default function BlazeLogo({ height = 28, variant = "light", className = "" }) {
  const c = COLORS[variant] || COLORS.light;
  const width = height * 3; // matches the 420x140 viewBox ratio
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 420 140"
      className={className}
      role="img"
      aria-label="Blaze DHT"
    >
      <g transform="translate(0,-10) scale(0.62)">
        <rect x="40" y="40" width="120" height="120" rx="22" fill={c.outer} />
        <rect x="104" y="104" width="56" height="56" rx="10" fill={c.notch} />
        <polygon points="132,98 166,132 132,166 98,132" fill={c.diamond} />
      </g>
      <text
        x="148"
        y="78"
        fontFamily="Manrope, Arial, Helvetica, sans-serif"
        fontWeight="800"
        fontSize="46"
        fill={c.blaze}
      >
        BLAZE
      </text>
      <text
        x="326"
        y="78"
        fontFamily="Manrope, Arial, Helvetica, sans-serif"
        fontWeight="700"
        fontSize="15"
        letterSpacing="2.4"
        fill={c.dht}
      >
        DHT
      </text>
    </svg>
  );
}
