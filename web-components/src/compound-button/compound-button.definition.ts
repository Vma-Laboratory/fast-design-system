import { DesignSystem } from '../design-system';
import { CompoundButton } from './compound-button';
import { styles } from './compound-button.styles';
import { template } from './compound-button.template';

/**
 * The FpsfaCompound Button Element. Implements {@link @microsoft/fast-foundation#Button },
 * {@link @microsoft/fast-foundation#buttonTemplate}
 *
 * @public
 * @remarks
 * HTML Element: \<fpsfa-comopund-button\>
 */
export const definition = CompoundButton.compose({
  name: `${DesignSystem.prefix}-compound-button`,
  template,
  styles,
  shadowOptions: {
    delegatesFocus: true,
  },
});
