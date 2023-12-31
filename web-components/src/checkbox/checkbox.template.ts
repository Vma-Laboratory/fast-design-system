import { html } from "@microsoft/fast-element";
import { ElementViewTemplate } from "@microsoft/fast-element";
import { checkboxTemplate } from "@microsoft/fast-foundation";
import type { Checkbox } from "./checkbox";

/**
 * The template for the Checkbox component.
 * @public
 */
export const template: ElementViewTemplate<Checkbox> = checkboxTemplate({
  checkedIndicator: html`
    <svg
      part="checked-indicator"
      class="checked-indicator"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8.143 12.6697L15.235 4.5L16.8 5.90363L8.23812 15.7667L3.80005 11.2556L5.27591 9.7555L8.143 12.6697Z"
      />
    </svg>
  `,
  indeterminateIndicator: html` <div
    part="indeterminate-indicator"
    class="indeterminate-indicator"
  ></div>`,
});
