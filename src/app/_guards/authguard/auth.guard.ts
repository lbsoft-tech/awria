import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

  constructor(private _authService: AuthService, private _router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    // if (this._authService.isAuthenticated()) {
    //   if (!this._authService.isAuthValid()) {
    //     this._router.navigate(['/home-page/login']);
    //     localStorage.clear();
    //     return false;
    //   }
    //   return true;

    // }
    // // navigate to login page
    // this._router.navigate(['/home-page/login']);
    // // you can save redirect url so after authing we can move them back to the page they requested
    // return false;
    const currentUser = this._authService.currentUserValue;
    if (currentUser) {
      // check if route is restricted by role
      if (route.data.roles && route.data.roles.indexOf(currentUser.role) === -1) {
        // role not authorised so redirect to home page
        this._router.navigate(['/']);
        return false;
      }

      // authorised so return true
      return true;
    }

    // not logged in so redirect to login page with the return url
    this._router.navigate(['/home-page/login'], { queryParams: { returnUrl: state.url } });
    return false;
  }

}
