import { html } from "@microsoft/fast-element";
import type { Args, Meta } from "@storybook/web-components";
import { renderComponent } from "../helpers.storybook";
import type { ListboxOption as FpsfaListboxOption } from "./listbox-option";
import "./define";

type ListboxOptionStoryArgs = Args & FpsfaListboxOption;
type ListboxOptionStoryMeta = Meta<ListboxOptionStoryArgs>;

export const storyTemplate = html<ListboxOptionStoryArgs>`  <fpsfa-option
  ?disabled="${(x) => x.disabled}"
  ?selected="${(x) => x.selected}"
  id="${(x) => x.id}"
  value="${(x) => x.value}"
  >${(x) => x.storyContent}</fpsfa-option> 
`;

export default {
  component: "Option",
  title: "Components/Listbox Option",
  tags: ["autodocs"],
  excludeStories: ["storyTemplate"],
  args: {
    selected: false,
    disabled: false,
    storyContent: "Listbox option",
    value: "listbox-value",
  },
  argTypes: {
    disabled: { control: "boolean" },
    selected: { control: "boolean" },
    value: { control: "text" },
    ariaChecked: { control: "text" },
    ariaPosInSet: { control: "text" },
    ariaSelected: { control: "text" },
    ariaSetSize: { control: "text" },
    storyContent: { table: { disable: true } },
  },
} as ListboxOptionStoryMeta;

export const ListboxOption = renderComponent(storyTemplate).bind({});

export const ListboxOptionWithSlottedStartEnd = ListboxOption.bind({});
ListboxOptionWithSlottedStartEnd.args = {
  storyContent: html`
    <svg slot="start" width="20" height="20"><use href="#test-icon" /></svg>
    Listbox option
    <svg slot="end" width="20" height="20"><use href="#test-icon-2" /></svg>
  `,
};
