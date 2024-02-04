import { ButtonStyles } from 'shared/UI/button/button.types';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OrderInfoService } from 'modules/order-making/services/order-info.service';
import { translateUserInfo, translateAddress } from 'modules/order-making/utils/mappers';
import { CardData } from 'shared/UI/card/card.types';
import { TextType } from 'shared/UI/text/text.types';
import { DeliveryOption } from 'shared/types/Calc';
import { Location } from '@angular/common';

@Component({
  selector: 'view',
  templateUrl: './view.component.html',
  styleUrl: './view.component.scss',
})
export class ViewComponent {
  TextType = TextType;
  ButtonType = ButtonStyles;
  sender!: CardData[];
  receiver!: CardData[];
  senderAddress!: CardData[];
  receiverAddress!: CardData[];
  option!: DeliveryOption;
  isSuccess = false;
  isCancel = false;
  error?: string;

  constructor(
    private orderInfoService: OrderInfoService,
    private router: Router,
    private location: Location,
  ) {
    this.sender = translateUserInfo(orderInfoService.sender!);
    this.receiver = translateUserInfo(orderInfoService.receiver!);
    this.senderAddress = translateAddress(orderInfoService.senderAddress!);
    this.receiverAddress = translateAddress(orderInfoService.receiverAddress!);
    this.option = orderInfoService.option!;
  }

  handleCancel() {
    this.router.navigate(['']);
  }

  toggleIsCancel() {
    this.isCancel = !this.isCancel;
  }

  handleCardEditClick(url: string) {
    this.router.navigate([`order/${url}`]);
  }

  handleBack() {
    this.location.back();
  }

  handleSubmit() {
    this.orderInfoService.createOrder().subscribe({
      next: () => {
        this.isSuccess = true;
      },
      error: () => {
        this.error = `Произошла ошибка, попробуйте позже`;
      },
    });
  }
}
