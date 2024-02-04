import { Component, Input, OnInit } from '@angular/core';
import { DeliveryOrder, StatusName } from 'modules/history/types/Order';
import { TextType } from 'shared/UI/text/text.types';

@Component({
  selector: 'history-card',
  templateUrl: './history-card.component.html',
  styleUrl: './history-card.component.scss',
})
export class HistoryCardComponent implements OnInit {
  @Input({ required: true }) order!: DeliveryOrder;
  address!: string;
  TextType = TextType;
  orderStatus!: string;
  detailsLink!: string;

  ngOnInit() {
    const receiverAddress = this.order.receiverAddress;
    this.address = `г. ${this.order.receiverPoint.name}, 
    ул. ${receiverAddress.street}, 
    д. ${receiverAddress.house}, 
    кв. ${receiverAddress.appartament}`;

    this.orderStatus = StatusName[this.order.status];

    this.detailsLink = `history/details/${this.order._id}`;
  }
}
