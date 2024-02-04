import { TextType } from 'shared/UI/text/text.types';
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TextComponent } from 'shared/UI/text/text.component';

@Component({
  selector: 'tabs',
  standalone: true,
  imports: [CommonModule, TextComponent],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.scss',
})
export class TabsComponent {
  @Input({ required: true }) variants!: string[];
  @Input() chosenIndex = 0;
  @Output() switchVariant = new EventEmitter<number>();
  TextType = TextType;

  handleChange(index: number) {
    this.chosenIndex = index;
    this.switchVariant.emit(index);
  }
}
