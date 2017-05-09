import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './authguard';
import { BetBearFormComponent } from './components/bet-bear-form/bet-bear-form.component';
import { FacViewFormsComponent } from './components/fac-view-forms/fac-view-forms.component';
import { LoginComponent } from './components/login/login';
import { StudentDashboardComponent } from './components/student-dashboard/student-dashboard';
const routes: Routes = [
  {
    path: 'bet-bear-form/:id',
    component: BetBearFormComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'bet-bear-form',
    component: BetBearFormComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'fac-view-forms',
    component: FacViewFormsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login-page',
    component: LoginComponent},
  {
    path: 'student-dashboard',
    component: StudentDashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '',
    redirectTo: 'student-dashboard',
    pathMatch: 'full'
  },
]

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})

export class AppRoutingModule{}
