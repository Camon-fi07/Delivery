import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TextComponent } from 'shared/UI/text/text.component';
import { TextType } from 'shared/UI/text/text.types';
import { FieldTags } from './field.types';

@Component({
  selector: 'field',
  standalone: true,
  imports: [CommonModule, TextComponent, ReactiveFormsModule],
  templateUrl: './field.component.html',
  styleUrl: './field.component.scss',
})
export class FieldComponent implements OnInit {
  @Input() type = 'text';
  @Input() tag = FieldTags.INPUT;
  @Input() rows = 1;
  @Input({ required: true }) name!: string;
  @Input() label?: string;
  @Input({ required: true }) formGroup!: FormGroup;
  @Input() placeholder = '';
  labelType = TextType.LABEL;
  errorType = TextType.ERROR;
  error!: string;

  ngOnInit(): void {
    this.setError();
    this.formGroup.controls[this.name]?.valueChanges.subscribe(() => {
      this.setError();
    });
  }

  setError() {
    const errors = this.formGroup.controls[this.name].errors;

    if (!errors) {
      this.error = '';
      return;
    }

    for (const key in errors) {
      this.error = typeof errors[key] === 'boolean' ? key : errors[key];
      break;
    }
  }
}
