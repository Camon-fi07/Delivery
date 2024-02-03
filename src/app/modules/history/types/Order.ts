import { Address, SpecialPoint } from 'shared/types/Point';
import { Payer, UserDeliveryInfo } from 'shared/types/User';

export interface DeliveryOrder {
  senderPoint: SpecialPoint;
  receiverPoint: SpecialPoint;
  senderAddress: Address;
  receiverAddress: Address;
  cancellable: boolean;
  payer: Payer;
  sender: UserDeliveryInfo;
  receiver: UserDeliveryInfo;
}
