import { Component } from '@angular/core';
import { HistoryService } from 'modules/history/services/history.service';
import { DeliveryOrder } from 'modules/history/types/Order';
import { TextType } from 'shared/UI/text/text.types';

@Component({
  selector: 'history-list',
  templateUrl: './history-list.component.html',
  styleUrl: './history-list.component.scss',
})
export class HistoryListComponent {
  orderList!: DeliveryOrder[];
  TextType = TextType;

  constructor(private historyService: HistoryService) {
    historyService.getOrderList().subscribe({
      next: (res) => {
        this.orderList = res.orders;
      },
    });
  }
}
