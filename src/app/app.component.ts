import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { UserService } from 'core/services/user.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CalculationInfo } from 'core/services/calculationInfo.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [UserService, HttpClient, CalculationInfo],
})
export class AppComponent {
  title = 'delivery';
}
