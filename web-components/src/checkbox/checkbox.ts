import { attr } from '@microsoft/fast-element';
import { FASTCheckbox } from '@microsoft/fast-foundation';

/**
 * The base class used for constructing a fpsfa-checkbox custom element
 * @public
 */
export class Checkbox extends FASTCheckbox {

  /**
   * The checkbox is disabled but focusable
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

  /**
   * Prevents disabledFocusable click events
   */
  private handleDisabledFocusableClick = (e: MouseEvent): void => {
    if (e && this.disabledFocusable) {
      e.stopImmediatePropagation();
      return;
    }
  };

  public connectedCallback(): void {
    super.connectedCallback();

    ((this as unknown) as HTMLElement).addEventListener('click', this.handleDisabledFocusableClick);
  }

  public disconnectedCallback(): void {
    super.disconnectedCallback();

    ((this as unknown) as HTMLElement).removeEventListener('click', this.handleDisabledFocusableClick);
  }
}
