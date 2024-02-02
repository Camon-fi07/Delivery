import { Injectable } from '@angular/core';
import { DeliveryOption, DeliveryType } from 'shared/types/Calc';
import { Address } from 'shared/types/Point';
import { Payer, UserDeliveryInfo } from 'shared/types/User';

@Injectable()
export class OrderInfoService {
  option?: DeliveryOption = { days: 1, id: 'awf', name: 'fawf', price: 23, type: DeliveryType.DEFAULT };
  sender?: UserDeliveryInfo = { firstname: 'few', lastname: 'fawf', phone: '4234234234' };
  receiver?: UserDeliveryInfo = { firstname: 'few', lastname: 'fawf', phone: '4234234234' };
  senderAddress?: Address = { house: 'few', street: 'fawf', appartament: '4234234234' };
  receiverAddress?: Address = { house: 'few', street: 'fawf', appartament: '4234234234', comment: 'fsefsefl' };
  payer = Payer.SENDER;

  constructor() {}
}
