import { css } from "@microsoft/fast-element";
import { display } from "@microsoft/fast-foundation";
import {
  fpsfaThemeButtonFilledStatesDefault,
  fpsfaThemeButtonFilledTextDefault,
  fpsfaThemeButtonFilledBorderDefault,
  fpsfaThemeButtonFilledStatesHover,
  fpsfaThemeButtonFilledTextHover,
  fpsfaThemeButtonFilledBorderHover,
  fpsfaThemeButtonFilledTextPressed,
  fpsfaThemeButtonFilledStatesPressed,
  fpsfaThemeButtonFilledBorderPressed,
  fpsfaThemeButtonFilledStatesDisable,
  fpsfaThemeButtonFilledTextDisable,
  fpsfaThemeButtonFilledBorderDisable,
  fpsfaThemeButtonOutlineStatesDefault,
  fpsfaThemeButtonOutlineTextDefault,
  fpsfaThemeButtonOutlineBorderDefault,
  fpsfaThemeButtonOutlineStatesHover,
  fpsfaThemeButtonOutlineTextHover,
  fpsfaThemeButtonOutlineBorderHover,
  fpsfaThemeButtonOutlineTextPressed,
  fpsfaThemeButtonOutlineStatesPressed,
  fpsfaThemeButtonOutlineBorderPressed,
  fpsfaThemeButtonOutlineStatesDisable,
  fpsfaThemeButtonOutlineTextDisable,
  fpsfaThemeButtonOutlineBorderDisable,
  fpsfaThemeButtonGhostStatesDefault,
  fpsfaThemeButtonGhostTextDefault,
  fpsfaThemeButtonGhostBorderDefault,
  fpsfaThemeButtonGhostStatesHover,
  fpsfaThemeButtonGhostTextHover,
  fpsfaThemeButtonGhostBorderHover,
  fpsfaThemeButtonGhostTextPressed,
  fpsfaThemeButtonGhostStatesPressed,
  fpsfaThemeButtonGhostBorderPressed,
  fpsfaThemeButtonGhostStatesDisable,
  fpsfaThemeButtonGhostTextDisable,
  fpsfaThemeButtonGhostBorderDisable,
  fpsfaThemeButtonTextStatesDefault,
  fpsfaThemeButtonTextTextDefault,
  fpsfaThemeButtonTextBorderDefault,
  fpsfaThemeButtonTextStatesHover,
  fpsfaThemeButtonTextTextHover,
  fpsfaThemeButtonTextBorderHover,
  fpsfaThemeButtonTextTextPressed,
  fpsfaThemeButtonTextStatesPressed,
  fpsfaThemeButtonTextBorderPressed,
  fpsfaThemeButtonTextStatesDisable,
  fpsfaThemeButtonTextTextDisable,
  fpsfaThemeButtonTextBorderDisable,
  fpsfaBorderRadiusSm,
  fpsfaBorderRadiusLg,
  fpsfaBorderRadiusXl,
  fpsfaButtonSFontFamily,
  fpsfaButtonSFontWeight,
  fpsfaButtonSFontSize,
  fpsfaButtonSLineHeight,
  fpsfaButtonSLetterSpacing,
  fpsfaButtonMFontFamily,
  fpsfaButtonMFontWeight,
  fpsfaButtonMFontSize,
  fpsfaButtonMLineHeight,
  fpsfaButtonMLetterSpacing,
  fpsfaButtonLFontFamily,
  fpsfaButtonLFontWeight,
  fpsfaButtonLFontSize,
  fpsfaButtonLLineHeight,
  fpsfaButtonLLetterSpacing
} from "@design-system/tokens";

