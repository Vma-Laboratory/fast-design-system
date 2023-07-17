import type { Preview } from "@storybook/web-components";
import { switchTheme, InitializeTheme } from "../public/theme-switch.js";
import { DesignToken } from "@microsoft/fast-foundation";

DesignToken.registerDefaultStyleTarget();
InitializeTheme();

function changeTheme(e: Event) {
  console.log({ e });
  switchTheme(
    (e.target as HTMLSelectElement)?.value as "web-light" | "web-dark"
  );
}

document
  .getElementById("theme-switch")
  ?.addEventListener("change", changeTheme, false);
switchTheme("web-light");

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
