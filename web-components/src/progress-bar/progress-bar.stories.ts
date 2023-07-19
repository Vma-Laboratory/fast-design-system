import { html } from '@microsoft/fast-element';
import type { Args, Meta } from '@storybook/web-components';
import { renderComponent } from '../helpers.storybook';
import type { ProgressBar as FpsfaProgressBar } from './progress-bar';
import { ProgressBarShape, ProgressBarThickness, ProgressBarValidationState } from './progress-bar.options';
import './define';

type ProgressStoryArgs = Args & FpsfaProgressBar;
type ProgressStoryMeta = Meta<ProgressStoryArgs>;

const storyTemplate = html<ProgressStoryArgs>`
  <fpsfa-progress-bar
    thickness=${x => x.thickness}
    shape=${x => x.shape}
    max=${x => x.max}
    aria-valuemax=${x => x.max}
    aria-valuenow=${x => x.value}
    value=${x => x.value}
    validation-state=${x => x.validationState}
  ></fpsfa-progress-bar>
`;

export default {
  title: 'Components/ProgressBar',
  tags: ["autodocs"],
  args: {
    max: 100,
    value: 15,
    thickness: 'medium',
    shape: 'rounded',
    validationState: null,
  },
  argTypes: {
    max: {
      control: 'number',
      defaultValue: 100,
    },
    value: {
      control: 'number',
      defaultValue: 15,
    },
    thickness: {
      control: {
        type: 'select',
      },
      options: Object.values(ProgressBarThickness),
      defaultValue: 'medium',
    },
    shape: {
      options: Object.values(ProgressBarShape),
      control: {
        type: 'select',
      },
      defaultValue: 'rounded',
    },
    validationState: {
      options: Object.values(ProgressBarValidationState),
      control: {
        type: 'select',
      },
      defaultValue: null,
    },
  },
} as ProgressStoryMeta;

export const Progress = renderComponent(storyTemplate).bind({});

//
// Attribute stories
//

export const Max = renderComponent(html<ProgressStoryArgs>`
  <div>
    <p>
      <code>3 of 10</code>
      <fpsfa-progress-bar value="3" aria-valuenow="3" max="10" aria-valuemax="10"></fpsfa-progress-bar>
    </p>
    <p>
      <code>3 o 5</code>
      <fpsfa-progress-bar value="3" aria-valuenow="3" max="5" aria-valuemax="5"></fpsfa-progress-bar>
    </p>
  </div>
`);

export const Value = renderComponent(html<ProgressStoryArgs>`
  <div>
    <code>0</code><fpsfa-progress-bar value="0" aria-valuenow="0"></fpsfa-progress-bar>
    <code>25</code>
    <fpsfa-progress-bar value="25" aria-valuenow="25"></fpsfa-progress-bar>
    <code>50</code>
    <fpsfa-progress-bar value="50" aria-valuenow="50"></fpsfa-progress-bar>
    <code>75</code>
    <fpsfa-progress-bar value="75" aria-valuenow="75"></fpsfa-progress-bar>
    <code>100</code>
    <fpsfa-progress-bar value="100" aria-valuenow="100"></fpsfa-progress-bar>
  </div>
`);

export const Thickness = renderComponent(html<ProgressStoryArgs>`
  <div>
    <p>
      <code>medium</code>
      <fpsfa-progress-bar thickness="medium"></fpsfa-progress-bar>
    </p>
    <p>
      <code>large</code>
      <fpsfa-progress-bar thickness="large"></fpsfa-progress-bar>
    </p>
  </div>
`);

export const Shape = renderComponent(html<ProgressStoryArgs>`
  <div>
    <p>
      <code>rounded</code>
      <fpsfa-progress-bar shape="rounded" thickness="large"></fpsfa-progress-bar>
    </p>
    <p>
      <code>square</code>
      <fpsfa-progress-bar shape="square" thickness="large"></fpsfa-progress-bar>
    </p>
  </div>
`);

export const ValidationState = renderComponent(html<ProgressStoryArgs>`
  <div>
    <p>
      <code>success</code>
      <fpsfa-progress-bar validation-state="success"></fpsfa-progress-bar>
    </p>
    <p>
      <code>warning</code>
      <fpsfa-progress-bar validation-state="warning"></fpsfa-progress-bar>
    </p>
    <p>
      <code>error</code>
      <fpsfa-progress-bar validation-state="error"></fpsfa-progress-bar>
    </p>
  </div>
`);
