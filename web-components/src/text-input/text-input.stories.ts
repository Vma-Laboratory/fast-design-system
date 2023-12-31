import { html } from '@microsoft/fast-element';
import type { Args, Meta } from '@storybook/web-components';
import { renderComponent } from '../helpers.storybook';
import type { TextInput as FpsfaTextInput } from './text-input';
import { TextInputAppearance, TextInputControlSize } from './text-input.options';
import { fpsfaColorsNeutral0, fpsfaColorsNeutral100 } from "../../../tokens/src";
import { TextInputType } from './index';
import './define';
import '../text/define';

type TextInputStoryArgs = Args & FpsfaTextInput;
type TextInputStoryMeta = Meta<TextInputStoryArgs>;

const Person20Regular = html`<svg
  fill="currentColor"
  aria-hidden="true"
  width="1em"
  height="1em"
  viewBox="0 0 20 20"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M10 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8ZM7 6a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm-2 5a2 2 0 0 0-2 2c0 1.7.83 2.97 2.13 3.8A9.14 9.14 0 0 0 10 18c1.85 0 3.58-.39 4.87-1.2A4.35 4.35 0 0 0 17 13a2 2 0 0 0-2-2H5Zm-1 2a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1c0 1.3-.62 2.28-1.67 2.95A8.16 8.16 0 0 1 10 17a8.16 8.16 0 0 1-4.33-1.05A3.36 3.36 0 0 1 4 13Z"
    fill="currentColor"
  ></path>
</svg>`;

const storyTemplate = html<TextInputStoryArgs>`
  <div style="display: flex; flex-direction: column;">
    <fpsfa-text-input
      type=${x => x.type}
      ?disabled=${x => x.disabled}
      placeholder="${x => x.placeholder}"
      control-size="${x => x.controlSize}"
      appearance="${x => x.appearance}"
    >
      <fpsfa-label>Sample Input</fpsfa-label>
    </fpsfa-text-input>
  </div>
`;

export default {
  title: 'Components/TextInput',
  tags: ["autodocs"],
  args: {
    type: TextInputType.text,
    controlSize: TextInputControlSize.medium,
    appearance: TextInputAppearance.outline,
    disabled: false,
    placeholder: undefined,
  },
  argTypes: {
    type: {
      description: 'Sets the input type',
      table: {
        defaultValue: { summary: `${TextInputType.text}` },
      },
      options: Object.values(TextInputType),
      control: {
        type: 'select',
      },
    },
    controlSize: {
      description: 'Sets the size of the control',
      table: {
        defaultValue: { summary: `${TextInputControlSize.medium}` },
      },
      control: {
        type: 'select',
        options: Object.values(TextInputControlSize),
      },
    },
    appearance: {
      description: 'Sets the visual appearance of the control',
      table: {
        defaultValue: { summary: `${TextInputAppearance.outline}` },
      },
      control: {
        type: 'select',
        options: Object.values(TextInputAppearance),
      },
    },
    disabled: {
      description: 'Sets the disabled state',
      table: {
        defaultValue: { summary: 'false' },
      },
      control: {
        type: 'boolean',
      },
    },
    placeholder: {
      description: 'Sets the placeholder text',
      control: {
        type: 'text',
      },
    },
  },
} as TextInputStoryMeta;

export const TextInput = renderComponent(storyTemplate).bind({});

export const ContentStartAfter = renderComponent(html<TextInputStoryArgs>`
  <div style="display: flex; flex-direction: column; gap: 30px;">
    <fpsfa-text-input>
      <span slot="start">${Person20Regular}</span>
      <fpsfa-label>Content Start</fpsfa-label>
    </fpsfa-text-input>
    <fpsfa-text-input>
      <span slot="end">${Person20Regular}</span>
      <fpsfa-label>Content After</fpsfa-label>
    </fpsfa-text-input>
    <fpsfa-text-input>
      <fpsfa-text slot="start" size="400"><span>$</span></fpsfa-text>
      <fpsfa-text slot="end" size="400"><span>.00</span></fpsfa-text>
      <fpsfa-label>Content Before + After</fpsfa-label>
    </fpsfa-text-input>
  </div>
`);

