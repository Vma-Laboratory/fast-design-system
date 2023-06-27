import { html, repeat } from "@microsoft/fast-element";
import type { Args, Meta } from "@storybook/web-components";
import { renderComponent } from "../helpers.storybook";
import type { Checkbox as FpsfaCheckbox } from "./checkbox";
import "./define";

type CheckboxStoryArgs = Args & FpsfaCheckbox;
type CheckboxStoryMeta = Meta<CheckboxStoryArgs>;

const storyTemplate = html<CheckboxStoryArgs>`
  <fpsfa-checkbox
    ?checked="${(x) => x.checked}"
    ?disabled="${(x) => x.disabled}"
    ?required="${(x) => x.required}"
    ?readonly="${(x) => x.readOnly}"
    :indeterminate="${(x) => x.indeterminate}"
    value="${(x) => x.value}"
  >
    ${(x) => x.storyContent}
  </fpsfa-checkbox>
`;

export default {
  component: "Checkbox",
  title: "Components/Checkbox",
  tags: ["autodocs"],
  args: {
    checked: false,
    disabled: false,
    indeterminate: false,
    storyContent: "Checkbox",
    readOnly: false,
    required: false,
  },
  argTypes: {
    // appearance: {
    //   options: Object.values(CheckboxAppearance),
    //   control: {
    //     type: "select",
    //   },
    // },
    // shape: {
    //   options: Object.values(CheckboxShape),
    //   control: {
    //     type: "select",
    //   },
    // },
    // size: {
    //   options: Object.values(CheckboxSize),
    //   control: {
    //     type: "select",
    //   },
    // },
    checked: { control: "boolean" },
    indeterminate: { control: "boolean" },
    readOnly: { control: "boolean" },
    required: { control: "boolean" },
    value: { control: "text" },
    storyItems: { table: { disable: true } },
    disabled: {
      control: "boolean",
      table: {
        type: {
          summary: "Sets the disabled state of the component",
        },
        defaultValue: {
          summary: "false",
        },
      },
    },
    disabledFocusable: {
      control: "boolean",
      table: {
        type: {
          summary: "The component is disabled but still focusable",
        },
        defaultValue: {
          summary: "false",
        },
      },
    },
    storyContent: {
      control: "Checkbox text",
    },
  },
} as CheckboxStoryMeta;

export const Checkbox = renderComponent(storyTemplate).bind({});

export const CheckboxDisabled: CheckboxStoryMeta = renderComponent(
  html<CheckboxStoryArgs>`
      <div style="align-items: start; display: flex; flex-direction: column">
          ${repeat(x => x.storyItems, storyTemplate)}
      </div>
  `
).bind({});
CheckboxDisabled.args = {
  storyItems: [
      { storyContent: "Disabled (unchecked)", disabled: true },
      {
          storyContent: "Disabled (indeterminate, unchecked)",
          disabled: true,
          indeterminate: true,
      },
      {
          storyContent: "Disabled (indeterminate, checked)",
          checked: true,
          disabled: true,
          indeterminate: true,
      },
      { storyContent: "Disabled (checked)", checked: true, disabled: true },
  ],
};



export const CheckboxIndeterminate: CheckboxStoryMeta = Checkbox.bind({});
CheckboxIndeterminate.args = {
    checked: true,
    indeterminate: true,
    storyContent: "Indeterminate",
};

export const CheckboxInForm: CheckboxStoryMeta = renderComponent(
    html<CheckboxStoryArgs>`
        <form @submit="${() => false}">
            ${storyTemplate}
            <fspfa-checkbox type="submit">Submit</fspfa-checkbox>
        </form>
    `
).bind({});

export const CheckboxInFieldset: CheckboxStoryMeta = renderComponent(
    html<CheckboxStoryArgs>`
        <fieldset style="align-items: start; display: flex; flex-direction: column">
            <legend>${x => x.legendLabel}</legend>
            ${repeat(x => x.storyItems, storyTemplate)}
        </fieldset>
    `
).bind({});
CheckboxInFieldset.args = {
    legendLabel: "Fruit",
    storyItems: [
        { storyContent: "Apples", checked: true },
        { storyContent: "Bananas", checked: true },
        { storyContent: "Honeydew" },
        { storyContent: "Oranges", checked: true },
    ],
};

export const CheckboxVisualVsAudioLabel = Checkbox.bind({});
CheckboxVisualVsAudioLabel.args = {
    storyContent: html`
        <span aria-label="Audio label">Visible label</span>
    `,
};