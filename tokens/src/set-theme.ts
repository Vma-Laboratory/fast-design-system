import type { Theme } from "./types";
import { borders, colors, spacings, typography } from './global'
import * as tokens from "./design-token";
import { Borders, GlobalColors, Spacings, Typography } from "./types";

const tokenNames = Object.keys(tokens) as (keyof Theme)[];

/**
 * Sets the theme tokens on defaultNode.
 * @param theme Flat object of theme token values.
 */
export const setTheme = (theme: Theme) => {
  for (const t of tokenNames) {
    const themeValue = theme[t];
    if (themeValue) {
      tokens[t].withDefault(themeValue as string);
    }
  }
};

/**
 * Initialize the design tokens with the default global values.
 */
export const InitTheme = () => {
  for (const tokenName of tokenNames) {
    const colorValue = colors[(tokenName as keyof GlobalColors)];
    if (colorValue) {
      tokens[tokenName].withDefault(colorValue as string);
    }

    const borderValue = borders[(tokenName as keyof Borders)];
    if (borderValue) {
      tokens[tokenName].withDefault(borderValue as string);
    }

    const spacingValue = spacings[(tokenName as keyof Spacings)];
    if (spacingValue) {
      tokens[tokenName].withDefault(spacingValue as string);
    }

    const typographyValue = typography[(tokenName as keyof Typography)];
    if (typographyValue) {
      tokens[tokenName].withDefault(typographyValue as string);
    }
  }
};
