import { DesignSystem } from '../design-system';
import { Tabs } from './tabs';
import { template } from './tabs.template';
import { styles } from './tabs.styles';

export const definition = Tabs.compose({
  name: `${DesignSystem.prefix}-tabs`,
  template,
  styles,
});
