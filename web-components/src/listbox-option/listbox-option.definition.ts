import { DesignSystem } from '../design-system';
import { ListboxOption } from './listbox-option';
import { styles } from './listbox-option.styles';
import { template } from './listbox-option.template';

/**
 * The Fluent ListboxOption Element. Implements {@link @microsoft/fast-foundation#ListboxOption },
 * {@link @microsoft/fast-foundation#listbox-optionTemplate}
 *
 * @public
 * @remarks
 * HTML Element: \<fpsfa-listbox-option\>
 */
export const definition = ListboxOption.compose({
  name: `${DesignSystem.prefix}-option`,
  template,
  styles,
  shadowOptions: {
    delegatesFocus: true,
  }
});
