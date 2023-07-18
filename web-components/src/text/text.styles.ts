import { css } from '@microsoft/fast-element';
import { display } from '@microsoft/fast-foundation';
import {
  fpsfaFontFamiliesBody,
  fpsfaFontFamiliesRoboto,
  fpsfaFontFamiliesLora,
  fpsfaFontSize1,
  fpsfaFontSize2,
  fpsfaFontSize3,
  fpsfaFontSize4,
  fpsfaFontSize5,
  fpsfaFontSize6,
  fpsfaFontSize7,
  fpsfaFontSize8,
  fpsfaFontSize9,
  fpsfaFontWeightsRoboto0,
  fpsfaLineHeights0,
  fpsfaLineHeights1,
  fpsfaLineHeights2,
  fpsfaLineHeights3,
  fpsfaLineHeights4,
  fpsfaLineHeights5,
  fpsfaLineHeights6,
  fpsfaLineHeights7,
  fpsfaLineHeights8,
  fpsfaLineHeights9,
  fpsfaFontSize0
} from '../../../tokens/src';

/** Text styles
 * @public
 */
export const styles = css`
  ${display('inline')}

  :host {
    contain: content;
  }

  ::slotted(*) {
    font-family: ${fpsfaFontFamiliesBody};
    font-size: ${fpsfaFontSize0};
    line-height: ${fpsfaLineHeights0};
    font-weight: ${fpsfaFontWeightsRoboto0};
    text-align: start;
    white-space: normal;
    overflow: visible;
    text-overflow: clip;
    margin: 0;
    display: inline;
  }

  :host([nowrap]) ::slotted(*) {
    white-space: nowrap;
    overflow: hidden;
  }
  :host([truncate]) ::slotted(*) {
    text-overflow: ellipsis;
  }
  :host([block]),
  :host([block]) ::slotted(*) {
    display: block;
  }
  :host([italic]) ::slotted(*) {
    font-style: italic;
  }
  :host([underline]) ::slotted(*) {
    text-decoration-line: underline;
  }
  :host([strikethrough]) ::slotted(*) {
    text-decoration-line: line-through;
  }
  :host([underline][strikethrough]) ::slotted(*) {
    text-decoration-line: line-through underline;
  }
  :host([size='100']) ::slotted(*) {
    font-size: ${fpsfaFontSize0};
    line-height: ${fpsfaLineHeights0};
  }
  :host([size='200']) ::slotted(*) {
    font-size: ${fpsfaFontSize1};
    line-height: ${fpsfaLineHeights1};
  }
  :host([size='300']) ::slotted(*) {
    font-size: ${fpsfaFontSize2};
    line-height: ${fpsfaLineHeights2};
  }
  :host([size='400']) ::slotted(*) {
    font-size: ${fpsfaFontSize3};
    line-height: ${fpsfaLineHeights3};
  }
  :host([size='500']) ::slotted(*) {
    font-size: ${fpsfaFontSize4};
    line-height: ${fpsfaLineHeights4};
  }
  :host([size='600']) ::slotted(*) {
    font-size: ${fpsfaFontSize5};
    line-height: ${fpsfaLineHeights5};
  }
  :host([size='700']) ::slotted(*) {
    font-size: ${fpsfaFontSize6};
    line-height: ${fpsfaLineHeights6};
  }
  :host([size='800']) ::slotted(*) {
    font-size: ${fpsfaFontSize7};
    line-height: ${fpsfaLineHeights7};
  }
  :host([size='900']) ::slotted(*) {
    font-size: ${fpsfaFontSize8};
    line-height: ${fpsfaLineHeights8};
  }
  :host([size='1000']) ::slotted(*) {
    font-size: ${fpsfaFontSize9};
    line-height: ${fpsfaLineHeights9};
  }
  :host([font='roboto']) ::slotted(*) {
    font-family: ${fpsfaFontFamiliesRoboto};
  }
  :host([font='lora']) ::slotted(*) {
    font-family: ${fpsfaFontFamiliesLora};
  }
  :host([weight='medium']) ::slotted(*) {
    font-weight: 400;
  }
  :host([weight='semibold']) ::slotted(*) {
    font-weight: 600;
  }
  :host([weight='bold']) ::slotted(*) {
    font-weight: 900;
  }
  :host([align='center']) ::slotted(*) {
    text-align: center;
  }
  :host([align='end']) ::slotted(*) {
    text-align: end;
  }
  :host([align='justify']) ::slotted(*) {
    text-align: justify;
  }
`;
