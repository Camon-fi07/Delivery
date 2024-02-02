import { CalculationInfo } from 'core/services/calculationInfo.service';
import { Component } from '@angular/core';
import { DeliveryOption, DeliveryType } from 'shared/types/Calc';
import { TextType } from 'shared/UI/text/text.types';

@Component({
  selector: 'options',
  templateUrl: './options.component.html',
  styleUrl: './options.component.scss',
})
export class OptionsComponent {
  options!: DeliveryOption[];
  smallTextType = TextType.SMALL_TEXT;
  smallTitleType = TextType.SMALL_TITLE;

  constructor(private calculationInfo: CalculationInfo) {
    this.options = [
      { days: 1, id: 'awf', name: 'fawf', price: 23, type: DeliveryType.DEFAULT },
      { days: 1, id: 'awf', name: 'fawf', price: 23, type: DeliveryType.EXPRESS },
    ];
  }
}
