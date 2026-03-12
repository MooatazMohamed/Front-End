import { Inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const role = localStorage.getItem("role")
  const router = Inject(Router)

  if(role=="User"){
    return true
  }else{
    router.navigate(['/'])
  }
  return false
};
