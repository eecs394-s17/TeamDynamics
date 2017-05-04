import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BetBearFormComponent } from './components/bet-bear-form/bet-bear-form.component';
import { FacViewFormsComponent } from './components/fac-view-forms/fac-view-forms.component';
import { LoginComponent } from './components/login/login';

const routes: Routes = [
  {path: 'bet-bear-form',component: BetBearFormComponent},
  {path: 'fac-view-forms', component: FacViewFormsComponent},
  {path: 'login-page', component: LoginComponent},
  {
    path: '',
    redirectTo: '/bet-bear-form',
    pathMatch: 'full'
  },
]

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})

export class AppRoutingModule{}
