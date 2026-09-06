/**
 * BlazeSymbol — the Nested Return mark, standalone (no wordmark).
 *
 * Usage:
 *   <BlazeSymbol />
 *   <BlazeSymbol size={32} variant="dark" />
 *   <BlazeSymbol size={20} variant="mono" className="my-class" />
 *
 * variant:
 *   "light" (default) — ink outer form, paper notch, ember accent. For light backgrounds.
 *   "dark"             — paper outer form, ink notch, ember accent. For dark backgrounds.
 *   "mono"             — single ink color, no ember. For one-color reproduction.
 */
const COLORS = {
  light: { outer: "#111111", notch: "#F5F4F0", diamond: "#D9481D" },
  dark: { outer: "#F5F4F0", notch: "#111111", diamond: "#D9481D" },
  mono: { outer: "#111111", notch: "#F5F4F0", diamond: "#111111" },
};

export default function BlazeSymbol({ size = 32, variant = "light", className = "" }) {
  const c = COLORS[variant] || COLORS.light;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      className={className}
      role="img"
      aria-label="Blaze DHT"
    >
      <rect x="40" y="40" width="120" height="120" rx="22" fill={c.outer} />
      <rect x="104" y="104" width="56" height="56" rx="10" fill={c.notch} />
      <polygon points="132,98 166,132 132,166 98,132" fill={c.diamond} />
    </svg>
  );
}
