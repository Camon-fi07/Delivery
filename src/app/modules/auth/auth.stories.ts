import { moduleMetadata, type Meta, type StoryFn } from '@storybook/angular';
import { AuthModule } from './auth.module';
import { UserService } from 'core/services/user.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

export default {
  title: 'Modules/Auth',
  component: AuthModule,
  decorators: [
    moduleMetadata({
      imports: [AuthModule, HttpClientModule],
      providers: [UserService, HttpClient],
    }),
  ],
} as Meta;

const Template: StoryFn<AuthModule> = (args: AuthModule) => ({
  props: args,
  template: `
  <auth></auth>`,
});

export const Default = Template.bind({});
