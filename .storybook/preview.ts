import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { moduleMetadata, type Preview } from '@storybook/angular';
import { CalculationInfo } from 'core/services/calculationInfo.service';
import { UserService } from 'core/services/user.service';
@NgModule({
  imports: [HttpClientModule, UserService],
  providers: [HttpClient, UserService, CalculationInfo],
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
        providers: [StorybookModule],
      },
      template: `<Story/>`,
    }),
  ],
};
