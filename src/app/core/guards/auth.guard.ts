import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { UserService } from 'core/services/user.service';

export const authGuard: CanActivateFn = (route, state) => {
  const userService = inject(UserService);

  return !!userService.token;
};
