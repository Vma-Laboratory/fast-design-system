import { ElementViewTemplate } from '@microsoft/fast-element';
import { comboboxTemplate } from '@microsoft/fast-foundation';
import type { Combobox } from './combobox';

/**
 * The template for the Combobox component.
 * @public
 */
export const template: ElementViewTemplate<Combobox> = comboboxTemplate({
    indicator: `
    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.15 4.65c.2-.2.5-.2.7 0L6 7.79l3.15-3.14a.5.5 0 11.7.7l-3.5 3.5a.5.5 0 01-.7 0l-3.5-3.5a.5.5 0 010-.7z"/>
    </svg>
  `,
});
