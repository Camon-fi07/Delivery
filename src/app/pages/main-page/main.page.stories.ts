import { moduleMetadata, type Meta, type StoryFn } from '@storybook/angular';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MainPageComponent } from './main-page.component';
import { CalculationInfo } from 'core/services/calculationInfo.service';

export default {
  title: 'Pages/MainPage',
  component: MainPageComponent,
  decorators: moduleMetadata({
    imports: [HttpClientModule],
    providers: [CalculationInfo, HttpClient],
  }),
} as Meta;

const Template: StoryFn<MainPageComponent> = (args: MainPageComponent) => ({
  props: args,
  template: `
  <main-page></main-page>`,
});

export const Default = Template.bind({});
