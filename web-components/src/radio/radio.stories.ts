import { html } from '@microsoft/fast-element';
import type { Args, Meta } from '@storybook/web-components';
import { renderComponent } from '../helpers.storybook';
import type { Radio as FpsfaRadio } from './radio';
import './define';
import '../radio-group/define';

type RadioStoryArgs = Args & FpsfaRadio;
type RadioStoryMeta = Meta<RadioStoryArgs>;

const storyTemplate = html<RadioStoryArgs>`
  <form @submit="${() => false}">
    <fpsfa-radio ?checked="${x => x.checked}" ?disabled="${x => x.disabled}" name="radio-story" value="option1"
      >Option 1</fpsfa-radio
    >
  </form>
`;

export default {
  title: 'Components/Radio',
  tags: ["autodocs"],
  args: {
    checked: false,
    disabled: false,
  },
  argTypes: {
    checked: {
      control: {
        type: 'boolean',
      },
      table: {
        type: {
          summary: 'Sets checked state on radio',
        },
        defaultValue: {
          summary: 'false',
        },
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
      table: {
        type: {
          summary: 'Sets disabled state on radio',
        },
        defaultValue: {
          summary: 'false',
        },
      },
    },
  },
} as RadioStoryMeta;

export const Radio = renderComponent(storyTemplate).bind({});

export const Checked = renderComponent(html<RadioStoryArgs>`
  <fpsfa-radio checked value="Apple">Apple</fpsfa-radio>
`);

export const Disabled = renderComponent(html<RadioStoryArgs>`
  <fpsfa-radio disabled value="Apple">Apple</fpsfa-radio>
`);
