import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CardData } from './card.types';
import { CommonModule } from '@angular/common';
import { TextType } from 'shared/UI/text/text.types';
import { TextComponent } from 'shared/UI/text/text.component';

@Component({
  selector: 'card',
  standalone: true,
  imports: [TextComponent, CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  TextType = TextType;
  @Input({ required: true }) name!: string;
  @Input({ required: true }) values!: CardData[];
  @Input() canChange = false;
  @Output() changeEmitter = new EventEmitter();
}
