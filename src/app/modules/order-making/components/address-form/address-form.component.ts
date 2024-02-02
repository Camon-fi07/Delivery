import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderInfoService } from 'modules/order-making/services/order-info.service';
import { ButtonStyles } from 'shared/UI/button/button.types';
import { TextType } from 'shared/UI/text/text.types';
import { Location } from '@angular/common';
import { addressValidator, commentValidator, requireValidator } from 'shared/utils/validators';
import { FieldTags } from 'components/field/field.types';

@Component({
  selector: 'address-form',
  templateUrl: './address-form.component.html',
  styleUrl: './address-form.component.scss',
})
export class AddressFormComponent {
  formGroup!: FormGroup;
  isSender!: boolean;
  buttonType = ButtonStyles;
  textType = TextType;
  fieldTags = FieldTags;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private orderInfo: OrderInfoService,
    private location: Location,
    private router: Router,
  ) {
    this.route.params.subscribe((params) => {
      this.isSender = params['isSender'] === 'true';

      if (this.formGroup?.value) {
        this.formGroup.reset();
        this.formGroup.controls['comment'].setValue('');
      }
    });

    this.formGroup = this.fb.group({
      street: new FormControl(
        this.isSender ? this.orderInfo.senderAddress?.street : this.orderInfo.receiverAddress?.street,
        [requireValidator, addressValidator],
      ),
      house: new FormControl(
        this.isSender ? this.orderInfo.senderAddress?.house : this.orderInfo.receiverAddress?.house,
        [requireValidator, addressValidator],
      ),
      appartament: new FormControl(
        this.isSender ? this.orderInfo.senderAddress?.appartament : this.orderInfo.receiverAddress?.appartament,
        [requireValidator, addressValidator],
      ),
      comment: new FormControl(
        (this.isSender ? this.orderInfo.senderAddress?.comment : this.orderInfo.receiverAddress?.comment) || '',
        commentValidator,
      ),
    });
  }

  handleSubmit() {
    this.formGroup.markAllAsTouched();
    if (this.formGroup.invalid) return;

    if (this.isSender) this.orderInfo.senderAddress = this.formGroup.value;
    else this.orderInfo.receiverAddress = this.formGroup.value;

    if (this.isSender) this.router.navigate(['order/address/false']);
    else this.router.navigate(['order/paid']);
  }

  handleBack() {
    this.location.back();
  }
}
