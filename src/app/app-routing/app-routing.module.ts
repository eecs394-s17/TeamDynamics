import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StudentGuard } from '../guards/student.guard';
import { InstructorGuard } from '../guards/instructor.guard';

import { LoginComponent } from '../components/login/component';

import { StudentBetBearFormComponent } from '../components/student/bet-bear-form/component';
import { StudentDashboardComponent } from '../components/student/dashboard/component';

import { InstructorCreateAssignmentComponent } from '../components/instructor/create-assignment/component';
import { InstructorViewFormsComponent } from '../components/instructor/view-forms/component';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'student/bet-bear-form/:id',
    component: StudentBetBearFormComponent,
    canActivate: [StudentGuard]
  },
  {
    path: 'student/bet-bear-form',
    component: StudentBetBearFormComponent,
    canActivate: [StudentGuard]
  },
  {
    path: 'student/dashboard',
    component: StudentDashboardComponent,
    canActivate: [StudentGuard]
  },
  {
    path: 'instructor/view-forms',
    component: InstructorViewFormsComponent,
    canActivate: [InstructorGuard]
  },
  {
    path: 'instructor/create-assignment',
    component: InstructorCreateAssignmentComponent,
    canActivate: [InstructorGuard]
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
]

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})

export class AppRoutingModule{}
