import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';

import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import { AF } from './firebase/firebase';

import { AppComponent } from './app.component';
import { BetBearFormComponent } from './components/bet-bear-form/bet-bear-form.component';
import { FacViewFormsComponent } from './components/fac-view-forms/fac-view-forms.component';
import { LoginComponent } from './components/login/login';

import { AppRoutingModule }     from './app-routing.module';
import { AppSecrets } from './secrets/app-secrets';

export const firebaseConfig = {
  apiKey: AppSecrets.firebaseApi,
  authDomain: "teamdynamics-7eb6e.firebaseapp.com",
  databaseURL: "https://teamdynamics-7eb6e.firebaseio.com",
  projectId: "teamdynamics-7eb6e",
  storageBucket: "teamdynamics-7eb6e.appspot.com",
  messagingSenderId: AppSecrets.firebaseMessagingSenderId,
  provider: AuthProviders.Password,
  method: AuthMethods.Password
};

@NgModule({
  declarations: [
    AppComponent,
    BetBearFormComponent,
    FacViewFormsComponent,
    LoginComponent
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
