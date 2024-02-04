import { Component } from '@angular/core';
import { DeliveryCalculationModule } from 'modules/delivery-calculation/delivery-calculation.module';
import { TextComponent } from 'shared/UI/text/text.component';
import { TextType } from 'shared/UI/text/text.types';

@Component({
  selector: 'main-page',
  standalone: true,
  imports: [DeliveryCalculationModule, TextComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
})
export class MainPageComponent {
  TextType = TextType;
}
