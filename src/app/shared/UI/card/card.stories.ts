import type { Meta, StoryFn } from '@storybook/angular';
import { CardComponent } from './card.component';

export default {
  title: 'UI/Card',
  component: CardComponent,
} as Meta;

const Template: StoryFn<CardComponent> = (args: CardComponent) => ({
  props: args,
  template: `
  <card [values]="values"></card>`,
});

export const Default = Template.bind({});

Default.args = {
  values: [
    { name: 'ФИО', value: 'Иванов Иван Иванович' },
    { name: 'Телефон', value: '+7 913 123 45 67' },
  ],
} as Partial<CardComponent>;
