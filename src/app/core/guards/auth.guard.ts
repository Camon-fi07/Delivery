import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from 'core/services/user.service';

export const authGuard: CanActivateFn = (route, state) => {
  const userService = inject(UserService);
  const router = inject(Router);
  let isAuth = false;
  userService.getIsAuth().subscribe({
    next: (res) => {
      isAuth = res;
    },
  });

  if (!isAuth) router.navigate(['auth']);

  return isAuth;
};
