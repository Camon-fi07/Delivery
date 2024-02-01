import { Package, SpecialPackage } from 'shared/types/Package';
import { Point, SpecialPoint } from 'shared/types/Point';

export const translateSpecialPackageToPackage = (origin: SpecialPackage): Package => {
  return { height: origin.height, length: origin.length, weight: origin.weight, width: origin.width };
};

export const translateSpecialPointToPoint = (origin: SpecialPoint): Point => {
  return { latitude: origin.latitude, longitude: origin.longitude };
};
