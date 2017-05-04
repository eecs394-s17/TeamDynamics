import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';

import { AngularFireModule } from 'angularfire2';
import { AF } from './firebase/firebase';
export const firebaseConfig = {
  apiKey: "AIzaSyAKVHJkONhx8gyWjJ0Z_AzpqLA3vjR3asI",
  authDomain: "teamdynamics-2eae2.firebaseapp.com",
  databaseURL: "https://teamdynamics-2eae2.firebaseio.com",
  projectId: "teamdynamics-2eae2",
  storageBucket: "teamdynamics-2eae2.appspot.com",
  messagingSenderId: "560129471399"
};

import { AppComponent } from './app.component';
import { BetBearFormComponent } from './components/bet-bear-form/bet-bear-form.component';

import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    BetBearFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
  ],
  providers: [
    AF
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
