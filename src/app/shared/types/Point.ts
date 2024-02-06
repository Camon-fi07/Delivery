import { BaseResponse } from './Response';

export interface Point {
  latitude: number;
  longitude: number;
}

export interface SpecialPoint extends Point {
  id: string;
  name: string;
}

export interface DeliveryPointsResponse extends BaseResponse {
  points: SpecialPoint[];
}

export interface Address {
  street: string;
  house: string;
  appartament: string;
  comment: string;
}
