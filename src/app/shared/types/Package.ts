import { BaseResponse } from './Response';

export interface Package {
  length: number;
  width: number;
  weight: number;
  height: number;
}

export interface SpecialPackage extends Package {
  id: string;
  name: string;
}

export interface PackageTypesResponse extends BaseResponse {
  packages: SpecialPackage[];
}
