import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'core/services/user.service';
import { TextType } from 'shared/UI/text/text.types';
import { addressValidator, nameValidator } from 'shared/utils/validators';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {
  TextType = TextType;
  formGroup!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
  ) {
    userService.getSession().subscribe({
      next: (res) => {
        this.formGroup = this.fb.group({
          lastname: new FormControl(res.user.lastName || '', nameValidator),
          firstname: new FormControl(res.user.firstName || '', nameValidator),
          middlename: new FormControl(res.user.middleName || '', nameValidator),
          email: new FormControl(res.user.email || '', Validators.email),
          city: new FormControl(res.user.email || '', addressValidator),
          phone: new FormControl({ value: res.user.phone || userService.phone, disabled: true }),
        });
      },
      error: () => {
        router.navigate(['auth']);
      },
    });
  }
}
