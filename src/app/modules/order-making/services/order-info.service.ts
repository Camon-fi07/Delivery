import { Injectable } from '@angular/core';
import { DeliveryOption } from 'shared/types/Calc';
import { UserDeliveryInfo } from 'shared/types/User';

@Injectable()
export class OrderInfoService {
  option?: DeliveryOption;
  sender?: UserDeliveryInfo;
  receiver?: UserDeliveryInfo;

  constructor() {}
}
