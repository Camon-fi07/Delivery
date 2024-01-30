import type { Meta, StoryFn } from '@storybook/angular';
import { ButtonComponent } from './button.component';
import { ButtonStyles } from './button.types';

export default {
  title: 'UI/Button',
  component: ButtonComponent,
  argTypes: {
    buttonStyle: {
      options: Object.values(ButtonStyles),
      mapping: Object.values(ButtonStyles),
      control: {
        type: 'select',
        labels: Object.keys(ButtonStyles),
      },
    },
  },
} as Meta;

const Template: StoryFn<ButtonComponent> = (args: ButtonComponent) => ({
  props: args,
  template: `
  <UI-button [buttonStyle]="buttonStyle" [classNames]="classNames">
  нажми
  </UI-button>`,
});

export const Default = Template.bind({});

Default.args = {
  buttonStyle: ButtonStyles.BRAND,
  classNames: '',
  type: 'button',
} as Partial<ButtonComponent>;
