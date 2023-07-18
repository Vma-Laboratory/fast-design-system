import { DesignSystem } from '../design-system';
import { Combobox } from './combobox';
import { styles } from './combobox.styles';
import { template } from './combobox.template';

/**
 * The Fpsfa Combobox Element. Implements {@link @microsoft/fast-foundation#Combobox },
 * {@link @microsoft/fast-foundation#comboboxTemplate}
 *
 * @public
 * @remarks
 * HTML Element: \<fpsfa-combobox\>
 */
export const definition = Combobox.compose({
  name: `${DesignSystem.prefix}-combobox`,
  template,
  styles,
  shadowOptions: {
    delegatesFocus: true,
  }
});
