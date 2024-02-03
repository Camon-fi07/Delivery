import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserService } from 'core/services/user.service';
import { DeliveryOrder } from '../types/Order';
import { ORDERS, SPECIAL_ORDER } from 'shared/constants/apiUrl';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HistoryService {
  constructor(
    private http: HttpClient,
    private userService: UserService,
  ) {}

  getOrderList(): Observable<DeliveryOrder[]> {
    return this.http.get<DeliveryOrder[]>(ORDERS, { headers: { Authorization: `Bearer ${this.userService.token}` } });
  }

  getOrderDetails(id: string) {
    return this.http.get<DeliveryOrder>(SPECIAL_ORDER(id), {
      headers: { Authorization: `Bearer ${this.userService.token}` },
    });
  }
}
