import { Component } from '@angular/core';
import { Package, PackageTypesResponse, SpecialPackage } from './types/Package';
import { HttpClient } from '@angular/common/http';
import { PACKAGE_TYPES, POINTS } from 'shared/constants/apiUrl';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { DeliveryPointsResponse, Point, SpecialPoint } from './types/Point';

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
      senderPoint: new FormControl<Point | null>(null),
      receivePoint: new FormControl<Point | null>(null),
      package: new FormControl<Package | null>(null),
    });
  }

  handlePoint(index: number, isSender: boolean) {
    console.log(index, isSender);
  }
}
