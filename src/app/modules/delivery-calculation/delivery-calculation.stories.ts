import { moduleMetadata, type Meta, type StoryFn } from '@storybook/angular';
import { DeliveryCalculationModule } from './delivery-calculation.module';

export default {
  title: 'Modules/DeliveryCalculation',
  component: DeliveryCalculationModule,
  decorators: [
    moduleMetadata({
      imports: [DeliveryCalculationModule],
    }),
  ],
} as Meta;

const Template: StoryFn<DeliveryCalculationModule> = (args: DeliveryCalculationModule) => ({
  props: args,
  template: `
  <delivery-calculation></delivery-calculation>`,
});

export const Default = Template.bind({});
