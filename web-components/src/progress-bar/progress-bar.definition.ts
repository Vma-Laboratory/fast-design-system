import { DesignSystem } from '../design-system';
import { ProgressBar } from './progress-bar';
import { styles } from './progress-bar.styles';
import { template } from './progress-bar.template';

/**
 * The FpsfaProgressBar Element.
 *
 *
 * @public
 * @remarks
 * HTML Element: \<fpsfa-progress-bar\>
 */
export const definition = ProgressBar.compose({
  name: `${DesignSystem.prefix}-progress-bar`,
  template,
  styles,
});
