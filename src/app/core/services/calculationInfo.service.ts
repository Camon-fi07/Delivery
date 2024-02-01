import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { CALC } from 'shared/constants/apiUrl';
import { CalculateDeliveryDto, CalculateDeliveryResponse, DeliveryOption } from 'shared/types/Calc';

@Injectable()
export class CalculationInfo {
  options?: DeliveryOption[];
  calculateData?: CalculateDeliveryDto;

  constructor(private http: HttpClient) {}

  calculate(data: CalculateDeliveryDto): Observable<void> {
    this.calculateData = data;
    return this.http.post<CalculateDeliveryResponse>(CALC, data).pipe(
      map((res) => {
        this.options = res.options;
      }),
    );
  }
}
