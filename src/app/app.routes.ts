import { Routes } from '@angular/router';
import { AuthPageComponent } from 'pages/auth-page/auth-page.component';
import { MainPageComponent } from 'pages/main-page/main-page.component';

export const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'auth', component: AuthPageComponent },
  { path: 'orderMaking', component: AuthPageComponent },
];
