import { DesignSystem } from '../design-system';
import { Accordion } from './accordion';
import { styles } from './accordion.styles';
import { template } from './accordion.template';

/**
 * The FpsfaAccordion Element. Implements {@link @microsoft/fast-foundation#Accordion },
 * {@link @microsoft/fast-foundation#accordionTemplate}
 *
 *
 * @public
 * @remarks
 * HTML Element: \<fpsfa-accordion\>
 */
export const definition = Accordion.compose({
  name: `${DesignSystem.prefix}-accordion`,
  template,
  styles,
});
