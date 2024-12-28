import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { tap } from 'rxjs';

export const homeGuard: CanActivateFn = () => {
  const route = inject(Router)
  const auth = inject(AuthService)
  return auth.loggedInStatus$().pipe(tap((loggedInStatus) => {!loggedInStatus && route.navigate(['login'])}));

  // if (!auth.loggedInStatus$()) {
  //   return true;
  // }else{
  //   route.navigate(['login']);
  //   return false;
  // }

};
