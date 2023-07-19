import { DesignSystem } from '../design-system';
import { RadioGroup } from './radio-group';
import { styles } from './radio-group.styles';
import { template } from './radio-group.template';

/**
 * The Fpsfa RadioGroup Element.
 *
 *
 * @public
 * @remarks
 * HTML Element: \<fpsfa-radio-group\>
 */
export const definition = RadioGroup.compose({
  name: `${DesignSystem.prefix}-radio-group`,
  template,
  styles,
});
