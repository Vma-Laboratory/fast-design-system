import { DesignSystem } from '../design-system';
import { TextInput } from './text-input.js';
import { styles } from './text-input.styles.js';
import { template } from './text-input.template.js';

/**
 * The Fpsfa TextInput Element.
 *
 *
 * @public
 * @remarks
 * HTML Element: \<fpsfa-text-input\>
 */
export const definition = TextInput.compose({
  name: `${DesignSystem.prefix}-text-input`,
  template,
  styles,
});
