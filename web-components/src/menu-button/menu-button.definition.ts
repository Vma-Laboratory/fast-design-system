import { DesignSystem } from '../design-system';
import { styles } from '../button/button.styles';
import { MenuButton } from './menu-button';
import { template } from './menu-button.template';

/**
 * The FpsfaMenu Button Element. Implements {@link @microsoft/fast-foundation#Button },
 * {@link @microsoft/fast-foundation#buttonTemplate}
 *
 * @public
 * @remarks
 * HTML Element: \<fpsfa-button\>
 */
export const definition = MenuButton.compose({
  name: `${DesignSystem.prefix}-menu-button`,
  template,
  styles,
  shadowOptions: {
    delegatesFocus: true,
  },
});
