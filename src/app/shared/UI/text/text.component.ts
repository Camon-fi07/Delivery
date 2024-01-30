import { Component, Input } from '@angular/core';
import { TextType } from './text.types';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'text',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './text.component.html',
  styleUrl: './text.component.scss',
})
export class TextComponent {
  @Input({ required: true }) textType!: TextType;
}
