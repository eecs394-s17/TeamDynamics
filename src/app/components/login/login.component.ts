import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { MdSnackBar } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  constructor(  public usersService: UsersService,
                private router: Router,
                private snackbar: MdSnackBar){}

  login(){
    this.usersService.login();
  }
}
