import { DesignSystem } from '../design-system';
import { MenuItem } from './menu-item';
import { styles } from './menu-item.styles';
import { template } from './menu-item.template';

/**
 * The FpsfaMenu Item Element. Implements {@link @microsoft/fast-foundation#MenuItem },
 * {@link @microsoft/fast-foundation#menuItemTemplate}
 *
 *
 * @public
 * @remarks
 * HTML Element: <fpsfa-menu-item>
 */
export const definition = MenuItem.compose({
  name: `${DesignSystem.prefix}-menu-item`,
  template,
  styles,
});
