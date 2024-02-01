import { Component } from '@angular/core';
import { Package, PackageTypesResponse, SpecialPackage } from './types/Package';
import { HttpClient } from '@angular/common/http';
import { PACKAGE_TYPES, POINTS } from 'shared/constants/apiUrl';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { DeliveryPointsResponse, SpecialPoint } from './types/Point';
import { TextType } from 'shared/UI/text/text.types';
import { ButtonStyles } from 'shared/UI/button/button.types';

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
  brandButton = ButtonStyles.BRAND;

  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
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
      package: new FormControl<Package | null>(null),
    });
  }

  handlePoint(index: number, isSender: boolean) {
    if (isSender) {
      this.formGroup.controls['senderPoint'].setValue(index);
    } else {
      this.formGroup.controls['receiverPoint'].setValue(index);
    }
  }
}
