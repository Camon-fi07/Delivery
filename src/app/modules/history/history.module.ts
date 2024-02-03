import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoryComponent } from './history.component';
import { HistoryCardComponent } from './components/history-card/history-card.component';
import { HistoryListComponent } from './components/history-list/history-list.component';
import { SpecialHistoryComponent } from './components/special-history/special-history.component';

@NgModule({
  declarations: [HistoryComponent, HistoryCardComponent, HistoryListComponent, SpecialHistoryComponent],
  imports: [CommonModule],
})
export class HistoryModule {}
