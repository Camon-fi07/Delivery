import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'core/services/user.service';
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

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
  ) {
    this.formGroup = this.fb.group({
      phone: new FormControl(this.userService.phone || '', phoneValidator),
      code: new FormControl({ value: null, disabled: false }, [Validators.required]),
    });
  }

  handleSubmit() {
    this.formGroup.controls['phone'].markAsTouched();
    if (!this.isPhoneSubmit && this.formGroup.controls['phone'].valid) {
      this.userService.createOtp(this.formGroup.controls['phone'].value).subscribe({
        next: () => {
          this.isPhoneSubmit = true;
        },
      });
    } else {
      this.userService.logIn(this.formGroup.value).subscribe({
        next: (res) => {
          this.router.navigate(['profile']);
          console.log(res);
        },
      });
    }
  }
}
