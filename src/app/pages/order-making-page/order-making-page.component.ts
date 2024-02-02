import { Component } from '@angular/core';
import { OrderMakingModule } from 'modules/order-making/order-making.module';

@Component({
  selector: 'order-making-page',
  standalone: true,
  imports: [OrderMakingModule],
  templateUrl: './order-making-page.component.html',
  styleUrl: './order-making-page.component.scss',
})
export class OrderMakingPageComponent {}
