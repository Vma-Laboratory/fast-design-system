import { DesignSystem } from '../design-system';
import { Radio } from './radio';
import { styles } from './radio.styles';
import { template } from './radio.template';

/**
 * The Fpsfa Radio Element.
 *
 *
 * @public
 * @remarks
 * HTML Element: \<fpsfa-radio\>
 */
export const definition = Radio.compose({
  name: `${DesignSystem.prefix}-radio`,
  template,
  styles,
});
