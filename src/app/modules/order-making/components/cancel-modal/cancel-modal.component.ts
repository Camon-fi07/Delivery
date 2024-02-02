import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonStyles } from 'shared/UI/button/button.types';
import { TextTags, TextType } from 'shared/UI/text/text.types';

@Component({
  selector: 'cancel-modal',
  templateUrl: './cancel-modal.component.html',
  styleUrl: './cancel-modal.component.scss',
})
export class CancelModalComponent {
  @Input({ required: true }) isOpen!: boolean;
  @Output() closeModal = new EventEmitter();
  TextType = TextType;
  TextTag = TextTags;
  ButtonTypes = ButtonStyles;

  constructor(private router: Router) {}

  handleCloseClick() {
    this.router.navigate(['']);
  }
}
