import { DesignSystem } from '../design-system';
import { Tab } from './tab';
import { template } from './tab.template';
import { styles } from './tab.styles';

export const definition = Tab.compose({
  name: `${DesignSystem.prefix}-tab`,
  template,
  styles,
});
