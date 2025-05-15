export function extractOpacityFromColor(color: string): number {
  if (color === 'transparent') return 0;

  // Match hex codes like #RRGGBBAA or #RRGGBB
  const hexMatch = color.match(/^#([0-9a-fA-F]{6})([0-9a-fA-F]{2})?$/);
  if (hexMatch) {
    const [, _rgb, alphaHex] = hexMatch;
    if (alphaHex) {
      const alpha = parseInt(alphaHex, 16);
      return alpha / 255;
    }
    return 1; // No alpha specified → fully opaque
  }

  // Could expand this to support rgba(), hsl(), etc. if needed
  console.warn(`Unsupported color format: ${color}`);
  return 1;
}
