import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TextComponent } from 'shared/UI/text/text.component';
import { TextType } from 'shared/UI/text/text.types';

@Component({
  selector: 'field',
  standalone: true,
  imports: [CommonModule, TextComponent, ReactiveFormsModule],
  templateUrl: './field.component.html',
  styleUrl: './field.component.scss',
})
export class FieldComponent implements OnInit {
  @Input() type = 'text';
  @Input() tag: 'input' | 'textarea' = 'input';
  @Input() rows: number = 1;
  @Input({ required: true }) name!: string;
  @Input() label?: string;
  @Input({ required: true }) formGroup!: FormGroup;
  @Input() disabled = true;

  labelType = TextType.LABEL;
  errorType = TextType.ERROR;

  error!: string;

  constructor() {}

  ngOnInit(): void {
    this.formGroup.get(this.name)?.valueChanges.subscribe(() => {
      const errors = this.formGroup.controls[this.name].errors;
      for (const key in errors) {
        if (typeof errors[key] === 'boolean') this.error = key;
        else this.error = errors[key];
        break;
      }
      if (!errors) this.error = '';
    });
  }
}
