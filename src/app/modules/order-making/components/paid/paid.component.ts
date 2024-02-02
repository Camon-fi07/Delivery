import { OrderInfoService } from 'modules/order-making/services/order-info.service';
import { Component } from '@angular/core';
import { TextType } from 'shared/UI/text/text.types';
import { Location } from '@angular/common';
import { ButtonStyles } from 'shared/UI/button/button.types';
import { Payer } from 'shared/types/User';

@Component({
  selector: 'paid',
  templateUrl: './paid.component.html',
  styleUrl: './paid.component.scss',
})
export class PaidComponent {
  values = [
    { name: 'Получатель', type: Payer.RECEIVER },
    { name: 'Отправитель', type: Payer.SENDER },
  ];
  defaultIndex = 0;
  TextType = TextType;
  ButtonType = ButtonStyles;

  constructor(
    private location: Location,
    private orderInfoService: OrderInfoService,
  ) {
    this.defaultIndex = this.values.findIndex((value) => value.type === orderInfoService.payer);
  }

  handleBack() {
    this.location.back();
  }

  translateVariants() {
    return this.values.map((value) => value.name);
  }

  handleChose(index: number) {
    this.orderInfoService.payer = this.values[index].type;
    console.log(this.orderInfoService.payer);
  }
}
