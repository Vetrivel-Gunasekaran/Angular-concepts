import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class RestrictUserGuard implements CanActivate {
  constructor(private router: Router, private loginService: LoginService) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const isUserLoggedIn = this.loginService.isLogin;
      if (!isUserLoggedIn) {
        alert('UnAuthorised User');
        this.router.navigate(['login']);
        return false;
      }
      return true;
  }
  
}
