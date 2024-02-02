import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TextComponent } from '../text/text.component';
import { TextType } from 'shared/UI/text/text.types';
import { Data } from './card.types';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'card',
  standalone: true,
  imports: [TextComponent, CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  TextType = TextType;
  @Input({ required: true }) values!: Data[];
  @Input() canChange = false;
  @Output() changeEmitter = new EventEmitter();
}
