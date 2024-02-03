import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'core/services/user.service';
import { ButtonStyles } from 'shared/UI/button/button.types';
import { TextType } from 'shared/UI/text/text.types';
import { addressValidator, nameValidator } from 'shared/utils/validators';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {
  TextType = TextType;
  ButtonType = ButtonStyles;
  formGroup!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
  ) {
    this.formGroup = this.fb.group({
      lastname: new FormControl(userService.user?.lastname || '', nameValidator),
      firstname: new FormControl(userService.user?.firstname || '', nameValidator),
      middlename: new FormControl(userService.user?.middlename || '', nameValidator),
      email: new FormControl(userService.user?.email || '', Validators.email),
      city: new FormControl(userService.user?.city || '', addressValidator),
      phone: new FormControl({ value: userService.phone, disabled: true }),
    });
  }
}
