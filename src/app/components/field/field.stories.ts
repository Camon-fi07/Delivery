import type { Meta, StoryFn } from '@storybook/angular';
import { FieldComponent } from './field.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';

export default {
  title: 'Components/Field',
  component: FieldComponent,
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
      ></field>`,
});

export const Default = Template.bind({});

Default.args = {
  // formGroup: formGroup,
  label: 'Название',
  name: 'test',
  tag: 'input',
} as Partial<FieldComponent>;
