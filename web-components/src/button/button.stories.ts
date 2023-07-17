import { html } from "@microsoft/fast-element";
import type { Args, Meta } from "@storybook/web-components";
import { renderComponent } from "../helpers.storybook";
import type { Button as fpsfaButton } from "./button";
import { ButtonAppearance, ButtonShape, ButtonSize } from "./button.options";
import "./define";

type ButtonStoryArgs = Args & fpsfaButton;
type ButtonStoryMeta = Meta<ButtonStoryArgs>;

const storyTemplate = html<ButtonStoryArgs>`
  <fpsfa-button
    appearance="${(x) => x.appearance}"
    shape="${(x) => x.shape}"
    size="${(x) => x.size}"
    ?disabled="${(x) => x.disabled}"
    ?disabled-focusable="${(x) => x.disabledFocusable}"
    ?icon-only="${(x) => x.iconOnly}"
    ?icon="${(x) => x.icon}"
  >
    ${(x) => x.content}
  </fpsfa-button>
`;

export default {
  component:'Button',
  title: "Components/Button",
  tags: ['autodocs'],
  args: {
    content: "BUTTON",
    disabled: false,
    disabledFocusable: false,
  },
  argTypes: {
    appearance: {
      options: Object.values(ButtonAppearance),
      control: {
        type: "select",
      },
    },
    shape: {
      options: Object.values(ButtonShape),
      control: {
        type: "select",
      },
    },
    size: {
      options: Object.values(ButtonSize),
      control: {
        type: "select",
      },
    },
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
    content: {
      control: "Button text",
    },
  },
} as ButtonStoryMeta;

export const Button = renderComponent(storyTemplate).bind({});

export const Appearance = renderComponent(html<ButtonStoryArgs>`
  <fpsfa-button>Default</fpsfa-button>
  <fpsfa-button appearance="filled">Filled</fpsfa-button>
  <fpsfa-button appearance="outline">Outline</fpsfa-button>
  <fpsfa-button appearance="ghost">Ghost</fpsfa-button>
  <fpsfa-button appearance="text">Text</fpsfa-button>
`);

export const Shape = renderComponent(html<ButtonStoryArgs>`
  <fpsfa-button shape="rounded">Rounded</fpsfa-button>
  <fpsfa-button shape="circular">Circular</fpsfa-button>
  <fpsfa-button shape="square">Square</fpsfa-button>
`);

