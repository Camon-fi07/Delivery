import { Routes } from '@angular/router';
import { authGuard } from 'core/guards/auth.guard';
import { orderGuard } from 'core/guards/order.guard';
import { AuthPageComponent } from 'pages/auth-page/auth-page.component';
import { HistoryPageComponent } from 'pages/history-page/history-page.component';
import { MainPageComponent } from 'pages/main-page/main-page.component';
import { OrderMakingPageComponent } from 'pages/order-making-page/order-making-page.component';
import { ProfilePageComponent } from 'pages/profile-page/profile-page.component';

export const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'auth', component: AuthPageComponent },
  { path: 'profile', component: ProfilePageComponent, canActivate: [authGuard] },
  {
    path: 'order',
    component: OrderMakingPageComponent,
    canActivate: [orderGuard],
    loadChildren: () => import('modules/order-making/order-making.module').then((m) => m.OrderMakingModule),
  },
  {
    path: 'history',
    component: HistoryPageComponent,
    loadChildren: () => import('modules/history/history.module').then((m) => m.HistoryModule),
    canActivate: [authGuard],
  },
];
