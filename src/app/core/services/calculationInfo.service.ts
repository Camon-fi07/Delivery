import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { CALC } from 'shared/constants/apiUrl';
import { CalculateData, CalculateDeliveryDto, CalculateDeliveryResponse, DeliveryOption } from 'shared/types/Calc';
import { Point, SpecialPoint } from 'shared/types/Point';

@Injectable({ providedIn: 'root' })
export class CalculationInfo {
  options: DeliveryOption[] = [];
  senderPoint?: SpecialPoint;
  receiverPoint?: SpecialPoint;

  constructor(private http: HttpClient) {}

  calculate(data: CalculateData): Observable<void> {
    const requestData: CalculateDeliveryDto = {
      senderPoint: this.translateSpecialPointToPoint(data.senderPoint),
      receiverPoint: this.translateSpecialPointToPoint(data.receiverPoint),
      package: data.package,
    };
    this.senderPoint = data.senderPoint;
    this.receiverPoint = data.receiverPoint;

    return this.http.post<CalculateDeliveryResponse>(CALC, requestData).pipe(
      map((res) => {
        this.options = res.options;
      }),
    );
  }

  translateSpecialPointToPoint = (origin: SpecialPoint): Point => {
    return { latitude: origin.latitude, longitude: origin.longitude };
  };
}
