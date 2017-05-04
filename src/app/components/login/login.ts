import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { AF } from '../../firebase/firebase';

@Component({
  selector: 'login',
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})

export class LoginComponent {


  constructor(public af : AF){

  }

  login(email, psw){
    this.af.login(email, psw);
  }

  logout(){
    this.af.logout();
  }

}
