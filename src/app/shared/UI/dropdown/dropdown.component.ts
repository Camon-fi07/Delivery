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
  @Output() shortBtnClick? = new EventEmitter<number>();
  @ViewChild('panel') panelElement!: ElementRef;

  isOpen = false;
  labelType = TextType.VALUE;
  buttonUnderline = ButtonStyles.SIMPLE_UNDERLINE;

  toggle() {
    this.isOpen = !this.isOpen;
  }

  handleShortBtnClick(index: number) {
    this.shortBtnClick?.emit(index);
  }

  handleBlur(event: FocusEvent) {
    if (!event.relatedTarget) this.toggle();
    else if (this.isCloseOnClick)
      setTimeout(() => {
        this.toggle();
      }, 100);
    else {
      this.panelElement.nativeElement.focus();
    }
  }
}
