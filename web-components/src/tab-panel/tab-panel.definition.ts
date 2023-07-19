import { DesignSystem } from '../design-system';
import { TabPanel } from './tab-panel';
import { template } from './tab-panel.template';
import { styles } from './tab-panel.styles';

export const definition = TabPanel.compose({
  name: `${DesignSystem.prefix}-tab-panel`,
  template,
  styles,
});
