import { ButtonOptions, ValuesOf } from '@microsoft/fast-foundation';
import { ButtonAppearance, ButtonShape, ButtonSize } from '../button/button.options';

/**
 * Compound Button Appearance constants
 * @public
 */
export const CompoundButtonAppearance = ButtonAppearance;

/**
 * A Compound Button can be secondary, primary, outline, ghost, transparent
 * @public
 */
export type CompoundButtonAppearance = ValuesOf<typeof CompoundButtonAppearance>;

/**
 * A Compound Button can be square, circular or rounded.
 * @public
 */
export const CompoundButtonShape = ButtonShape;

/**
 * A Compound Button can be square, circular or rounded
 * @public
 */
export type CompoundButtonShape = ValuesOf<typeof CompoundButtonShape>;

/**
 * A Compound Button can be a size of small, medium or large.
 * @public
 */
export const CompoundButtonSize = ButtonSize;

/**
 * A Compound Button can be on of several preset sizes.
 * @public
 */
export type CompoundButtonSize = ValuesOf<typeof CompoundButtonSize>;

export type { ButtonOptions as CompoundButtonOptions };
