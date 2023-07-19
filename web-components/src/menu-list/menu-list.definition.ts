import { DesignSystem } from '../design-system';
import { MenuList } from './menu-list';
import { styles } from './menu-list.styles';
import { template } from './menu-list.template';

/**
 * The FpsfaMenuList Element. Implements {@link @microsoft/fast-foundation#Menu },
 * {@link @microsoft/fast-foundation#menuTemplate}
 *
 *
 * @public
 * @remarks
 * HTML Element: <fpsfa-menu-list>
 */
export const definition = MenuList.compose({
  name: `${DesignSystem.prefix}-menu-list`,
  template,
  styles,
});
