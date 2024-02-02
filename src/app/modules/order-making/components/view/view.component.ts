import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OrderInfoService } from 'modules/order-making/services/order-info.service';
import { translateUserInfo, translateAddress } from 'modules/order-making/utils/mappers';
import { CardData } from 'shared/UI/card/card.types';
import { TextType } from 'shared/UI/text/text.types';

@Component({
  selector: 'view',
  templateUrl: './view.component.html',
  styleUrl: './view.component.scss',
})
export class ViewComponent {
  TextType = TextType;
  sender!: CardData[];
  receiver!: CardData[];
  senderAddress!: CardData[];
  receiverAddress!: CardData[];

  constructor(
    private orderInfoService: OrderInfoService,
    private router: Router,
  ) {
    this.sender = translateUserInfo(orderInfoService.sender!);
    this.receiver = translateUserInfo(orderInfoService.receiver!);
    this.senderAddress = translateAddress(orderInfoService.senderAddress!);
    this.receiverAddress = translateAddress(orderInfoService.receiverAddress!);
  }

  handleCardChange(url: string) {
    this.router.navigate([`order/${url}`]);
  }
}
