import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'order-making',
  templateUrl: './order-making.component.html',
  styleUrl: './order-making.component.scss',
})
export class OrderMakingComponent {
  constructor(private router: Router) {
    router.navigate(['order/first']);
  }
}
