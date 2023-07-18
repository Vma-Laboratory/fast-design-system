import * as tokens from "../../../tokens/src";
import { html } from "@microsoft/fast-element";
import { renderComponent } from "../helpers.storybook";
import { Meta } from "@storybook/web-components";

export default {
  title: "Theme/Tokens",
  parameters: { options: { showPanel: false } },
} as Meta;

export const Tokens = renderComponent(html`
  <section class="display:flex;flex-direction:column;font-size:${tokens.fpsfaFontSizesBody};font-weight:${tokens.fpsfaFontWeightsRoboto5}; font-family:${tokens.fpsfaFontFamiliesRoboto}">
    <h3>Theme Tokens</h3>
    <p>Debug story which uses theme tokens to style the elements below.</p>
    <h4>Color Palette</h4>
    <section
      style="display:grid;grid-template-columns: repeat(4, 1fr);gap:0.25rem;background-color:${tokens.fpsfaThemePrimaryFixed}; padding:1px;margin-bottom:1rem;"
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
      <div><!-- EMPTY --></div>

      <div
        style="height:70px;padding:8px;background-color:${tokens.fpsfaThemeSurfaceDim};color:${tokens.fpsfaThemeOnSurface}"
      >
        Surface Dim
      </div>
      <div
        style="height:70px;padding:8px;background-color:${tokens.fpsfaThemeSurface};color:${tokens.fpsfaThemeOnSurface}"
      >
        Surface
      </div>
      <div
        style="height:70px;padding:8px;background-color:${tokens.fpsfaThemeSurfaceBright};color:${tokens.fpsfaThemeOnSurface}"
      >
        Surface Bright
      </div>
      <div>
        <div
          style="height:27px;padding:8px;background-color:${tokens.fpsfaThemeInverseSurface};color:${tokens.fpsfaThemeInverseOnSurface}"
        >
          Inverse Surface
        </div>
        <div
          style="height:27px;padding:8px;background-color:${tokens.fpsfaThemeInverseOnSurface};color:${tokens.fpsfaThemeInverseSurface}"
        >
          Inverse On Surface
        </div>
      </div>
      <div style="grid-column-start: 1;grid-column-end: 4;display:flex;" >
        <div
          style="height:60px;flex:1;padding:8px;background-color:${tokens.fpsfaThemeSurfaceContainerLowest};color:${tokens.fpsfaThemeOnSurface}"
        >
          Surf. Container Lowest
        </div>
        <div
          style="height:60px;flex:1;padding:8px;background-color:${tokens.fpsfaThemeSurfaceContainerLow};color:${tokens.fpsfaThemeOnSurface}"
        >
          Surf. Container Low
        </div>
        <div
          style="height:60px;flex:1;padding:8px;background-color:${tokens.fpsfaThemeSurfaceContainer};color:${tokens.fpsfaThemeOnSurface}"
        >
          Surf. Container
        </div>
        <div
          style="height:60px;flex:1;padding:8px;background-color:${tokens.fpsfaThemeSurfaceContainerHigh};color:${tokens.fpsfaThemeOnSurface}"
        >
          Surf. Container High
        </div>
        <div
          style="height:60px;flex:1;padding:8px;background-color:${tokens.fpsfaThemeSurfaceContainerHighest};color:${tokens.fpsfaThemeOnSurface}"
        >
          Surf. Container Highest
        </div>
      </div>
      <div
        style="height:30px;padding:8px;background-color:${tokens.fpsfaThemeInversePrimary};color:${tokens.fpsfaThemeInverseSurface}"
      >
        Inverse Primary
      </div>

      <div style="grid-column-start: 1;grid-column-end: 4;display:flex;" >
        <div
            style="height:30px;flex:1;padding:8px;background-color:${tokens.fpsfaThemeOnSurface};color:${tokens.fpsfaThemeSurface}"
          >
            On Surface
        </div>
        <div
            style="height:30px;flex:1;padding:8px;background-color:${tokens.fpsfaThemeOnSurfaceVariant};color:${tokens.fpsfaThemeSurface}"
          >
            On Surface Var.
        </div>
        <div
            style="height:30px;flex:1;padding:8px;background-color:${tokens.fpsfaThemeOutline};color:${tokens.fpsfaThemeSurface}"
          >
            Outline
        </div>
        <div
            style="height:30px;flex:1;padding:8px;background-color:${tokens.fpsfaThemeOutlineVariant};color:${tokens.fpsfaThemeOnSurface}"
          >
            Outline Variant
        </div>
      </div>
      <div style="display:flex;gap:1rem;">
        <div  style="height:30px;flex:1;padding:8px;background-color:${tokens.fpsfaThemeScrim};color:${tokens.fpsfaThemeInverseOnSurface}">
          Scrim
        </div>
        <div  style="height:30px;flex:1;padding:8px;background-color:${tokens.fpsfaThemeShadow};color:${tokens.fpsfaThemeInverseOnSurface}">
          Shadow
        </div>
      </div>

    </section>
    <section
      style="display:grid;grid-template-columns: repeat(4, 1fr);gap:0.25rem;"
    >
      <div>
        <div
          style="height:40px;padding:8px;background-color:${tokens.fpsfaThemeSuccess};color:${tokens.fpsfaThemeOnSuccess}"
        >
          Success
        </div>
        <div
          style="height:40px;padding:8px;background-color:${tokens.fpsfaThemeOnSuccess};color:${tokens.fpsfaThemeSuccess}"
        >
          On Success
        </div>
      </div>
      <div>
        <div
          style="height:40px;padding:8px;background-color:${tokens.fpsfaThemeWarning};color:${tokens.fpsfaThemeOnWarning}"
        >
          Warning
        </div>
        <div
          style="height:40px;padding:8px;background-color:${tokens.fpsfaThemeOnWarning};color:${tokens.fpsfaThemeWarning}"
        >
          On Warning
        </div>
      </div>
      <div>
        <div
          style="height:40px;padding:8px;background-color:${tokens.fpsfaThemeInformation};color:${tokens.fpsfaThemeOnInformations}"
        >
          Information
        </div>
        <div
          style="height:40px;padding:8px;background-color:${tokens.fpsfaThemeOnInformations};color:${tokens.fpsfaThemeInformation}"
        >
          On Information
        </div>
      </div>
      <div><!-- EMPTY --></div>

      <div>
        <div
          style="height:40px;padding:8px;background-color:${tokens.fpsfaThemeSuccessContainer};color:${tokens.fpsfaThemeOnSuccessContainer}"
        >
          Success Container
        </div>
        <div
          style="height:40px;padding:8px;background-color:${tokens.fpsfaThemeOnSuccessContainer};color:${tokens.fpsfaThemeSuccessContainer}"
        >
          On Success Container
        </div>
      </div>
      <div>
        <div
          style="height:40px;padding:8px;background-color:${tokens.fpsfaThemeWarningContainer};color:${tokens.fpsfaThemeOnWarningContainer}"
        >
          Warning Container
        </div>
        <div
          style="height:40px;padding:8px;background-color:${tokens.fpsfaThemeOnWarningContainer};color:${tokens.fpsfaThemeWarningContainer}"
        >
          On Warning Container
        </div>
      </div>
      <div>
        <div
          style="height:40px;padding:8px;background-color:${tokens.fpsfaThemeInformationsContainer};color:${tokens.fpsfaThemeOnInformationsContainer}"
        >
          Information Container
        </div>
        <div
          style="height:40px;padding:8px;background-color:${tokens.fpsfaThemeOnInformationsContainer};color:${tokens.fpsfaThemeInformationsContainer}"
        >
          On Information Container
        </div>
      </div>
      <div><!-- EMPTY --></div>

    </section>
  </section>
`);
