import { moduleMetadata, type Meta, type StoryFn } from '@storybook/angular';
import { OrderMakingModule } from './order-making.module';
import { CalculationInfo } from 'core/services/calculationInfo.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { OrderMakingComponent } from './order-making.component';
import { Inject } from '@angular/core';
import { DeliveryType } from 'shared/types/Calc';

export default {
  title: 'Modules/OrderMaking',
  component: OrderMakingModule,
  decorators: [
    moduleMetadata({
      imports: [OrderMakingModule, HttpClientModule],
      providers: [CalculationInfo, HttpClient],
    }),
  ],
} as Meta;

const test = Inject(CalculationInfo);

test.options = [
  { days: 1, id: 'awf', name: 'fawf', price: 23, type: DeliveryType.DEFAULT },
  { days: 1, id: 'awf', name: 'fawf', price: 23, type: DeliveryType.EXPRESS },
];

const Template: StoryFn<OrderMakingModule> = (args: OrderMakingModule) => ({
  props: args,
  template: `
  <order-making></order-making>`,
});

export const Default = Template.bind({});

Default.args = {} as Partial<OrderMakingComponent>;
