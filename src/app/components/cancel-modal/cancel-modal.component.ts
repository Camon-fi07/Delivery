import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonComponent } from 'shared/UI/button/button.component';
import { ButtonStyles } from 'shared/UI/button/button.types';
import { ModalComponent } from 'shared/UI/modal/modal.component';
import { TextComponent } from 'shared/UI/text/text.component';
import { TextTags, TextType } from 'shared/UI/text/text.types';

@Component({
  standalone: true,
  imports: [ModalComponent, ButtonComponent, TextComponent],
  selector: 'cancel-modal',
  templateUrl: './cancel-modal.component.html',
  styleUrl: './cancel-modal.component.scss',
})
export class CancelModalComponent {
  @Input({ required: true }) isOpen!: boolean;
  @Output() closeModal = new EventEmitter();
  @Output() cancelOrder = new EventEmitter();
  TextType = TextType;
  TextTag = TextTags;
  ButtonStyles = ButtonStyles;
}
