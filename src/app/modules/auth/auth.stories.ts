import { moduleMetadata, type Meta, type StoryFn } from '@storybook/angular';
import { AuthModule } from './auth.module';
import { AuthComponent } from './auth.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FieldComponent } from 'components/field/field.component';
import { TextComponent } from 'shared/UI/text/text.component';
import { ButtonComponent } from 'shared/UI/button/button.component';

export default {
  title: 'Modules/Auth',
  component: AuthModule,
  decorators: [
    moduleMetadata({
      declarations: [AuthComponent],
      imports: [CommonModule, ReactiveFormsModule, FieldComponent, TextComponent, ButtonComponent],
    }),
  ],
} as Meta;

const Template: StoryFn<AuthModule> = (args: AuthModule) => ({
  props: args,
  template: `
  <auth></auth>`,
});

export const Default = Template.bind({});

// Default.args = {} as Partial<AuthModule>;
