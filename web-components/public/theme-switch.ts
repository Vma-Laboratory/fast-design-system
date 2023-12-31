import {
  setTheme,
  InitTheme,
  webDarkTheme,
  webLightTheme,
} from "../../tokens/src";

const themes = {
  "web-light": webLightTheme,
  "web-dark": webDarkTheme,
};

export function switchTheme(themeName: keyof typeof themes) {
  setTheme(themes[themeName]);
}

export function InitializeTheme() {
  InitTheme();
}
