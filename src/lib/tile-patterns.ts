/* Wzory płytek — brąz/cream dominują, niebieski tylko jako rzadki akcent */

export type TilePattern =
  | "cream"
  | "stone"
  | "dark"
  | "accent-dot"
  | "diag-stone-cream"
  | "diag-dark-stone"
  | "diag-cream-stone"
  | "semi-tr"
  | "semi-bl"
  | "semi-tl"
  | "triangle-tr"
  | "triangle-bl"
  | "circle-soft"
  | "circle-ring"
  | "stripes"
  | "half-moon"
  | "cross";

export const GALLERY_MOSAIC: TilePattern[] = [
  "cream", "circle-soft", "stone", "diag-stone-cream", "semi-tr", "cream",
  "diag-dark-stone", "dark", "cream", "triangle-tr", "stone", "half-moon",
  "stripes", "cream", "circle-ring", "semi-bl", "dark", "stone",
  "cream", "diag-cream-stone", "stone", "cream", "accent-dot", "triangle-bl",
];
