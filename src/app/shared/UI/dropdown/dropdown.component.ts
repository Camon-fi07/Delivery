import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TextComponent } from 'shared/UI/text/text.component';
import { TextType } from 'shared/UI/text/text.types';

@Component({
  selector: 'dropdown',
  standalone: true,
  imports: [TextComponent, CommonModule],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss',
})
export class DropdownComponent {
  @Input() chosenVariant = 'Не выбран';
  @Input() shortVariants?: string[];
  isOpen = false;
  labelType = TextType.VALUE;

  toggle() {
    this.isOpen = !this.isOpen;
  }
}
