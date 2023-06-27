import { DesignSystem } from '../design-system';
import { Checkbox } from './checkbox';
import { styles } from './checkbox.styles';
import { template } from './checkbox.template';

/**
 * The Fluent Button Element. Implements {@link @microsoft/fast-foundation#Checkbox },
 * {@link @microsoft/fast-foundation#checkboxTemplate}
 *
 * @public
 * @remarks
 * HTML Element: \<fpsfa-checkbox\>
 */
export const definition = Checkbox.compose({
  name: `${DesignSystem.prefix}-checkbox`,
  template,
  styles,
  shadowOptions: {
    delegatesFocus: true,
  },
});
