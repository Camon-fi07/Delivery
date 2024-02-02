import { Package } from './Package';
import { Address, Point, SpecialPoint } from './Point';
import { Payer, UserDeliveryInfo } from './User';

export enum DeliveryType {
  DEFAULT = 'DEFAULT',
  EXPRESS = 'EXPRESS',
}

export interface DeliveryOption {
  id: string;
  price: number;
  days: number;
  name: string;
  type: DeliveryType;
}

export interface CalculateDeliveryDto {
  package: Package;
  senderPoint: Point;
  receiverPoint: Point;
}

export interface CalculateData {
  package: Package;
  senderPoint: SpecialPoint;
  receiverPoint: SpecialPoint;
}

export interface CalculateDeliveryResponse {
  success: boolean;
  reason: string;
  options: DeliveryOption[];
}

export interface OrderDto {
  senderPoint: SpecialPoint;
  receiverPoint: SpecialPoint;
  senderAddress: Address;
  receiverAddress: Address;
  option: DeliveryOption;
  payer: Payer;
  sender: UserDeliveryInfo;
  receiver: UserDeliveryInfo;
}