// Need to support icon hover styles
export const styles = css`
  ${display("inline-flex")}

  :host {
    contain: layout style;
    vertical-align: middle;
  }

  :host .control {
    display: inline-flex;
    align-items: center;
    box-sizing: border-box;
    justify-content: center;
    text-decoration-line: none;
    margin: 0;
    min-height: 32px;
    outline-style: none;
    background-color: ${fpsfaThemeButtonFilledStatesDefault};
    color: ${fpsfaThemeButtonFilledTextDefault};
    border: 0 solid ${fpsfaThemeButtonFilledBorderDefault};
    padding: 1.25rem ${fpsfaButtonMLetterSpacing};
    min-width: 96px;
    border-radius: ${fpsfaBorderRadiusXl};
    font-size: ${fpsfaButtonMFontSize};
    font-family: ${fpsfaButtonMFontFamily};
    font-weight: ${fpsfaButtonMFontWeight};
    cursor: pointer;
  }

  :host(:hover) .control {
    background-color: ${fpsfaThemeButtonFilledStatesHover};
    color: ${fpsfaThemeButtonFilledTextHover};
    border-color: ${fpsfaThemeButtonFilledBorderHover};
  }

  :host(:hover:active) .control {
    background-color: ${fpsfaThemeButtonFilledStatesPressed};
    border-color: ${fpsfaThemeButtonFilledBorderPressed};
    color: ${fpsfaThemeButtonFilledTextPressed};
    outline-style: none;
  }

  .content {
    display: inherit;
  }

  :host .control:focus-visible {
    border-color: ${fpsfaThemeButtonFilledTextPressed};
    outline: 1px solid ${fpsfaThemeButtonFilledBorderPressed};
  }
  
  @media screen and (prefers-reduced-motion: reduce) {
    transition-duration: 0.01ms;
  }

  ::slotted(svg) {
    font-size: 20px;
    height: 20px;
    width: 20px;
    fill: currentColor;
  }

  [slot="start"],
  ::slotted([slot="start"]) {
    margin-inline-end: var(--icon-spacing);
  }

  [slot="end"],
  ::slotted([slot="end"]) {
    margin-inline-start: var(--icon-spacing);
  }

  :host([icon-only]) .control {
    min-width: 32px;
    max-width: 32px;
  }

  :host([size="small"]) {
    --icon-spacing: 1rem;
  }

  :host([size="small"]) .control {
    min-height: 24px;
    min-width: 64px;
    padding: 0 ${fpsfaButtonSLetterSpacing};
    font-size: ${fpsfaButtonSFontSize};
    line-height: ${fpsfaButtonSLineHeight};
    font-weight: ${fpsfaButtonSFontWeight};
  }

  :host([size="small"][icon-only]) .control {
    min-width: 24px;
    max-width: 24px;
  }

  :host([size="large"]) .control {
    min-height: 40px;
    border-radius: ${fpsfaBorderRadiusLg};
    padding: 0 ${fpsfaButtonLLetterSpacing};
    font-size: ${fpsfaButtonLFontSize};
    line-height: ${fpsfaButtonLLineHeight};
  }

  :host([size="large"][icon-only]) .control {
    min-width: 40px;
    max-width: 40px;
  }

  :host([size="large"]) ::slotted(svg) {
    font-size: 24px;
    height: 24px;
    width: 24px;
  }

  :host([appearance='filled']) .control {
  background-color: ${fpsfaThemeButtonFilledStatesDefault};
  color: ${fpsfaThemeButtonFilledTextDefault};
  border-color: transparent;
}

:host([appearance='filled']:hover) .control {
  background-color: ${fpsfaThemeButtonFilledStatesHover};
}

:host([appearance='filled']:hover) .control,
:host([appearance='filled']:hover:active) .control {
  border-color: transparent;
  color: ${fpsfaThemeButtonFilledTextHover};
}

:host([appearance='filled']:hover:active) .control {
  background-color: ${fpsfaThemeButtonFilledStatesPressed};
}

:host([appearance='filled']) .control:focus-visible {
  border-color: ${fpsfaThemeButtonFilledBorderPressed};
}

:host(is:([disabled][appearance='filled'], [disabled-focusabale][appearance="filled"])) .control,
:host(is:([disabled][appearance='filled'], [disabled-focusabale][appearance="filled"]):hover) .control,
:host(is:([disabled][appearance='filled'], [disabled-focusabale][appearance="filled"]):hover:active) .control {
  background-color: ${fpsfaThemeButtonFilledStatesDisable};
  color: ${fpsfaThemeButtonFilledTextDisable};
  border-color: ${fpsfaThemeButtonFilledBorderDisable};
}

:host([appearance='outline']) .control {
  background-color: ${fpsfaThemeButtonOutlineStatesDefault};
  color: ${fpsfaThemeButtonOutlineTextDefault};
  border-color: ${fpsfaThemeButtonOutlineBorderDefault};
}

:host([appearance='outline']:hover) .control {
  background-color: ${fpsfaThemeButtonOutlineStatesHover};
  color: ${fpsfaThemeButtonOutlineTextHover};
  border-color: ${fpsfaThemeButtonOutlineBorderHover};
}

:host([appearance='outline']:hover:active) .control {
  color: ${fpsfaThemeButtonOutlineTextPressed};
  background-color: ${fpsfaThemeButtonOutlineStatesPressed};
  border-color: ${fpsfaThemeButtonOutlineBorderPressed};
}

:host(is:([disabled][appearance='outline'], [disabled-focusabale][appearance="outline"])) .control,
:host(is:([disabled][appearance='outline'], [disabled-focusabale][appearance="outline"]):hover) .control,
:host(is:([disabled][appearance='outline'], [disabled-focusabale][appearance="outline"]):hover:active) .control {
  background-color: ${fpsfaThemeButtonOutlineStatesDisable};
  color: ${fpsfaThemeButtonOutlineTextDisable};
  border-color: ${fpsfaThemeButtonOutlineBorderDisable};
}

:host([appearance='ghost']) .control {
  background-color: ${fpsfaThemeButtonGhostStatesDefault};
  color: ${fpsfaThemeButtonGhostTextDefault};
  border-color: ${fpsfaThemeButtonGhostBorderDefault};
}

:host([appearance='ghost']:hover) .control {
  background-color: ${fpsfaThemeButtonGhostStatesHover};
  color: ${fpsfaThemeButtonGhostTextHover};
  border-color: ${fpsfaThemeButtonGhostBorderHover};
}

:host([appearance='ghost']:hover:active) .control {
  background-color: ${fpsfaThemeButtonGhostStatesPressed};
  color: ${fpsfaThemeButtonGhostTextPressed};
  border-color: ${fpsfaThemeButtonGhostBorderPressed};
}

:host(is:([disabled][appearance='ghost'], [disabled-focusabale][appearance="ghost"])) .control,
:host(is:([disabled][appearance='ghost'], [disabled-focusabale][appearance="ghost"]):hover) .control,
:host(is:([disabled][appearance='ghost'], [disabled-focusabale][appearance="ghost"]):hover:active) .control {
  background-color: ${fpsfaThemeButtonGhostStatesDisable};
  border-color: ${fpsfaThemeButtonGhostBorderDisable};
}

:host([appearance='ghost']:hover) ::slotted(svg) {
  fill: ${fpsfaThemeButtonGhostTextHover};
}

:host([appearance='ghost']:hover:active) ::slotted(svg) {
  fill: ${fpsfaThemeButtonGhostTextPressed};
}

:host([appearance='text']) .control {
  background-color: ${fpsfaThemeButtonTextStatesDefault};
  color: ${fpsfaThemeButtonTextTextDefault};
  border-color: ${fpsfaThemeButtonTextBorderDefault};
}

:host([appearance='text']:hover) .control {
  background-color: ${fpsfaThemeButtonTextStatesHover};
  color: ${fpsfaThemeButtonTextTextHover};
  border-color: ${fpsfaThemeButtonTextBorderHover};
}

:host([appearance='text']:hover:active) .control {
  background-color: ${fpsfaThemeButtonTextStatesPressed};
  color: ${fpsfaThemeButtonTextTextPressed};
  border-color: ${fpsfaThemeButtonTextBorderPressed};
}

:host(is:([disabled][appearance='text'], [disabled-focusabale][appearance="text"])) .control,
:host(is:([disabled][appearance='text'], [disabled-focusabale][appearance="text"]):hover) .control,
:host(is:([disabled][appearance='text'], [disabled-focusabale][appearance="text"]):hover:active) .control {
  background-color: ${fpsfaThemeButtonTextStatesDisable};
  border-color: ${fpsfaThemeButtonTextBorderDisable};
}

:host([appearance='text']:hover) ::slotted(svg) {
  fill: ${fpsfaThemeButtonTextTextHover};
}

:host([appearance='text']:hover:active) ::slotted(svg) {
  fill: ${fpsfaThemeButtonTextTextPressed};
}

`;

// :host([shape='circular']) .control,
// :host([shape='circular']) .control:focus-visible {
//   border-radius: ${borderRadiusCircular};
// }

// :host([shape='square']) .control,
// :host([shape='square']) .control:focus-visible {
//   border-radius: ${borderRadiusNone};
// }

