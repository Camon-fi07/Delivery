import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from 'core/services/user.service';
import { catchError, map, of } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  const userService = inject(UserService);
  const router = inject(Router);

  return userService.getSession().pipe(
    map(() => {
      return true;
    }),
    catchError(() => {
      router.navigate(['auth']);
      return of(false);
    }),
  );
};
