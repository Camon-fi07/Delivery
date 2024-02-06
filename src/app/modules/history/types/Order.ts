import { Address, SpecialPoint } from 'shared/types/Point';
import { Payer, UserDeliveryInfo } from 'shared/types/User';

export enum Status {
  IN_PROCESSING = 0,
  WAITING_COURIER = 1,
  ON_MY_WAY = 2,
  SUCCESS = 3,
  CANCELED = 4,
}

export const StatusName = { 0: 'В процессе', 1: 'Ожидает курьера', 2: 'В пути', 3: 'Доставлен', 4: 'Отменён' };

export interface DeliveryOrder {
  _id: string;
  senderPoint: SpecialPoint;
  receiverPoint: SpecialPoint;
  senderAddress: Address;
  receiverAddress: Address;
  cancellable: boolean;
  payer: Payer;
  sender: UserDeliveryInfo;
  receiver: UserDeliveryInfo;
  status: Status;
}

export interface DeliveryOrderResponse {
  success: boolean;
  reason?: string;
  order: DeliveryOrder;
}

export interface DeliveryOrdersResponse {
  success: boolean;
  reason?: string;
  orders: DeliveryOrder[];
}

// cancellable
// :
// true
// created
// :
// "2024-02-02T18:27:46.172Z"
// payer
// :
// "SENDER"
// receiver
// :
// {firstname: 'вкпкв', lastname: 'пвкп', phone: '+79236091255'}
// receiverAddress
// :
// {street: 'пвк', house: 'пкв', appartament: 'п', comment: ''}
// receiverPoint
// :
// {id: '1', name: 'Москва', latitude: 55.7558, longitude: 37.6173}
// sender
// :
// {firstname: 'Никита', lastname: 'пквп', phone: '+79236091255'}
// senderAddress
// :
// {street: 'пвкп', house: 'вкпвк', appartament: 'пвк', comment: ''}
// senderPoint
// :
// {id: '1', name: 'Москва', latitude: 55.7558, longitude: 37.6173}
// status
// :
// 0
// updated
// :
// "2024-02-02T18:27:46.172Z"
// _id
// :
// "65bd3422cfa86426c7477d52"
