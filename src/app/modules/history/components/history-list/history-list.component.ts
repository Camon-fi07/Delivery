import { Component } from '@angular/core';
import { HistoryService } from 'modules/history/services/history.service';
import { DeliveryOrder } from 'modules/history/types/Order';

@Component({
  selector: 'history-list',
  templateUrl: './history-list.component.html',
  styleUrl: './history-list.component.scss',
})
export class HistoryListComponent {
  orderList!: DeliveryOrder[];

  constructor(private historyService: HistoryService) {
    historyService.getOrderList().subscribe({
      next: (res) => {
        console.log(res);
        this.orderList = res;
      },
    });
  }
}
