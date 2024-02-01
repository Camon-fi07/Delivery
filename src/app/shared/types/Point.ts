export interface Point {
  latitude: number;
  longitude: number;
}

export interface SpecialPoint extends Point {
  id: string;
  name: string;
}

export interface DeliveryPointsResponse {
  success: boolean;
  reason: string;
  points: SpecialPoint[];
}
