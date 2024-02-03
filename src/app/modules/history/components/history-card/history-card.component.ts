import { Component, Input } from '@angular/core';
import { DeliveryOrder } from 'modules/history/types/Order';

@Component({
  selector: 'history-card',
  templateUrl: './history-card.component.html',
  styleUrl: './history-card.component.scss',
})
export class HistoryCardComponent {
  @Input({ required: true }) order!: DeliveryOrder;
}
