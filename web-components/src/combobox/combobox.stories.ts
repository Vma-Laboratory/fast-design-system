import { html, repeat } from "@microsoft/fast-element";
import type { Args, Meta } from "@storybook/web-components";
import { renderComponent } from "../helpers.storybook";
import type { Combobox as FpsfaCombobox } from "./combobox";
import { ComboboxAutocomplete } from "./combobox.options";
import { storyTemplate as listboxOptionTemplate } from "../listbox-option/listbox-option.stories";
import "./define";

type ComboboxStoryArgs = Args & FpsfaCombobox;
type ComboboxStoryMeta = Meta<ComboboxStoryArgs>;

const storyTemplate = html<ComboboxStoryArgs>`
  <fpsfa-combobox
    ?autofocus="${(x) => x.autofocus}"
    ?disabled="${(x) => x.disabled}"
    ?required="${(x) => x.required}"
    autocomplete="${(x) => x.autocomplete}"
    id="${(x) => x.id}"
    name="${(x) => x.name}"
    placeholder="${(x) => x.placeholder}"
    value="${(x) => x.value}"
  >
    ${(x) => x.storyContent}
  </fpsfa-combobox>
`;

export default {
  component: "Combobox",
  title: "Components/Combobox",
  tags: ["autodocs"],
  args: {
    disabled: false,
    required: false,
    storyContent: html` ${repeat((x) => x.storyItems, listboxOptionTemplate)} `,
    storyItems: [
      { storyContent: "William Hartnell" },
      { storyContent: "Patrick Troughton" },
      { storyContent: "Jon Pertwee" },
      { storyContent: "Tom Baker" },
      { storyContent: "Peter Davidson" },
      { storyContent: "Colin Baker" },
      { storyContent: "Sylvester McCoy" },
      { storyContent: "Paul McGann" },
      { storyContent: "Christopher Eccleston" },
      { storyContent: "David Tenant" },
      { storyContent: "Matt Smith" },
      { storyContent: "Peter Capaldi" },
      { storyContent: "Jodie Whittaker" },
      { storyContent: "Ncuti Gatwa" },
    ],
  },
  argTypes: {
    // appearance: {
    //   options: Object.values(ComboboxAppearance),
    //   control: {
    //     type: "select",
    //   },
    // },
    // shape: {
    //   options: Object.values(ComboboxShape),
    //   control: {
    //     type: "select",
    //   },
    // },
    // size: {
    //   options: Object.values(ComboboxSize),
    //   control: {
    //     type: "select",
    //   },
    // },
    autocomplete: {
      control: "select",
      options: Object.values(ComboboxAutocomplete),
    },
    disabled: { control: "boolean" },
    id: { control: "text" },
    placeholder: { control: "text" },
    storyContent: { table: { disable: true } },
    storyItems: { table: { disable: true } },
    value: { control: "text" },
  },
} as ComboboxStoryMeta;

export const Combobox = renderComponent(storyTemplate).bind({});
