import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoryComponent } from './history.component';
import { HistoryCardComponent } from './components/history-card/history-card.component';
import { HistoryListComponent } from './components/history-list/history-list.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { TextComponent } from 'shared/UI/text/text.component';
import { ButtonComponent } from 'shared/UI/button/button.component';
import { ModalComponent } from 'shared/UI/modal/modal.component';
import { RouterOutlet } from '@angular/router';

@NgModule({
  declarations: [HistoryComponent, HistoryCardComponent, HistoryListComponent, OrderDetailsComponent],
  imports: [CommonModule, TextComponent, ButtonComponent, ModalComponent, RouterOutlet],
  exports: [HistoryComponent],
})
export class HistoryModule {}
