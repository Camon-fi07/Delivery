import { moduleMetadata, type Meta, type StoryFn } from '@storybook/angular';
import { AuthPageComponent } from './auth-page.component';
import { UserService } from 'core/services/user.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

export default {
  title: 'Pages/AuthPage',
  component: AuthPageComponent,
  decorators: moduleMetadata({
    imports: [HttpClientModule],
    providers: [UserService, HttpClient],
  }),
} as Meta;

const Template: StoryFn<AuthPageComponent> = (args: AuthPageComponent) => ({
  props: args,
  template: `
  <auth-page></auth-page>`,
});

export const Default = Template.bind({});
