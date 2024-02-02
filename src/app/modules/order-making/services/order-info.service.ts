import { Injectable } from '@angular/core';
import { DeliveryOption } from 'shared/types/Calc';
import { Address } from 'shared/types/Point';
import { UserDeliveryInfo } from 'shared/types/User';

@Injectable()
export class OrderInfoService {
  option?: DeliveryOption;
  sender?: UserDeliveryInfo;
  receiver?: UserDeliveryInfo;
  senderAddress?: Address;
  receiverAddress?: Address;

  constructor() {}
}
