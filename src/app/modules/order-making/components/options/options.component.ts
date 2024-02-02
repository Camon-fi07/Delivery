import { CalculationInfo } from 'core/services/calculationInfo.service';
import { Component } from '@angular/core';
import { DeliveryOption } from 'shared/types/Calc';
import { TextType } from 'shared/UI/text/text.types';
import { OrderInfoService } from 'modules/order-making/services/order-info.service';
import { Router } from '@angular/router';

@Component({
  selector: 'options',
  templateUrl: './options.component.html',
  styleUrl: './options.component.scss',
})
export class OptionsComponent {
  options!: DeliveryOption[];
  smallTextType = TextType.SMALL_TEXT;
  smallTitleType = TextType.SMALL_TITLE;

  constructor(
    private calculationInfo: CalculationInfo,
    private orderInfo: OrderInfoService,
    private router: Router,
  ) {
    this.options = calculationInfo.options;
  }

  handleChose(option: DeliveryOption) {
    this.orderInfo.option = option;
    this.router.navigate(['order/user/true']);
  }
}
