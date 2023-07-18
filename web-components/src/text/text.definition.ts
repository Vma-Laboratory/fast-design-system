import { DesignSystem } from '../design-system';
import { Text } from './text';
import { styles } from './text.styles';
import { template } from './text.template';

/**
 * The Fpsfa Text Element.
 *
 *
 * @public
 * @remarks
 * HTML Element: \<fpsfa-text\>
 */
export const definition = Text.compose({
  name: `${DesignSystem.prefix}-text`,
  template,
  styles,
});
