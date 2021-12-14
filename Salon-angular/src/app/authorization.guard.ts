import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree,Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { Location } from '@angular/common';

//==========================================================================

@Injectable({
  providedIn: 'root'
})
export class AuthorizationGuard implements CanActivate {
  constructor(private authService : AuthService, private router : Router,public location: Location){}
  canActivate():boolean {
      if (this.authService.isLoggedIn()) {
        return true
      }else{
        this.location.back();
        // this.router.navigate(['/login']);
        return false;
      }
    // return true;
  }
  
}
//====================================================================
