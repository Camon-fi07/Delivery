import type { Meta, StoryFn } from '@storybook/angular';
import { ModalComponent } from './modal.component';

export default {
  title: 'UI/Tabs',
  component: ModalComponent,
} as Meta;

const Template: StoryFn<ModalComponent> = (args: ModalComponent) => ({
  props: args,
  template: `
  <modal>
  Контент
  </modal>`,
});

export const Default = Template.bind({});

Default.args = {
  isOpen: true,
} as Partial<ModalComponent>;
