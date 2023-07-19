import { DesignSystem } from '../design-system';
import { AccordionItem } from './accordion-item';
import { styles } from './accordion-item.styles';
import { template } from './accordion-item.template';

/**
 * The FpsfaAccordionItem Element. Implements {@link @microsoft/fast-foundation#AccordionItem },
 * {@link @microsoft/fast-foundation#accordionItemTemplate}
 *
 *
 * @public
 * @remarks
 * HTML Element: \<fpsfa-accordion-item\>
 */
export const definition = AccordionItem.compose({
  name: `${DesignSystem.prefix}-accordion-item`,
  template,
  styles,
});
