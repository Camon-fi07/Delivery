import { Package } from './Package';
import { Point } from './Point';

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

export interface CalculateDeliveryResponse {
  success: boolean;
  reason: string;
  options: DeliveryOption[];
}
