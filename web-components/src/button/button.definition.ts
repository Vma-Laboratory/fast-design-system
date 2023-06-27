import { DesignSystem } from '../design-system';
import { Button } from './button';
import { styles } from './button.styles';
import { template } from './button.template';

/**
 * The Fluent Button Element. Implements {@link @microsoft/fast-foundation#Button },
 * {@link @microsoft/fast-foundation#buttonTemplate}
 *
 * @public
 * @remarks
 * HTML Element: \<fpsfa-button\>
 */
export const definition = Button.compose({
  name: `${DesignSystem.prefix}-button`,
  template,
  styles,
  shadowOptions: {
    delegatesFocus: true,
  },
});
