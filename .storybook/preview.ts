import { HttpClient, HttpClientModule, provideHttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { moduleMetadata, type Preview } from '@storybook/angular';
import { UserService } from 'core/services/user.service';

@NgModule({
  imports: [HttpClientModule],
  providers: [HttpClient, UserService],
})
class StorybookModule {}

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/i,
    },
  },
};

export const preview: Preview = {
  decorators: [
    (Story) => ({
      moduleMetadata: {
        imports: [StorybookModule],
      },
      template: `<Story/>`,
    }),
    moduleMetadata({
      imports: [HttpClientModule, UserService],
      providers: [HttpClient, UserService],
    }),
  ],
};
