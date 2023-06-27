import { ElementViewTemplate } from '@microsoft/fast-element';
import { listboxOptionTemplate } from '@microsoft/fast-foundation';
import type { ListboxOption } from './listbox-option';

/**
 * The template for the Combobox component.
 * @public
 */
export const template: ElementViewTemplate<ListboxOption> = listboxOptionTemplate();
