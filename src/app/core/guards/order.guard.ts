import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { CalculationInfo } from 'core/services/calculationInfo.service';

export const orderGuard: CanActivateFn = (route, state) => {
  const calclationInfoService = inject(CalculationInfo);
  const router = inject(Router);
  const isCalculated =
    !!calclationInfoService.options && !!calclationInfoService.senderPoint && !!calclationInfoService.receiverPoint;

  if (!isCalculated) {
    router.navigate(['']);
  }

  return isCalculated;
};
