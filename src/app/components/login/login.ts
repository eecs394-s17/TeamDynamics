import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { AF } from '../../firebase/firebase';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { MdSnackBar } from '@angular/material';


@Component({
  selector: 'login',
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})

export class LoginComponent {


  constructor(public af : AF, private router: Router, private snackbar: MdSnackBar){

  }

  login(){
    this.af.login().then(loggedIn => {
      if (loggedIn) {
        this.router.navigate(['/']);
      } else {
        this.snackbar.open("Log In Unsuccessful");
        setTimeout(_ => this.snackbar.dismiss(), 5000);
      }
    });
  }

  logout(){
    this.af.logout();
  }

}
