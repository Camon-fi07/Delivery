import type { Meta, StoryFn } from '@storybook/angular';
import { ControlsComponent } from './controls.component';

export default {
  title: 'UI/Controls',
  component: ControlsComponent,
} as Meta;

const Template: StoryFn<ControlsComponent> = (args: ControlsComponent) => ({
  props: args,
  template: `
  <controls [values]="values" [withIcon]="withIcon" [isMultiSelect]="isMultiSelect"></controls>`,
});

export const Default = Template.bind({});

Default.args = {
  values: ['first', 'second'],
  withIcon: true,
  isMultiSelect: false,
} as Partial<ControlsComponent>;
