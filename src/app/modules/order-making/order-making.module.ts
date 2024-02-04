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
import { ControlsComponent } from 'shared/UI/controls/controls.component';
import { PaidComponent } from './components/paid/paid.component';
import { ViewComponent } from './components/view/view.component';
import { CardComponent } from 'shared/UI/card/card.component';
import { SuccessModalComponent } from './components/success-modal/success-modal.component';
import { CancelModalComponent } from '../../components/cancel-modal/cancel-modal.component';
import { ModalComponent } from 'shared/UI/modal/modal.component';

@NgModule({
  declarations: [
    OrderMakingComponent,
    OptionsComponent,
    UserInfoComponent,
    AddressFormComponent,
    PaidComponent,
    ViewComponent,
    SuccessModalComponent,
  ],
  imports: [
    CommonModule,
    CardComponent,
    TextComponent,
    RouterOutlet,
    FieldComponent,
    ReactiveFormsModule,
    ButtonComponent,
    ControlsComponent,
    ModalComponent,
    CancelModalComponent,
    RouterModule.forChild(orderMakingRoutes),
  ],
  exports: [OrderMakingComponent],
  providers: [OrderInfoService, HttpClient],
})
export class OrderMakingModule {}
