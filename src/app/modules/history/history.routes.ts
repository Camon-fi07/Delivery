import { Routes } from '@angular/router';
import { HistoryListComponent } from './components/history-list/history-list.component';
import { SpecialHistoryComponent } from './components/special-history/special-history.component';

export const orderMakingRoutes: Routes = [
  { path: 'list', component: HistoryListComponent },
  { path: 'special', component: SpecialHistoryComponent },
];
