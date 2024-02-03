import { Routes } from '@angular/router';
import { authGuard } from 'core/guards/auth.guard';
import { orderGuard } from 'core/guards/order.guard';
import { orderMakingRoutes } from 'modules/order-making/order-making.routes';
import { AuthPageComponent } from 'pages/auth-page/auth-page.component';
import { MainPageComponent } from 'pages/main-page/main-page.component';
import { OrderMakingPageComponent } from 'pages/order-making-page/order-making-page.component';
import { ProfilePageComponent } from 'pages/profile-page/profile-page.component';

export const routes: Routes = [
  { path: 'auth', component: AuthPageComponent },
  { path: 'order', component: OrderMakingPageComponent, children: orderMakingRoutes, canActivate: [orderGuard] },
  { path: 'profile', component: ProfilePageComponent, canActivate: [authGuard] },
  { path: '', component: MainPageComponent },
];
