import type { Meta, StoryFn } from '@storybook/angular';
import { CancelModalComponent } from './cancel-modal.component';

export default {
  title: 'Components/CancelModal',
  component: CancelModalComponent,
} as Meta;

const Template: StoryFn<CancelModalComponent> = (args: CancelModalComponent) => ({
  props: args,
  template: `
  <cancel-modal isOpen="isOpen"></cancel-modal>`,
});

export const Default = Template.bind({});

Default.args = {
  isOpen: true,
} as Partial<CancelModalComponent>;
