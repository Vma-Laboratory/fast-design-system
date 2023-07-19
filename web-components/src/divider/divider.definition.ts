import { DesignSystem } from '../design-system';
import { Divider } from './divider';
import { template } from './divider.template';
import { styles } from './divider.styles';

/**
 * The Fpsfa Divider Element
 *
 * @public
 * @remarks
 * HTML Element: \<fpsfa-divider\>
 */
export const definition = Divider.compose({
  name: `${DesignSystem.prefix}-divider`,
  template,
  styles,
});
