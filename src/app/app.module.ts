import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';

import { AngularFireModule } from 'angularfire2';
import { AF } from './firebase/firebase';
import { firebaseConfig } from './secrets/firebaseConfig';

import { AppComponent } from './app.component';
import { BetBearFormComponent } from './components/bet-bear-form/bet-bear-form.component';
import { FacViewFormsComponent } from './components/fac-view-forms/fac-view-forms.component';

import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    BetBearFormComponent,
    FacViewFormsComponent
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
