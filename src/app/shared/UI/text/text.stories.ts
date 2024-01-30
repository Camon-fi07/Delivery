import type { Meta, StoryFn } from '@storybook/angular';
import { TextComponent } from './text.component';
import { TextTags, TextType } from './text.types';

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
    textTag: {
      options: Object.values(TextTags),
      mapping: Object.values(TextTags),
      control: {
        type: 'select',
        labels: Object.keys(TextTags),
      },
    },
  },
} as Meta;

const Template: StoryFn<TextComponent> = (args: TextComponent) => ({
  props: args,
  template: `
  <text [textType]="textType" [classNames]="classNames" [textTag]="textTag">
  Рассчитать доставку
  </text>`,
});

export const Default = Template.bind({});

Default.args = {
  textType: TextType.TITLE,
  classNames: 'test',
  textTag: TextTags.H3,
} as Partial<TextComponent>;