export const Size = renderComponent(html<ButtonStoryArgs>`
  <fpsfa-button size="small">Small</fpsfa-button>
  <fpsfa-button size="small" icon
    ><svg
      fill="currentColor"
      slot="start"
      aria-hidden="true"
      width="1em"
      height="1em"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.5 3A2.5 2.5 0 0117 5.5v9a2.5 2.5 0 01-2.5 2.5h-9A2.5 2.5 0 013 14.5v-9A2.5 2.5 0 015.5 3h9zm0 1h-9C4.67 4 4 4.67 4 5.5v9c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5v-9c0-.83-.67-1.5-1.5-1.5zM7 11a1 1 0 110 2 1 1 0 010-2zm3 0a1 1 0 110 2 1 1 0 010-2zM7 7a1 1 0 110 2 1 1 0 010-2zm3 0a1 1 0 110 2 1 1 0 010-2zm3 0a1 1 0 110 2 1 1 0 010-2z"
        fill="currentColor"
      ></path>
    </svg>
    Small with calendar icon</fpsfa-button
  >
  <fpsfa-button size="small" icon-only aria-label="Small icon only button"
    ><svg
      fill="currentColor"
      aria-hidden="true"
      width="1em"
      height="1em"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.5 3A2.5 2.5 0 0117 5.5v9a2.5 2.5 0 01-2.5 2.5h-9A2.5 2.5 0 013 14.5v-9A2.5 2.5 0 015.5 3h9zm0 1h-9C4.67 4 4 4.67 4 5.5v9c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5v-9c0-.83-.67-1.5-1.5-1.5zM7 11a1 1 0 110 2 1 1 0 010-2zm3 0a1 1 0 110 2 1 1 0 010-2zM7 7a1 1 0 110 2 1 1 0 010-2zm3 0a1 1 0 110 2 1 1 0 010-2zm3 0a1 1 0 110 2 1 1 0 010-2z"
        fill="currentColor"
      ></path>
    </svg>
  </fpsfa-button>
  <fpsfa-button size="medium">Medium</fpsfa-button>
  <fpsfa-button size="medium" icon
    ><svg
      fill="currentColor"
      slot="start"
      aria-hidden="true"
      width="1em"
      height="1em"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.5 3A2.5 2.5 0 0117 5.5v9a2.5 2.5 0 01-2.5 2.5h-9A2.5 2.5 0 013 14.5v-9A2.5 2.5 0 015.5 3h9zm0 1h-9C4.67 4 4 4.67 4 5.5v9c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5v-9c0-.83-.67-1.5-1.5-1.5zM7 11a1 1 0 110 2 1 1 0 010-2zm3 0a1 1 0 110 2 1 1 0 010-2zM7 7a1 1 0 110 2 1 1 0 010-2zm3 0a1 1 0 110 2 1 1 0 010-2zm3 0a1 1 0 110 2 1 1 0 010-2z"
        fill="currentColor"
      ></path>
    </svg>
    Medium with calendar icon</fpsfa-button
  >
  <fpsfa-button size="medium" icon-only aria-label="Medium icon only button"
    ><svg
      fill="currentColor"
      aria-hidden="true"
      width="1em"
      height="1em"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.5 3A2.5 2.5 0 0117 5.5v9a2.5 2.5 0 01-2.5 2.5h-9A2.5 2.5 0 013 14.5v-9A2.5 2.5 0 015.5 3h9zm0 1h-9C4.67 4 4 4.67 4 5.5v9c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5v-9c0-.83-.67-1.5-1.5-1.5zM7 11a1 1 0 110 2 1 1 0 010-2zm3 0a1 1 0 110 2 1 1 0 010-2zM7 7a1 1 0 110 2 1 1 0 010-2zm3 0a1 1 0 110 2 1 1 0 010-2zm3 0a1 1 0 110 2 1 1 0 010-2z"
        fill="currentColor"
      ></path>
    </svg>
  </fpsfa-button>
  <fpsfa-button size="large">Large</fpsfa-button>
  <fpsfa-button size="large" icon
    ><svg
      fill="currentColor"
      slot="start"
      aria-hidden="true"
      width="1em"
      height="1em"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.5 3A2.5 2.5 0 0117 5.5v9a2.5 2.5 0 01-2.5 2.5h-9A2.5 2.5 0 013 14.5v-9A2.5 2.5 0 015.5 3h9zm0 1h-9C4.67 4 4 4.67 4 5.5v9c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5v-9c0-.83-.67-1.5-1.5-1.5zM7 11a1 1 0 110 2 1 1 0 010-2zm3 0a1 1 0 110 2 1 1 0 010-2zM7 7a1 1 0 110 2 1 1 0 010-2zm3 0a1 1 0 110 2 1 1 0 010-2zm3 0a1 1 0 110 2 1 1 0 010-2z"
        fill="currentColor"
      ></path>
    </svg>
    Large with calendar icon</fpsfa-button
  >
  <fpsfa-button size="large" icon-only aria-label="Large icon only button"
    ><svg
      fill="currentColor"
      aria-hidden="true"
      width="1em"
      height="1em"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.5 3A2.5 2.5 0 0117 5.5v9a2.5 2.5 0 01-2.5 2.5h-9A2.5 2.5 0 013 14.5v-9A2.5 2.5 0 015.5 3h9zm0 1h-9C4.67 4 4 4.67 4 5.5v9c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5v-9c0-.83-.67-1.5-1.5-1.5zM7 11a1 1 0 110 2 1 1 0 010-2zm3 0a1 1 0 110 2 1 1 0 010-2zM7 7a1 1 0 110 2 1 1 0 010-2zm3 0a1 1 0 110 2 1 1 0 010-2zm3 0a1 1 0 110 2 1 1 0 010-2z"
        fill="currentColor"
      ></path>
    </svg>
  </fpsfa-button>
`);

export const Disabled = renderComponent(html<ButtonStoryArgs>`
  <fpsfa-button>Enabled state</fpsfa-button>
  <fpsfa-button disabled>Disabled state</fpsfa-button>
  <fpsfa-button disabled-focusable>Disabled focusable state</fpsfa-button>
  <fpsfa-button appearance="filled">Enabled state</fpsfa-button>
  <fpsfa-button appearance="filled" disabled>Disabled state</fpsfa-button>
  <fpsfa-button appearance="filled" disabled-focusable
    >Disabled focusable state</fpsfa-button
  >
`);

export const WithLongText = renderComponent(html<ButtonStoryArgs>`
  <style>
    .max-width {
      width: 280px;
    }
  </style>
  <fpsfa-button>Short text</fpsfa-button>
  <fpsfa-button class="max-width"
    >Long text wraps after it hits the max width of the component</fpsfa-button
  >
`);
