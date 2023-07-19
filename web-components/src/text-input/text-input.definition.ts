import { DesignSystem } from '../design-system';
import { TextInput } from './text-input';
import { styles } from './text-input.styles';
import { template } from './text-input.template';

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
