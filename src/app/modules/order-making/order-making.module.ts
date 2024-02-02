import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderMakingComponent } from './order-making.component';
import { OptionsComponent } from './components/options/options.component';
import { TextComponent } from 'shared/UI/text/text.component';

@NgModule({
  declarations: [OrderMakingComponent, OptionsComponent],
  imports: [CommonModule, TextComponent],
  exports: [OrderMakingComponent],
})
export class OrderMakingModule {}
