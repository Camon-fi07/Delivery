import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { TextComponent } from 'shared/UI/text/text.component';
import { TextType } from 'shared/UI/text/text.types';
import { ButtonStyles } from 'shared/UI/button/button.types';
import { ButtonComponent } from 'shared/UI/button/button.component';

@Component({
  selector: 'dropdown',
  standalone: true,
  imports: [TextComponent, CommonModule, ButtonComponent],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss',
})
export class DropdownComponent {
  @Input() chosenVariant = 'Не выбран';
  @Input() shortVariants?: string[];
  @Input() isCloseOnClick = true;
  @Input() contentHeight = 300;
  @Output() shortBtnClick? = new EventEmitter<number>();
  @ViewChild('content') element!: ElementRef;
  isTopOpen = false;
  isOpen = false;
  labelType = TextType.VALUE;
  buttonUnderline = ButtonStyles.SIMPLE_UNDERLINE;

  toggle() {
    this.isOpen = !this.isOpen;

    if (this.isOpen) {
      if (window.innerHeight - this.element.nativeElement.getBoundingClientRect().bottom < this.contentHeight) {
        this.isTopOpen = true;
      } else this.isTopOpen = false;
    }
  }

  handleShortBtnClick(index: number) {
    this.shortBtnClick?.emit(index);
  }

  handleBlur(event: FocusEvent) {
    if (!event.relatedTarget) this.isOpen = false;
    else if (this.isCloseOnClick)
      setTimeout(() => {
        this.isOpen = false;
      }, 100);
  }
}
