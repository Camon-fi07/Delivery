import type { Meta, StoryFn } from '@storybook/angular';
import { TabsComponent } from './tabs.component';

export default {
  title: 'UI/Tabs',
  component: TabsComponent,
} as Meta;

const Template: StoryFn<TabsComponent> = (args: TabsComponent) => ({
  props: args,
  template: `
  <tabs [variants]="variants" [chosenIndex]="chosenIndex">
  нажми
  </tabs>`,
});

export const Default = Template.bind({});

Default.args = {
  variants: ['first', 'second'],
  chosenIndex: 1,
} as Partial<TabsComponent>;
