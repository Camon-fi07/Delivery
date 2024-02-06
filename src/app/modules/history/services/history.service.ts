import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserService } from 'core/services/user.service';
import { DeliveryOrderResponse, DeliveryOrdersResponse } from '../types/Order';
import { CANCEL, ORDERS, SPECIAL_ORDER } from 'shared/constants/apiUrl';
import { Observable } from 'rxjs';
import { BaseResponse } from 'shared/types/Response';

@Injectable({
  providedIn: 'root',
})
export class HistoryService {
  constructor(
    private http: HttpClient,
    private userService: UserService,
  ) {}

  getOrderList(): Observable<DeliveryOrdersResponse> {
    return this.http.get<DeliveryOrdersResponse>(ORDERS, {
      headers: { Authorization: `Bearer ${this.userService.token}` },
    });
  }

  getOrderDetails(id: string): Observable<DeliveryOrderResponse> {
    return this.http.get<DeliveryOrderResponse>(SPECIAL_ORDER(id), {
      headers: { Authorization: `Bearer ${this.userService.token}` },
    });
  }

  cancelOrder(id: string): Observable<BaseResponse> {
    return this.http.put<BaseResponse>(
      CANCEL,
      { orderId: id },
      { headers: { Authorization: `Bearer ${this.userService.token}` } },
    );
  }
}
