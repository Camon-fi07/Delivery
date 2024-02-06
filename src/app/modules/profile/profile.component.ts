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
  ButtonStyles = ButtonStyles;
  formGroup!: FormGroup;
  isProfileUpdated = false;
  error?: string;

  toggleIsProfileUpdated() {
    this.isProfileUpdated = !this.isProfileUpdated;
  }

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

    if (!userService.user) {
      this.userService.getSession().subscribe({
        next: (res) => {
          this.formGroup.controls['lastname'].setValue(res.user.lastname || '');
          this.formGroup.controls['firstname'].setValue(res.user.firstname || '');
          this.formGroup.controls['middlename'].setValue(res.user.middlename || '');
          this.formGroup.controls['email'].setValue(res.user.email || '');
          this.formGroup.controls['city'].setValue(res.user.city || '');
          this.formGroup.controls['phone'].setValue(res.user.phone || '');
        },
      });
    }
  }

  handleSubmit() {
    this.userService
      .updateProfile(
        this.userService.translateUserToProfile({ ...this.formGroup.value, phone: this.userService.phone }),
      )
      .subscribe({
        next: () => {
          this.toggleIsProfileUpdated();
        },
        error: (err) => {
          this.error = `Произошла ошибка ${err}`;
        },
      });
  }
}
