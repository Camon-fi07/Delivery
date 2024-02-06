import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonStyles } from 'shared/UI/button/button.types';
import { TextTags, TextType } from 'shared/UI/text/text.types';

@Component({
  selector: 'success-modal',
  templateUrl: './success-modal.component.html',
  styleUrl: './success-modal.component.scss',
})
export class SuccessModalComponent {
  @Input({ required: true }) isOpen!: boolean;
  TextType = TextType;
  TextTag = TextTags;
  ButtonStyles = ButtonStyles;

  constructor(private router: Router) {}

  handleStatusClick() {
    this.router.navigate(['profile']);
  }
}
