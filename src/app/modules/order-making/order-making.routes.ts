import { Routes } from '@angular/router';
import { OptionsComponent } from './components/options/options.component';
import { UserInfoComponent } from './components/user-info/user-info.component';

export const orderMakingRoutes: Routes = [
  { path: 'first', component: OptionsComponent },
  { path: 'second/:isSender', component: UserInfoComponent },
];
