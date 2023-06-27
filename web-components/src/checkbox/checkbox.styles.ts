import { css } from "@microsoft/fast-element";
import { display } from "@microsoft/fast-foundation";

export const styles = css`
  ${display("inline-flex")}
  :host {
    align-items: center;
    display: inline-flex;
    margin: calc(4 * 1px) 0;
    outline: none;
    user-select: none;
    vertical-align: middle;
  }

  .control {
    --size: 24px;
    position: relative;
    width: var(--size);
    height: var(--size);
    box-sizing: border-box;
    border-radius: 4px;
    border: 1px solid black;
    background: var(--neutral-fill-input-rest);
    outline: none;
    cursor: pointer;
  }

  .label {
    font-family: var(--body-font);
    color: var(--neutral-foreground-rest);
    padding-inline-start: 10px;
    margin-inline-end: 10px;
    cursor: pointer;
    font-size: var(--type-ramp-base-font-size);
    line-height: var(--type-ramp-base-line-height);
  }

  .label__hidden {
    display: none;
    visibility: hidden;
  }

  .checked-indicator {
    width: 100%;
    height: 100%;
    display: block;
    fill: var(--foreground-on-accent-rest);
    opacity: 0;
    pointer-events: none;
  }

  .indeterminate-indicator {
    border-radius: calc(var(--control-corner-radius) * 1px);
    background: var(--foreground-on-accent-rest);
    position: absolute;
    top: 50%;
    left: 50%;
    width: 50%;
    height: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
  }

  :host(:not([disabled])) .control:hover {
    background: var(--neutral-fill-input-hover);
    border-color: var(--neutral-stroke-hover);
  }

  :host(:not([disabled])) .control:active {
    background: var(--neutral-fill-input-active);
    border-color: var(--neutral-stroke-active);
  }

  :host(:focus-visible) .control {
    box-shadow: 0 0 0 2px var(--fill-color), 0 0 0 4px var(--focus-stroke-outer);
  }

  :host([aria-checked="true"]) .control {
    background: var(--accent-fill-rest);
    border: calc(var(--stroke-width) * 1px) solid var(--accent-fill-rest);
  }

  :host([aria-checked="true"]:not([disabled])) .control:hover {
    background: var(--accent-fill-hover);
    border: calc(var(--stroke-width) * 1px) solid var(--accent-fill-hover);
  }

  :host([aria-checked="true"]:not([disabled]))
    .control:hover
    .checked-indicator {
    fill: var(--foreground-on-accent-hover);
  }

  :host([aria-checked="true"]:not([disabled]))
    .control:hover
    .indeterminate-indicator {
    background: var(--foreground-on-accent-hover);
  }

  :host([aria-checked="true"]:not([disabled])) .control:active {
    background: var(--accent-fill-active);
    border: 1px solid var(--accent-fill-active);
  }

  :host([aria-checked="true"]:not([disabled]))
    .control:active
    .checked-indicator {
    fill: var(--foreground-on-accent-active);
  }

  :host([aria-checked="true"]:not([disabled]))
    .control:active
    .indeterminate-indicator {
    background: var(--foreground-on-accent-active);
  }

  :host([aria-checked="true"]:focus-visible:not([disabled])) .control {
    box-shadow: 0 0 0 2px var(--fill-color), 0 0 0 4px black;
  }

  :host([disabled]) .label,
  :host([readonly]) .label,
  :host([readonly]) .control,
  :host([disabled]) .control {
    cursor: not-allowed;
  }

  :host([aria-checked="true"]) .checked-indicator,
  :host([aria-checked="mixed"]) .indeterminate-indicator {
    opacity: 1;
  }

  :host([disabled]) {
    opacity: var(--disabled-opacity);
  }
`;
