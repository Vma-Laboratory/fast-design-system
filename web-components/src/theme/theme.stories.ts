import * as tokens from "../../../tokens/src";
import { html } from "@microsoft/fast-element";
import { renderComponent } from "../helpers.storybook";
export default {
  title: "Theme/Tokens",
};

export const Tokens = renderComponent(html`
  <section class="display:flex;flex-direction:column">
    <h3>Theme Tokens</h3>
    <p>Debug story which uses theme tokens to style the elements below.</p>
    <h4>Color Palette</h4>
    <section
      style="display:grid;grid-template-columns: repeat(4, 1fr);gap:0.25rem;font-size:${tokens.fpsfaFontSizesBody};font-weight:${tokens.fpsfaFontWeightsRoboto5};background-color:${tokens.fpsfaThemePrimaryFixed}; padding:1px; font-family:${tokens.fpsfaFontFamiliesRoboto}"
    >
      <div>
        <div
          style="height:40px;padding:8px;background-color:${tokens.fpsfaThemePrimary};color:${tokens.fpsfaThemeOnPrimary}"
        >
          Primary
        </div>
        <div
          style="height:40px;padding:8px;background-color:${tokens.fpsfaThemeOnPrimary};color:${tokens.fpsfaThemePrimary}"
        >
          On Primary
        </div>
      </div>

      <div>
        <div
          style="height:40px;padding:8px;background-color:${tokens.fpsfaThemeSecondary};color:${tokens.fpsfaThemeOnSecondary}"
        >
          Secondary
        </div>
        <div
          style="height:40px;padding:8px;background-color:${tokens.fpsfaThemeOnSecondary};color:${tokens.fpsfaThemeSecondary}"
        >
          On Secondary
        </div>
      </div>

      <div>
        <div
          style="height:40px;padding:8px;background-color:${tokens.fpsfaThemeTertiary};color:${tokens.fpsfaThemeOnTertiary}"
        >
          Tertiary
        </div>
        <div
          style="height:40px;padding:8px;background-color:${tokens.fpsfaThemeOnTertiary};color:${tokens.fpsfaThemeTertiary}"
        >
          On Tertiary
        </div>
      </div>

      <div>
        <div
          style="height:40px;padding:8px;background-color:${tokens.fpsfaThemeError};color:${tokens.fpsfaThemeOnError}"
        >
          Error
        </div>
        <div
          style="height:40px;padding:8px;background-color:${tokens.fpsfaThemeOnError};color:${tokens.fpsfaThemeError}"
        >
          On Error
        </div>
      </div>

      <div>
        <div
          style="height:40px;padding:8px;background-color:${tokens.fpsfaThemePrimaryContainer};color:${tokens.fpsfaThemeOnPrimaryContainer}"
        >
          Primary Container
        </div>
        <div
          style="height:40px;padding:8px;background-color:${tokens.fpsfaThemeOnPrimaryContainer};color:${tokens.fpsfaThemePrimaryContainer}"
        >
          On Primary Container
        </div>
      </div>

      <div>
        <div
          style="height:40px;padding:8px;background-color:${tokens.fpsfaThemeSecondaryContainer};color:${tokens.fpsfaThemeOnSecondaryContainer}"
        >
          Secondary Container
        </div>
        <div
          style="height:40px;padding:8px;background-color:${tokens.fpsfaThemeOnSecondaryContainer};color:${tokens.fpsfaThemeSecondaryContainer}"
        >
          On Secondary Container
        </div>
      </div>

      
      <div>
        <div
          style="height:40px;padding:8px;background-color:${tokens.fpsfaThemeTertiaryContainer};color:${tokens.fpsfaThemeOnTertiaryContainer}"
        >
          Tertiary Container
        </div>
        <div
          style="height:40px;padding:8px;background-color:${tokens.fpsfaThemeOnTertiaryContainer};color:${tokens.fpsfaThemeTertiaryContainer}"
        >
          On Tertiary Container
        </div>
      </div>

      <div>
        <div
          style="height:40px;padding:8px;background-color:${tokens.fpsfaThemeErrorContainer};color:${tokens.fpsfaThemeOnErrorContainer}"
        >
          Error Container
        </div>
        <div
          style="height:40px;padding:8px;background-color:${tokens.fpsfaThemeOnErrorContainer};color:${tokens.fpsfaThemeErrorContainer}"
        >
          On Error Container
        </div>
      </div>

      <div style="display:flex;flex-wrap:wrap;">
        <div
          style="flex:1;height:40px;padding:8px;background-color:${tokens.fpsfaThemePrimaryFixed};color:${tokens.fpsfaThemeOnPrimaryFixed}"
        >
          Primary Fixed
        </div>
        <div
          style="flex:1;height:40px;padding:8px;background-color:${tokens.fpsfaThemePrimaryFixedDim};color:${tokens.fpsfaThemeOnPrimaryFixed}"
        >
          Primary Fixed Dim
        </div>
        <div
          style="width:100%;height:40px;padding:8px;background-color:${tokens.fpsfaThemeOnPrimaryFixed};color:${tokens.fpsfaThemePrimaryFixed}"
        >
          On Primary Fixed
        </div>
        <div
          style="width:100%;height:40px;padding:8px;background-color:${tokens.fpsfaThemeOnPrimaryFixedVariant};color:${tokens.fpsfaThemePrimaryFixed}"
        >
          On Primary Fixed Variant
        </div>
      </div>

      <div style="display:flex;flex-wrap:wrap;">
        <div
          style="flex:1;height:40px;padding:8px;background-color:${tokens.fpsfaThemeSecondaryFixed};color:${tokens.fpsfaThemeOnSecondaryFixed}"
        >
          Secondary Fixed
        </div>
        <div
          style="flex:1;height:40px;padding:8px;background-color:${tokens.fpsfaThemeSecondaryFixedDim};color:${tokens.fpsfaThemeOnSecondaryFixed}"
        >
          Secondary Fixed Dim
        </div>
        <div
          style="width:100%;height:40px;padding:8px;background-color:${tokens.fpsfaThemeOnSecondaryFixed};color:${tokens.fpsfaThemeSecondaryFixed}"
        >
          On Secondary Fixed
        </div>
        <div
          style="width:100%;height:40px;padding:8px;background-color:${tokens.fpsfaThemeOnSecondaryFixedVariant};color:${tokens.fpsfaThemeSecondaryFixed}"
        >
          On Secondary Fixed Variant
        </div>
      </div>

      <div style="display:flex;flex-wrap:wrap;">
        <div
          style="flex:1;height:40px;padding:8px;background-color:${tokens.fpsfaThemeTertiaryFixed};color:${tokens.fpsfaThemeOnTertiaryFixed}"
        >
          Tertiary Fixed
        </div>
        <div
          style="flex:1;height:40px;padding:8px;background-color:${tokens.fpsfaThemeTertiaryFixedDim};color:${tokens.fpsfaThemeOnTertiaryFixed}"
        >
          Tertiary Fixed Dim
        </div>
        <div
          style="width:100%;height:40px;padding:8px;background-color:${tokens.fpsfaThemeOnTertiaryFixed};color:${tokens.fpsfaThemeTertiaryFixed}"
        >
          On Tertiary Fixed
        </div>
        <div
          style="width:100%;height:40px;padding:8px;background-color:${tokens.fpsfaThemeOnTertiaryFixedVariant};color:${tokens.fpsfaThemeTertiaryFixed}"
        >
          On Tertiary Fixed Variant
        </div>
      </div>

    </section>
  </section>
`);
