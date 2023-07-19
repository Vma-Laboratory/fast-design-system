import { css } from '@microsoft/fast-element';
import { display } from '@microsoft/fast-foundation';

export const styles = css`
  ${display('grid')}`;

//   :host {
//     box-sizing: border-box;
//     font-family: ${fontFamilyBase};
//     font-size: ${fontSizeBase300};
//     line-height: ${lineHeightBase300};
//     color: ${colorNeutralForeground2};
//     grid-template-columns: auto 1fr auto;
//     grid-template-rows: auto 1fr;
//   }

//   :host([disabled]) {
//     cursor: not-allowed;
//     color: ${colorNeutralForegroundDisabled};
//   }

//   :host([disabled]) ::slotted(fpsfa-tab) {
//     pointer-events: none;
//     cursor: not-allowed;
//     color: ${colorNeutralForegroundDisabled};
//   }
//   :host([disabled]) ::slotted(fpsfa-tab:after) {
//     background-color: ${colorNeutralForegroundDisabled};
//   }
//   :host([disabled]) ::slotted(fpsfa-tab[aria-selected='true'])::after {
//     background-color: ${colorNeutralForegroundDisabled};
//   }
//   :host([disabled]) ::slotted(fpsfa-tab:hover):before {
//     content: unset;
//   }

//   :host ::slotted(fpsfa-tab) {
//     border-radius: ${borderRadiusMedium};
//   }

//   :host ::slotted(fpsfa-tab[aria-selected='true'])::before {
//     background-color: ${colorNeutralForegroundDisabled};
//   }

//   .tablist {
//     display: grid;
//     grid-template-rows: auto auto;
//     grid-template-columns: auto;
//     position: relative;
//     width: max-content;
//     align-self: end;
//     box-sizing: border-box;
//   }
//   ::slotted([slot='start']),
//   ::slotted([slot='end']) {
//     display: flex;
//     align-self: center;
//   }
//   ::slotted([slot='start']) {
//     margin-inline-end: 11px;
//   }
//   ::slotted([slot='end']) {
//     margin-inline-start: 11px;
//   }

//   .tabpanel {
//     grid-row: 2;
//     grid-column-start: 1;
//     grid-column-end: 4;
//     position: relative;
//   }
//   :host([orientation='vertical']) {
//     grid-template-rows: auto 1fr auto;
//     grid-template-columns: auto 1fr;
//   }
//   :host([orientation='vertical']) .tablist {
//     grid-row-start: 2;
//     grid-row-end: 2;
//     display: grid;
//     grid-template-rows: auto;
//     grid-template-columns: auto 1fr;
//     position: relative;
//     width: max-content;
//     justify-self: end;
//     align-self: flex-start;
//     width: 100%;
//   }
//   :host([orientation='vertical']) .tabpanel {
//     grid-column: 2;
//     grid-row-start: 1;
//     grid-row-end: 4;
//   }
//   :host([orientation='vertical']) ::slotted([slot='end']) {
//     grid-row: 3;
//   }

//   :host([appearance='subtle']) ::slotted(fpsfa-tab:hover) {
//     background-color: ${colorSubtleBackgroundHover};
//     color: ${colorNeutralForeground1Hover};
//     fill: ${colorCompoundBrandForeground1Hover};
//   }

//   :host([appearance='subtle']) ::slotted(fpsfa-tab:active) {
//     background-color: ${colorSubtleBackgroundPressed};
//     fill: ${colorSubtleBackgroundPressed};
//     color: ${colorNeutralForeground1};
//   }

//   :host([size='small']) ::slotted(fpsfa-tab) {
//     font-size: ${fontSizeBase300};
//     line-height: ${lineHeightBase300};
//     padding: ${spacingVerticalSNudge} ${spacingHorizontalSNudge};
//   }

//   :host([size='large']) ::slotted(fpsfa-tab) {
//     font-size: ${fontSizeBase400};
//     line-height: ${lineHeightBase400};
//     padding: ${spacingVerticalL} ${spacingHorizontalMNudge};
//   }

