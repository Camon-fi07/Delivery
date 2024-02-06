import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CalculationInfo } from 'core/services/calculationInfo.service';
import { ORDER } from 'shared/constants/apiUrl';
import { DeliveryOption, OrderDto } from 'shared/types/Calc';
import { Address } from 'shared/types/Point';
import { Payer, UserDeliveryInfo } from 'shared/types/User';

@Injectable()
export class OrderInfoService {
  option?: DeliveryOption;
  sender?: UserDeliveryInfo;
  receiver?: UserDeliveryInfo;
  senderAddress?: Address;
  receiverAddress?: Address;
  payer = Payer.SENDER;

  constructor(
    private http: HttpClient,
    private calculationInfo: CalculationInfo,
  ) {}

  createOrder() {
    const data: OrderDto = {
      senderPoint: this.calculationInfo.senderPoint!,
      receiverPoint: this.calculationInfo.receiverPoint!,
      option: this.option!,
      payer: this.payer,
      receiver: this.receiver!,
      receiverAddress: this.receiverAddress!,
      sender: this.sender!,
      senderAddress: this.senderAddress!,
    };

    return this.http.post(ORDER, data);
  }
}
