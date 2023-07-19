import { html } from '@microsoft/fast-element';
import { TabsOrientation } from '@microsoft/fast-foundation';
import type { Args, Meta } from '@storybook/web-components';
import { renderComponent } from '../helpers.storybook';
import type { Tabs as FpsfaTabs } from './tabs';
import './define';
import '../tab/define';
import '../tab-panel/define';
import { TabsAppearance as TabsAppearanceValues, TabsSize } from './tabs.options';

type TabsStoryArgs = Args & FpsfaTabs;
type TabsStoryMeta = Meta<TabsStoryArgs>;

const tabIds = ['first-tab', 'second-tab', 'third-tab', 'fourth-tab'];

const tabsDefault = html`
  <fpsfa-tabs
    orientation=${x => x.orientation}
    appearance=${x => x.appearance}
    ?disabled=${x => x.disabled}
    size=${x => x.size}
    activeid=${x => x.activeid}
  >
    <fpsfa-tab id=${tabIds[0]}> First Tab </fpsfa-tab>
    <fpsfa-tab id=${tabIds[1]}> Second Tab</fpsfa-tab>
    <fpsfa-tab id=${tabIds[2]}> Third Tab</fpsfa-tab>
    <fpsfa-tab id=${tabIds[3]}> Fourth Tab</fpsfa-tab>

    <fpsfa-tab-panel id=${tabIds[0] + '-panel'}>Tab One Content</fpsfa-tab-panel>
    <fpsfa-tab-panel id=${tabIds[1] + '-panel'}>Tab Two Content</fpsfa-tab-panel>
    <fpsfa-tab-panel id=${tabIds[2] + '-panel'}>Tab Three Content</fpsfa-tab-panel>
    <fpsfa-tab-panel id=${tabIds[3] + '-panel'}>Tab Four Content</fpsfa-tab-panel>
  </fpsfa-tabs>
`;
export const TabsDefault = renderComponent(tabsDefault).bind({});

const tabsHorizontal = html`
  <fpsfa-tabs orientation="horizontal">
    <fpsfa-tab> First Tab </fpsfa-tab>
    <fpsfa-tab> Second Tab</fpsfa-tab>
    <fpsfa-tab> Third Tab</fpsfa-tab>
    <fpsfa-tab> Fourth Tab</fpsfa-tab>

    <fpsfa-tab-panel></fpsfa-tab-panel>
    <fpsfa-tab-panel></fpsfa-tab-panel>
    <fpsfa-tab-panel></fpsfa-tab-panel>
    <fpsfa-tab-panel></fpsfa-tab-panel>
  </fpsfa-tabs>
`;
export const TabsHorizontal = renderComponent(tabsHorizontal).bind({});

const tabsVertical = html`
  <fpsfa-tabs orientation="vertical">
    <fpsfa-tab> First Tab </fpsfa-tab>
    <fpsfa-tab> Second Tab</fpsfa-tab>
    <fpsfa-tab> Third Tab</fpsfa-tab>
    <fpsfa-tab> Fourth Tab</fpsfa-tab>

    <fpsfa-tab-panel></fpsfa-tab-panel>
    <fpsfa-tab-panel></fpsfa-tab-panel>
    <fpsfa-tab-panel></fpsfa-tab-panel>
    <fpsfa-tab-panel></fpsfa-tab-panel>
  </fpsfa-tabs>
`;
export const TabsVertical = renderComponent(tabsVertical).bind({});

const tabsAppearance = html`
  <fpsfa-tabs appearance="text">
    <fpsfa-tab> First Tab </fpsfa-tab>
    <fpsfa-tab> Second Tab</fpsfa-tab>
    <fpsfa-tab> Third Tab</fpsfa-tab>
    <fpsfa-tab> Fourth Tab</fpsfa-tab>

    <fpsfa-tab-panel></fpsfa-tab-panel>
    <fpsfa-tab-panel></fpsfa-tab-panel>
    <fpsfa-tab-panel></fpsfa-tab-panel>
    <fpsfa-tab-panel></fpsfa-tab-panel>
  </fpsfa-tabs>
  <fpsfa-tabs appearance="ghost">
    <fpsfa-tab active> First Tab </fpsfa-tab>
    <fpsfa-tab> Second Tab</fpsfa-tab>
    <fpsfa-tab> Third Tab</fpsfa-tab>
    <fpsfa-tab> Fourth Tab</fpsfa-tab>

    <fpsfa-tab-panel></fpsfa-tab-panel>
    <fpsfa-tab-panel></fpsfa-tab-panel>
    <fpsfa-tab-panel></fpsfa-tab-panel>
    <fpsfa-tab-panel></fpsfa-tab-panel>
  </fpsfa-tabs>
`;
export const TabsAppearance = renderComponent(tabsAppearance).bind({});

const tabsDisabledTabs = html`
  <fpsfa-tabs disabled>
    <fpsfa-tab> First Tab </fpsfa-tab>
    <fpsfa-tab> Second Tab</fpsfa-tab>
    <fpsfa-tab> Third Tab</fpsfa-tab>
    <fpsfa-tab> Fourth Tab</fpsfa-tab>

    <fpsfa-tab-panel></fpsfa-tab-panel>
    <fpsfa-tab-panel></fpsfa-tab-panel>
    <fpsfa-tab-panel></fpsfa-tab-panel>
    <fpsfa-tab-panel></fpsfa-tab-panel>
  </fpsfa-tabs>

  <fpsfa-tabs>
    <fpsfa-tab> First Tab </fpsfa-tab>
    <fpsfa-tab disabled> Second Tab</fpsfa-tab>
    <fpsfa-tab> Third Tab</fpsfa-tab>
    <fpsfa-tab> Fourth Tab</fpsfa-tab>

    <fpsfa-tab-panel></fpsfa-tab-panel>
    <fpsfa-tab-panel></fpsfa-tab-panel>
    <fpsfa-tab-panel></fpsfa-tab-panel>
    <fpsfa-tab-panel></fpsfa-tab-panel>
  </fpsfa-tabs>
`;
export const TabsDisabled = renderComponent(tabsDisabledTabs).bind({});

