import { Package, SpecialPackage } from 'shared/types/Package';

export const translateSpecialPackageToPackage = (origin: SpecialPackage): Package => {
  return { height: origin.height, length: origin.length, weight: origin.weight, width: origin.width };
};
