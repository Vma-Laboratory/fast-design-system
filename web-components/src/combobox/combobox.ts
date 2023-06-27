import { attr } from '@microsoft/fast-element';
import { FASTCombobox } from '@microsoft/fast-foundation';

/**
 * The base class used for constructing a fpsfa-combobox custom element
 * @public
 */
export class Combobox extends FASTCombobox {

  /**
   * The combobox is disabled but focusable
   *
   * @public
   * @remarks
   * HTML Attribute: disabled-focusable
   */
  @attr({ attribute: 'disabled-focusable', mode: 'boolean' })
  public disabledFocusable?: boolean = false;
  protected disabledFocusableChanged(prev: boolean, next: boolean): void {
    if (!this.$fastController.isConnected) {
      return;
    }

    if (this.disabledFocusable) {
      ((this as unknown) as HTMLElement).setAttribute('aria-disabled', 'true');
    } else {
      ((this as unknown) as HTMLElement).removeAttribute('aria-disabled');
    }
  }



}
