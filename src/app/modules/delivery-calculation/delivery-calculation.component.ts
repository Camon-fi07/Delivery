import { Component } from '@angular/core';
import { Package, PackageTypesResponse, SpecialPackage } from 'shared/types/Package';
import { HttpClient } from '@angular/common/http';
import { PACKAGE_TYPES, POINTS } from 'shared/constants/apiUrl';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { DeliveryPointsResponse, SpecialPoint } from 'shared/types/Point';
import { TextType } from 'shared/UI/text/text.types';
import { ButtonStyles } from 'shared/UI/button/button.types';
import { CalculationInfo } from 'core/services/calculationInfo.service';
import { translateSpecialPointToPoint } from './utils/mappers';
import { Router } from '@angular/router';
import { packageValidator, requireValidator } from 'shared/utils/validators';

@Component({
  selector: 'delivery-calculation',
  templateUrl: './delivery-calculation.component.html',
  styleUrl: './delivery-calculation.component.scss',
})
export class DeliveryCalculationComponent {
  packages!: SpecialPackage[];
  points!: SpecialPoint[];
  pointsNames!: string[];
  formGroup!: FormGroup;
  labelType = TextType.LABEL;
  titleType = TextType.TITLE;
  errorType = TextType.ERROR;
  brandButton = ButtonStyles.BRAND;
  error?: string;

  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
    private calculationInfo: CalculationInfo,
    private router: Router,
  ) {
    this.http.get<PackageTypesResponse>(PACKAGE_TYPES).subscribe({
      next: (res) => {
        this.packages = res.packages;
      },
    });

    this.http.get<DeliveryPointsResponse>(POINTS).subscribe({
      next: (res) => {
        this.points = res.points;
        this.pointsNames = res.points.map((point) => point.name);
      },
    });

    this.formGroup = this.fb.group({
      senderPoint: new FormControl(0),
      receiverPoint: new FormControl(0),
      package: new FormControl<Package | null>(null, [requireValidator, packageValidator]),
    });
  }

  get packageError() {
    const errors = this.formGroup.controls['package'].errors;
    for (const key in errors) {
      return errors[key];
    }
  }

  handlePoint(index: number, isSender: boolean) {
    if (isSender) {
      this.formGroup.controls['senderPoint'].setValue(index);
    } else {
      this.formGroup.controls['receiverPoint'].setValue(index);
    }
  }

  handlePackage(data: Package) {
    this.formGroup.controls['package'].setValue(data);
  }

  handleSubmit() {
    this.formGroup.markAllAsTouched();
    if (this.formGroup.invalid) return;

    const values = this.formGroup.value;
    this.calculationInfo
      .calculate({
        package: values.package,
        senderPoint: translateSpecialPointToPoint(this.points[values.senderPoint]),
        receiverPoint: translateSpecialPointToPoint(this.points[values.receiverPoint]),
      })
      .subscribe({
        next: () => this.router.navigate(['orderMaking']),
        error: (err) => {
          this.error = `Произошла ошибка ${err}`;
        },
      });
  }
}
