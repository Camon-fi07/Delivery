import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderMakingComponent } from './order-making.component';
import { OptionsComponent } from './components/options/options.component';
import { TextComponent } from 'shared/UI/text/text.component';
import { OrderInfoService } from './services/order-info.service';
import { HttpClient } from '@angular/common/http';
import { RouterModule, RouterOutlet } from '@angular/router';
import { orderMakingRoutes } from './order-making.routes';

@NgModule({
  declarations: [OrderMakingComponent, OptionsComponent],
  imports: [CommonModule, TextComponent, RouterOutlet, RouterModule.forChild(orderMakingRoutes)],
  exports: [OrderMakingComponent],
  providers: [OrderInfoService, HttpClient],
})
export class OrderMakingModule {}
