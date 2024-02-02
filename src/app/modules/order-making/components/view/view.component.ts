import { Component } from '@angular/core';
import { OrderInfoService } from 'modules/order-making/services/order-info.service';
import { TextType } from 'shared/UI/text/text.types';
import { Address } from 'shared/types/Point';
import { UserDeliveryInfo } from 'shared/types/User';

@Component({
  selector: 'view',
  templateUrl: './view.component.html',
  styleUrl: './view.component.scss',
})
export class ViewComponent {
  TextType = TextType;
  sender!: UserDeliveryInfo;
  receiver!: UserDeliveryInfo;
  senderAddress!: Address;
  receiverAddress!: Address;

  constructor(private orderInfoService: OrderInfoService) {
    this.sender = orderInfoService.sender!;
    this.receiver = orderInfoService.receiver!;
    this.senderAddress = orderInfoService.senderAddress!;
    this.receiverAddress = orderInfoService.receiverAddress!;
  }
}
