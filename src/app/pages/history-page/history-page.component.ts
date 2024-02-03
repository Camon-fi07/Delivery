import { Component } from '@angular/core';
import { HistoryModule } from 'modules/history/history.module';

@Component({
  selector: 'history-page',
  standalone: true,
  imports: [HistoryModule],
  templateUrl: './history-page.component.html',
  styleUrl: './history-page.component.scss',
})
export class HistoryPageComponent {}
