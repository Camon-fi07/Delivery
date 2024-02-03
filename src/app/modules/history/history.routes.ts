import { Routes } from '@angular/router';
import { HistoryListComponent } from './components/history-list/history-list.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';

export const historyRoutes: Routes = [
  { path: 'list', component: HistoryListComponent },
  { path: 'details', component: OrderDetailsComponent },
];
