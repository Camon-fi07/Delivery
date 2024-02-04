import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HistoryService } from 'modules/history/services/history.service';
import { DeliveryOrder } from 'modules/history/types/Order';
import { translateAddress, translateUserInfo } from 'modules/order-making/utils/mappers';
import { ButtonStyles } from 'shared/UI/button/button.types';
import { CardData } from 'shared/UI/card/card.types';
import { TextType } from 'shared/UI/text/text.types';

@Component({
  selector: 'order-details',
  templateUrl: './order-details.component.html',
  styleUrl: './order-details.component.scss',
})
export class OrderDetailsComponent {
  id!: string;
  orderDetail!: DeliveryOrder;
  ButtonType = ButtonStyles;
  TextType = TextType;
  sender!: CardData[];
  receiver!: CardData[];
  senderAddress!: CardData[];
  receiverAddress!: CardData[];
  isCancel = false;

  toggleIsCancel() {
    this.isCancel = !this.isCancel;
  }

  constructor(
    private route: ActivatedRoute,
    private historyService: HistoryService,
    private router: Router,
  ) {
    route.params.subscribe({
      next: (params) => {
        this.id = params['id'];
      },
    });

    historyService.getOrderDetails(this.id).subscribe({
      next: (res) => {
        this.orderDetail = res.order;
        this.sender = translateUserInfo(this.orderDetail.sender);
        this.receiver = translateUserInfo(this.orderDetail.receiver);
        this.senderAddress = translateAddress(this.orderDetail.senderAddress);
        this.receiverAddress = translateAddress(this.orderDetail.receiverAddress);
      },
    });
  }

  handleCancelOrder() {
    this.historyService.cancelOrder(this.orderDetail._id).subscribe({
      next: () => {
        this.router.navigate(['history']);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