//   /* indicator animation  */
//   :host ::slotted(fpsfa-tab[data-animate='true'])::after {
//     transition-property: transform;
//     transition-duration: ${durationSlow};
//     transition-timing-function: ${curveDecelerateMax};
//   }
//   :host ::slotted(fpsfa-tab)::after {
//     height: ${strokeWidthThicker};
//     margin-top: auto;
//     transform-origin: left;
//     transform: translateX(var(--tabIndicatorOffset)) scaleX(var(--tabIndicatorScale));
//   }
//   :host([orientation='vertical']) ::slotted(fpsfa-tab)::after {
//     width: ${strokeWidthThicker};
//     height: unset;
//     margin-top: unset;
//     transform-origin: top;
//     transform: translateY(var(--tabIndicatorOffset)) scaleY(var(--tabIndicatorScale));
//   }

//   /* ::before adds a secondary indicator placeholder that appears right after click on the active tab */
//   :host ::slotted(fpsfa-tab)::before {
//     height: ${strokeWidthThicker};
//     border-radius: ${borderRadiusCircular};
//     content: '';
//     inset: 0;
//     position: absolute;
//     margin-top: auto;
//   }
//   :host([orientation='vertical']) ::slotted(fpsfa-tab)::before {
//     height: unset;
//     width: ${strokeWidthThicker};
//     margin-inline-end: auto;
//     transform-origin: top;
//   }

//   :host ::slotted(fpsfa-tab[aria-selected='false']:hover)::after {
//     height: ${strokeWidthThicker};
//     margin-top: auto;
//     transform-origin: left;
//   }
//   :host([orientation='vertical']) ::slotted(fpsfa-tab[aria-selected='false']:hover)::after {
//     height: unset;
//     margin-inline-end: auto;
//     transform-origin: top;
//     width: ${strokeWidthThicker};
//   }

//   :host([orientation='vertical']) ::slotted(fpsfa-tab) {
//     align-items: flex-start;
//     grid-column: 2;
//     padding-top: ${spacingVerticalSNudge};
//     padding-bottom: ${spacingVerticalSNudge};
//   }
//   :host([orientation='vertical'][size='small']) ::slotted(fpsfa-tab) {
//     padding-top: ${spacingVerticalXXS};
//     padding-bottom: ${spacingVerticalXXS};
//   }
//   :host([orientation='vertical'][size='large']) ::slotted(fpsfa-tab) {
//     padding-top: ${spacingVerticalS};
//     padding-bottom: ${spacingVerticalS};
//   }

//   /* horizontal spacing for indicator */
//   :host([size='small']) ::slotted(fpsfa-tab)::after,
//   :host([size='small']) ::slotted(fpsfa-tab)::before,
//   :host([size='small']) ::slotted(fpsfa-tab:hover)::after {
//     right: ${spacingHorizontalSNudge};
//     left: ${spacingHorizontalSNudge};
//   }
//   :host ::slotted(fpsfa-tab)::after,
//   :host ::slotted(fpsfa-tab)::before,
//   :host ::slotted(fpsfa-tab:hover)::after {
//     right: ${spacingHorizontalMNudge};
//     left: ${spacingHorizontalMNudge};
//   }
//   :host([size='large']) ::slotted(fpsfa-tab)::after,
//   :host([size='large']) ::slotted(fpsfa-tab)::before,
//   :host([size='large']) ::slotted(fpsfa-tab:hover)::after {
//     right: ${spacingHorizontalMNudge};
//     left: ${spacingHorizontalMNudge};
//   }

//   /* vertical spacing for indicator */
//   :host([orientation='vertical'][size='small']) ::slotted(fpsfa-tab)::after,
//   :host([orientation='vertical'][size='small']) ::slotted(fpsfa-tab)::before,
//   :host([orientation='vertical'][size='small']) ::slotted(fpsfa-tab:hover)::after {
//     right: 0;
//     left: 0;
//     top: ${spacingVerticalSNudge};
//     bottom: ${spacingVerticalSNudge};
//   }
//   :host([orientation='vertical']) ::slotted(fpsfa-tab)::after,
//   :host([orientation='vertical']) ::slotted(fpsfa-tab)::before,
//   :host([orientation='vertical']) ::slotted(fpsfa-tab:hover)::after {
//     right: 0;
//     left: 0;
//     top: ${spacingVerticalS};
//     bottom: ${spacingVerticalS};
//   }
//   :host([orientation='vertical'][size='large']) ::slotted(fpsfa-tab)::after,
//   :host([orientation='vertical'][size='large']) ::slotted(fpsfa-tab)::before,
//   :host([orientation='vertical'][size='large']) ::slotted(fpsfa-tab:hover)::after {
//     right: 0;
//     left: 0;
//     top: ${spacingVerticalMNudge};
//     bottom: ${spacingVerticalMNudge};
//   }
// `;
