import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AF } from './firebase/firebase';


@Injectable()
export class AuthGuard implements CanActivate {
 
    constructor(private router: Router, private afService: AF) {

    }
 
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.afService.currentUser) {
            // logged in so return true
            return true;
        }
 
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login-page']);
        return false;
    }
}