const tabsSizeSmall = html`
  <fpsfa-tabs size="small">
    <fpsfa-tab> First Tab </fpsfa-tab>
    <fpsfa-tab> Second Tab</fpsfa-tab>
    <fpsfa-tab> Third Tab</fpsfa-tab>
    <fpsfa-tab> Fourth Tab</fpsfa-tab>

    <fpsfa-tab-panel></fpsfa-tab-panel>
    <fpsfa-tab-panel></fpsfa-tab-panel>
    <fpsfa-tab-panel></fpsfa-tab-panel>
    <fpsfa-tab-panel></fpsfa-tab-panel>
  </fpsfa-tabs>
  <fpsfa-tabs size="small" orientation="vertical">
    <fpsfa-tab> First Tab </fpsfa-tab>
    <fpsfa-tab> Second Tab</fpsfa-tab>
    <fpsfa-tab> Third Tab</fpsfa-tab>
    <fpsfa-tab> Fourth Tab</fpsfa-tab>

    <fpsfa-tab-panel></fpsfa-tab-panel>
    <fpsfa-tab-panel></fpsfa-tab-panel>
    <fpsfa-tab-panel></fpsfa-tab-panel>
    <fpsfa-tab-panel></fpsfa-tab-panel>
  </fpsfa-tabs>
`;
export const TabsSizeSmall = renderComponent(tabsSizeSmall).bind({});

const tabsSizeMedium = html`
  <fpsfa-tabs size="medium">
    <fpsfa-tab> First Tab </fpsfa-tab>
    <fpsfa-tab> Second Tab</fpsfa-tab>
    <fpsfa-tab> Third Tab</fpsfa-tab>
    <fpsfa-tab> Fourth Tab</fpsfa-tab>

    <fpsfa-tab-panel></fpsfa-tab-panel>
    <fpsfa-tab-panel></fpsfa-tab-panel>
    <fpsfa-tab-panel></fpsfa-tab-panel>
    <fpsfa-tab-panel></fpsfa-tab-panel>
  </fpsfa-tabs>
  <fpsfa-tabs size="medium" orientation="vertical">
    <fpsfa-tab> First Tab </fpsfa-tab>
    <fpsfa-tab> Second Tab</fpsfa-tab>
    <fpsfa-tab> Third Tab</fpsfa-tab>
    <fpsfa-tab> Fourth Tab</fpsfa-tab>

    <fpsfa-tab-panel></fpsfa-tab-panel>
    <fpsfa-tab-panel></fpsfa-tab-panel>
    <fpsfa-tab-panel></fpsfa-tab-panel>
    <fpsfa-tab-panel></fpsfa-tab-panel>
  </fpsfa-tabs>
`;
export const TabsSizeMedium = renderComponent(tabsSizeMedium).bind({});

const tabsSizeLarge = html`
  <fpsfa-tabs size="large">
    <fpsfa-tab> First Tab </fpsfa-tab>
    <fpsfa-tab> Second Tab</fpsfa-tab>
    <fpsfa-tab> Third Tab</fpsfa-tab>
    <fpsfa-tab> Fourth Tab</fpsfa-tab>

    <fpsfa-tab-panel></fpsfa-tab-panel>
    <fpsfa-tab-panel></fpsfa-tab-panel>
    <fpsfa-tab-panel></fpsfa-tab-panel>
    <fpsfa-tab-panel></fpsfa-tab-panel>
  </fpsfa-tabs>
  <fpsfa-tabs size="large" orientation="vertical">
    <fpsfa-tab> First Tab </fpsfa-tab>
    <fpsfa-tab> Second Tab</fpsfa-tab>
    <fpsfa-tab> Third Tab</fpsfa-tab>
    <fpsfa-tab> Fourth Tab</fpsfa-tab>

    <fpsfa-tab-panel></fpsfa-tab-panel>
    <fpsfa-tab-panel></fpsfa-tab-panel>
    <fpsfa-tab-panel></fpsfa-tab-panel>
    <fpsfa-tab-panel></fpsfa-tab-panel>
  </fpsfa-tabs>
`;
export const TabsSizeLarge = renderComponent(tabsSizeLarge).bind({});

export default {
  title: 'Components/Tabs',
  tags: ["autodocs"],
  args: {
    appearance: 'transparent',
    disabled: false,
    orientation: 'horizontal',
    size: 'medium',
  },
  argTypes: {
    appearance: {
      options: Object.values(TabsAppearanceValues),
      defaultValue: TabsAppearanceValues.transparent,
      control: {
        type: 'select',
      },
    },
    activeid: {
      options: tabIds,
      defaultValue: tabIds[0],
      control: { type: 'select' },
    },
    disabled: {
      options: [true, false],
      defaultValue: false,
      control: { type: 'select' },
    },
    size: {
      options: Object.values(TabsSize),
      defaultValue: TabsSize.medium,
      control: { type: 'select' },
    },
    orientation: {
      options: Object.values(TabsOrientation),
      defaultValue: TabsOrientation.horizontal,
      control: { type: 'select' },
    },
  },
} as TabsStoryMeta;
