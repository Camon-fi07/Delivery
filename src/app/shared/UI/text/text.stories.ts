import type { Meta, StoryFn } from '@storybook/angular';
import { TextComponent } from './text.component';
import { TextType } from './text.types';

export default {
  title: 'UI/Text',
  component: TextComponent,
  argTypes: {
    textType: {
      options: Object.values(TextType),
      mapping: Object.values(TextType),
      control: {
        type: 'select',
        labels: Object.keys(TextType),
      },
    },
  },
} as Meta;

const Template: StoryFn<TextComponent> = (args: TextComponent) => ({
  props: args,
  template: `
  <text [textType]="textType">
  Рассчитать доставку
  </text>`,
});

export const Default = Template.bind({});

Default.args = {
  textType: TextType.TITLE,
} as Partial<TextComponent>;
