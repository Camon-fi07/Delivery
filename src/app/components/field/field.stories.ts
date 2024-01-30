import type { Meta, StoryFn } from '@storybook/angular';
import { FieldComponent } from './field.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';

export default {
  title: 'Components/Field',
  component: FieldComponent,
  argTypes: {
    tag: {
      options: ['input', 'textarea'],
      mapping: ['input', 'textarea'],
      control: {
        type: 'select',
        labels: ['input', 'textarea'],
      },
    },
  },
} as Meta;

const formGroup = new FormGroup({
  test: new FormControl('', Validators.required),
});

const Template: StoryFn<FieldComponent> = (args: FieldComponent) => ({
  props: { ...args, formGroup: formGroup },
  template: `
  <field
        [name]="name"
        [tag]="tag"
        [label]="label"
        [formGroup]="formGroup"
        [rows]="rows"
        [disabled]="disabled"
      ></field>`,
});

export const Default = Template.bind({});

Default.args = {
  label: 'Название',
  name: 'test',
  tag: 'input',
  rows: 2,
  disabled: true,
} as Partial<FieldComponent>;
