import type { TilePattern } from "@/lib/tile-patterns";

type GeometricTileProps = {
  pattern: TilePattern;
  className?: string;
};

export function GeometricTile({ pattern, className = "" }: GeometricTileProps) {
  return (
    <div
      className={`geo-tile geo-tile--${pattern} ${className}`}
      aria-hidden
    />
  );
}
