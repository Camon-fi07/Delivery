import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'history',
  templateUrl: './history.component.html',
  styleUrl: './history.component.scss',
})
export class HistoryComponent {
  constructor(private router: Router) {
    router.navigate(['history/list']);
  }
}