export const Placeholder = renderComponent(html<TextInputStoryArgs>`
  <fpsfa-text-input placeholder="This is a placeholder">
    <span slot="end">${Person20Regular}</span>
    <fpsfa-label>Disabled Input</fpsfa-label>
  </fpsfa-text-input>
`);

export const Appearance = renderComponent(html<TextInputStoryArgs>`
  <div style="display: flex; flex-direction: column; gap: 30px; width: 400px;">
    <div style="padding: 10px;">
      <fpsfa-text-input>
        <span slot="start">${Person20Regular}</span>
        <fpsfa-label>Outline (default) Input</fpsfa-label>
      </fpsfa-text-input>
    </div>
    <div style="padding: 10px;">
      <fpsfa-text-input appearance="underline">
        <span slot="start">${Person20Regular}</span>
        <fpsfa-label>Underlined Input</fpsfa-label>
      </fpsfa-text-input>
    </div>
    <div style="padding: 10px; background: ${fpsfaColorsNeutral0}">
      <fpsfa-text-input appearance="filled-lighter">
        <span slot="start">${Person20Regular}</span>
        <fpsfa-label style="color: ${fpsfaColorsNeutral100}">Filled Lighter Input</fpsfa-label>
      </fpsfa-text-input>
    </div>
    <div style="padding: 10px; background: ${fpsfaColorsNeutral0}">
      <fpsfa-text-input appearance="filled-darker">
        <span slot="start">${Person20Regular}</span>
        <fpsfa-label style="color: ${fpsfaColorsNeutral100}">Filled Darker Input</fpsfa-label>
      </fpsfa-text-input>
    </div>
  </div>
`);

export const Size = renderComponent(html<TextInputStoryArgs>`
  <div style="display: flex; flex-direction: column; gap: 30px;">
    <fpsfa-text-input control-size="small">
      <span slot="end">${Person20Regular}</span>
      <fpsfa-label size="small">Small Input</fpsfa-label>
    </fpsfa-text-input>

    <fpsfa-text-input>
      <span slot="end">${Person20Regular}</span>
      <fpsfa-label>Medium (default) Input</fpsfa-label>
    </fpsfa-text-input>

    <fpsfa-text-input control-size="large">
      <span slot="end">${Person20Regular}</span>
      <fpsfa-label size="large">Large Input</fpsfa-label>
    </fpsfa-text-input>
  </div>
`);

export const Inline = renderComponent(html<TextInputStoryArgs>`
  <div>
    <fpsfa-text-input style="display: inline-flex; align-items: center; margin-bottom: 22px;">
      <span slot="end">${Person20Regular}</span>
      <fpsfa-label>Inline Input</fpsfa-label>
    </fpsfa-text-input>
    <fpsfa-text
      align="start"
      font="base"
      size="300"
      weight="regular"
      style="display: flex; align-items: center; gap: 4px;"
    >
      <span
        >This input is an
        <fpsfa-text-input
          style="display: inline-flex; align-items: center;"
          placeholder="inline text input"
        ></fpsfa-text-input>
        with a paragraph of text.</span
      >
    </fpsfa-text>
  </div>
`);

export const Disabled = renderComponent(html<TextInputStoryArgs>`
  <fpsfa-text-input disabled>
    <span slot="end">${Person20Regular}</span>
    <fpsfa-label>Disabled Input</fpsfa-label>
  </fpsfa-text-input>
`);

export const Required = renderComponent(html<TextInputStoryArgs>`
  <fpsfa-text-input required>
    <span slot="end">${Person20Regular}</span>
    <fpsfa-label>Required Input</fpsfa-label>
  </fpsfa-text-input>
`);
