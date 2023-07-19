import {  ValuesOf } from '@microsoft/fast-foundation';

/**
 * ButtonAppearance constants
 * @public
 */
export const ButtonAppearance = {
  filled: 'filled',
  outline: 'outline',
  ghost: 'ghost',
  text: 'text'
} as const;

/**
 * A Button can be secondary, primary, outline, ghost, transparent
 * @public
 */
export type ButtonAppearance = ValuesOf<typeof ButtonAppearance>;

/**
 * A Button can be square, circular or rounded.
 * @public
 */
export const ButtonShape = {
  circular: 'circular',
  rounded: 'rounded',
  square: 'square',
} as const;

/**
 * A Button can be square, circular or rounded
 * @public
 */
export type ButtonShape = ValuesOf<typeof ButtonShape>;

/**
 * A Button can be a size of small, medium or large.
 * @public
 */
export const ButtonSize = {
  tiny: 'tiny',
  small: 'small',
  medium: 'medium',
  large: 'large',
} as const;

/**
 * A Button can be on of several preset sizes.
 * @public
 */
export type ButtonSize = ValuesOf<typeof ButtonSize>;

export type { ButtonOptions } from "@microsoft/fast-foundation";
