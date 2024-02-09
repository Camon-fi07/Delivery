import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoryComponent } from './history.component';
import { HistoryCardComponent } from './components/history-card/history-card.component';
import { HistoryListComponent } from './components/history-list/history-list.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { TextComponent } from 'shared/UI/text/text.component';
import { ButtonComponent } from 'shared/UI/button/button.component';
import { ModalComponent } from 'shared/UI/modal/modal.component';
import { RouterLink, RouterModule, RouterOutlet, provideRouter } from '@angular/router';
import { HistoryService } from './services/history.service';
import { CardComponent } from 'shared/UI/card/card.component';
import { CancelModalComponent } from 'components/cancel-modal/cancel-modal.component';
import { historyRoutes } from './history.routes';

@NgModule({
  declarations: [HistoryComponent, HistoryCardComponent, HistoryListComponent, OrderDetailsComponent],
  imports: [
    CommonModule,
    TextComponent,
    ButtonComponent,
    ModalComponent,
    RouterOutlet,
    RouterLink,
    CardComponent,
    CancelModalComponent,
    RouterModule.forChild(historyRoutes),
  ],
  providers: [HistoryService, provideRouter(historyRoutes)],
  exports: [HistoryComponent],
})
export class HistoryModule {}
