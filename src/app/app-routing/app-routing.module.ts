import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentGuard } from '../guards/student.guard';
import { ProfessorGuard } from '../guards/professor.guard';
import { BetBearFormComponent } from '../components/bet-bear-form/bet-bear-form.component';
import { CreateAssignmentComponent } from '../components/create-assignment/create-assignment.component';
import { FacViewFormsComponent } from '../components/fac-view-forms/fac-view-forms.component';
import { LoginComponent } from '../components/login/login.component';
import { StudentDashboardComponent } from '../components/student-dashboard/student-dashboard.component';

const routes: Routes = [
  {
    path: 'bet-bear-form/:id',
    component: BetBearFormComponent,
    canActivate: [StudentGuard]
  },
  {
    path: 'bet-bear-form',
    component: BetBearFormComponent,
    canActivate: [StudentGuard]
  },
  {
    path: 'fac-view-forms',
    component: FacViewFormsComponent,
    canActivate: [StudentGuard]
  },
  {
    path: 'login-page',
    component: LoginComponent},
  {
    path: 'student-dashboard',
    component: StudentDashboardComponent,
    canActivate: [StudentGuard]
  },
  {
    path: 'create-assignment',
    component: CreateAssignmentComponent
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