import type { Preview } from "@storybook/web-components";
import { switchTheme } from '../public/theme-switch.js';


function changeTheme(e) {
  switchTheme(e.target.value);
}

document.getElementById('theme-switch')?.addEventListener('change', changeTheme, false);
switchTheme('web-light');


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
