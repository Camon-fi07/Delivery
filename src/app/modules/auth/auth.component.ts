import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ButtonStyles } from 'shared/UI/button/button.types';
import { TextType } from 'shared/UI/text/text.types';
import { phoneValidator } from 'shared/utils/validators';

@Component({
  selector: 'auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
})
export class AuthComponent {
  formGroup!: FormGroup;
  titleType = TextType.TITLE;
  subtitleType = TextType.VALUE;
  buttonStyle = ButtonStyles.BRAND;
  isPhoneSubmit = false;

  constructor(private fb: FormBuilder) {
    this.formGroup = this.fb.group({
      phone: new FormControl('', phoneValidator),
      otp: new FormControl('', [Validators.required]),
    });
  }

  handleSubmit() {
    this.formGroup.controls['phone'].markAsTouched();
    if (!this.isPhoneSubmit && this.formGroup.controls['phone'].valid) {
      this.isPhoneSubmit = true;
    } else {
      console.log(this.formGroup.value);
    }
  }
}
