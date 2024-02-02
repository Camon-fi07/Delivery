import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderInfoService } from 'modules/order-making/services/order-info.service';
import { ButtonStyles } from 'shared/UI/button/button.types';
import { TextType } from 'shared/UI/text/text.types';
import { nameValidator, phoneValidator } from 'shared/utils/validators';
import { Location } from '@angular/common';

@Component({
  selector: 'user-info',
  templateUrl: './user-info.component.html',
  styleUrl: './user-info.component.scss',
})
export class UserInfoComponent {
  formGroup!: FormGroup;
  isSender!: boolean;
  buttonType = ButtonStyles;
  textType = TextType;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private orderInfo: OrderInfoService,
    private location: Location,
    private router: Router,
  ) {
    this.route.params.subscribe((params) => {
      this.isSender = params['isSender'] === 'true';

      this.formGroup = this.fb.group({
        firstname: new FormControl(
          this.isSender ? this.orderInfo.sender?.firstname : this.orderInfo.receiver?.firstname,
          nameValidator,
        ),
        lastname: new FormControl(
          this.isSender ? this.orderInfo.sender?.lastname : this.orderInfo.receiver?.lastname,
          nameValidator,
        ),
        middlename: new FormControl(
          this.isSender ? this.orderInfo.sender?.middlename : this.orderInfo.receiver?.middlename,
          nameValidator,
        ),
        phone: new FormControl(
          this.isSender ? this.orderInfo.sender?.phone : this.orderInfo.receiver?.phone,
          phoneValidator,
        ),
      });
    });
  }

  handleSubmit() {
    this.formGroup.markAllAsTouched();
    if (this.formGroup.invalid) return;

    if (this.isSender) this.orderInfo.sender = this.formGroup.value;
    else this.orderInfo.receiver = this.formGroup.value;

    this.router.navigate(['order/second/false']);
  }

  handleBack() {
    this.location.back();
  }
}
