import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router:Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if( localStorage.getItem('uname')== null){
          this.router.navigate(['/home']);
          return false;

      }else{
        return true;
      }
  }
}


@Injectable({
  providedIn: 'root'
})
export class GlobalGuard implements CanActivate {

  constructor(private router:Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if( localStorage.getItem('uname') != null){
          this.router.navigate(['/dashboard']);
          return false;

      }else{
        return true;
      }
  }
}

