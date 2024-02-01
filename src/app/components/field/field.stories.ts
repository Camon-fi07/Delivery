import type { Meta, StoryFn } from '@storybook/angular';
import { FieldComponent } from './field.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FieldTags } from './field.types';

export default {
  title: 'Components/Field',
  component: FieldComponent,
  argTypes: {
    tag: {
      options: Object.values(FieldTags),
      mapping: Object.values(FieldTags),
      control: {
        type: 'select',
        labels: Object.keys(FieldTags),
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
        [placeholder]="placeholder"
      ></field>`,
});

export const Default = Template.bind({});

Default.args = {
  label: 'Название',
  name: 'test',
  tag: FieldTags.INPUT,
  rows: 2,
  placeholder: 'placeholder',
} as Partial<FieldComponent>;
