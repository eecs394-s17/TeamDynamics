import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UsersService } from '../services/users.service';

@Injectable()
export class StudentGuard implements CanActivate {
  constructor(private router: Router, private usersService: UsersService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.usersService.authState){
      if (this.usersService.permission == 1) {
        return true;
      } else {
        this.router.navigate(['/student/dashboard']);
        return false;
      }
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}