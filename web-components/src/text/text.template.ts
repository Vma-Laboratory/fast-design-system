import { ElementViewTemplate, html } from '@microsoft/fast-element';
import type { Text } from './text';

/**
 * @internal
 */
export const template: ElementViewTemplate<Text> = html<Text>`<slot></slot>`;
