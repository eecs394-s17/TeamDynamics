import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UsersService } from '../services/users.service';

@Injectable()
export class InstructorGuard implements CanActivate {
  constructor(private router: Router, private usersService: UsersService) {}

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (this.usersService.permission > 0){
      if (this.usersService.permission == 2) {
        return true;
      } else if (this.usersService.permission == 1) {
        this.router.navigate(['/student/dashboard']);
        return false;
      } else {
        this.router.navigate(['/login']);
        return false;
      }
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}