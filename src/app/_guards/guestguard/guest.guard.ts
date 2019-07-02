import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Roles } from 'src/app/_models/roles.enum';

@Injectable({
  providedIn: 'root'
})
export class GuestGuard implements CanActivate {

  constructor(
    private _authService: AuthService,
    private _router: Router
  ) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    this._authService.currentUser.subscribe((currentUser) => {
      if (currentUser) {
        // check if route is restricted by role
        if (currentUser.role == Roles.User) {
          // role not authorised so redirect to home page
          this._router.navigate(['/user-portal/home/all']);
          return false;
        }
        if (currentUser.role == Roles.Artist) {
          // role not authorised so redirect to home page
          this._router.navigate(['/artist-portal/home/all']);
        }
        return false;
      }
    }, (error) => {
      console.log(error);
    });
    // unauthorised so return true
    return true;
  }

}
