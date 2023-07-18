import { attr } from '@microsoft/fast-element';
import { FASTTextField } from '@microsoft/fast-foundation';
import { TextInputAppearance, TextInputControlSize } from './text-input.options';

/**
 * The base class used for constructing a fpsfa-text-input custom element
 * @public
 */
export class TextInput extends FASTTextField {
  /**
   * Defines TextInput control size
   *
   * @public
   * @default 'medium'
   * @remarks
   * HTML Attribute: control-size
   */
  @attr({ attribute: 'control-size' })
  public controlSize?: TextInputControlSize;

  /**
   * Defines TextInput appearance.
   *
   * @public
   * @default 'outline'
   * @remarks
   * HTML Attribute: appearance
   */
  @attr
  public appearance?: TextInputAppearance;
}
