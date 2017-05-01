import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AF } from '../Pages/firebase/firebase';
export const firebaseConfig = {
  apiKey: "AIzaSyAKVHJkONhx8gyWjJ0Z_AzpqLA3vjR3asI",
  authDomain: "teamdynamics-2eae2.firebaseapp.com",
  databaseURL: "https://teamdynamics-2eae2.firebaseio.com",
  projectId: "teamdynamics-2eae2",
  storageBucket: "teamdynamics-2eae2.appspot.com",
  messagingSenderId: "560129471399"
};



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    AF
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
