
import * as tokens from '../../../tokens/src';

export default {
  title: 'Theme/Tokens',
};

export const Tokens = () => `
<div>
  <h3>Theme Tokens</h3>
  <p>Debug story which uses theme tokens to style the element below.</p>
  <div style="
    font-family: ${tokens.fpsfaFontFamiliesBody.createCSS()};
    font-size: ${tokens.fpsfaFontSize3.createCSS()};
    background: var(${tokens.fpsfaThemePrimary.cssCustomProperty});
    color: ${tokens.fpsfaThemeOnPrimary.createCSS()};
    box-shadow: ${tokens.fpsfaShadowElevation1E1FocusedState.createCSS()};
  ">fpsfaThemeOnPrimary on fpsfaThemePrimary with fpsfaShadowElevation1E1FocusedState</div>
</div>
`;
// border: ${tokens.strokeWidthThicker.createCSS()} solid ${tokens.colorNeutralStroke1.createCSS()};
// padding: ${tokens.spacingVerticalS.createCSS()} ${tokens.spacingHorizontalM.createCSS()};
// box-shadow: ${tokens.shadow28.createCSS()};