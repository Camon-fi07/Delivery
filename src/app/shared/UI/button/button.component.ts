import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ButtonTypes, ButtonStyles } from './button.types';
import { CommonModule } from '@angular/common';
import { TextComponent } from 'shared/UI/text/text.component';
import { TextType } from 'shared/UI/text/text.types';

@Component({
  selector: 'UI-button',
  standalone: true,
  imports: [CommonModule, TextComponent],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent implements OnInit {
  @Input({ required: true }) buttonStyle!: ButtonStyles;
  @Input() type: ButtonTypes = 'button';
  @Input() isDisabled = false;
  @Output() clickButton = new EventEmitter();
  textType!: TextType;

  ngOnInit() {
    this.textType =
      this.buttonStyle === ButtonStyles.SIMPLE_UNDERLINE ? TextType.BUTTON_UNDERLINE_SMALL : TextType.BUTTON_TEXT;
  }
}
