import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderMakingComponent } from './order-making.component';
import { OptionsComponent } from './components/options/options.component';
import { TextComponent } from 'shared/UI/text/text.component';
import { OrderInfoService } from './services/order-info.service';
import { HttpClient } from '@angular/common/http';
import { RouterModule, RouterOutlet } from '@angular/router';
import { orderMakingRoutes } from './order-making.routes';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FieldComponent } from 'components/field/field.component';
import { ButtonComponent } from 'shared/UI/button/button.component';
import { AddressFormComponent } from './components/address-form/address-form.component';

@NgModule({
  declarations: [OrderMakingComponent, OptionsComponent, UserInfoComponent, AddressFormComponent],
  imports: [
    CommonModule,
    TextComponent,
    RouterOutlet,
    FieldComponent,
    ReactiveFormsModule,
    ButtonComponent,
    RouterModule.forChild(orderMakingRoutes),
  ],
  exports: [OrderMakingComponent],
  providers: [OrderInfoService, HttpClient],
})
export class OrderMakingModule {}
