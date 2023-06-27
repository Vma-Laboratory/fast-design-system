import type { Theme } from './types';
import * as tokens from './design-token';

const tokenNames = Object.keys(tokens) as (keyof Theme)[];

/**
 * Sets the theme tokens on defaultNode.
 * @param theme Flat object of theme token values.
 */
export const setTheme = (theme: Theme) => {
  for (const t of tokenNames) {
    tokens[t].withDefault(theme[t] as string);
  }
};
