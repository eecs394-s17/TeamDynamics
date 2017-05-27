import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StudentGuard } from '../guards/student.guard';
import { InstructorGuard } from '../guards/instructor.guard';

import { LoginComponent } from '../components/login/component';

import { StudentBetBearFormComponent } from '../components/student/bet-bear-form/component';
import { StudentDashboardComponent } from '../components/student/dashboard/component';
import { StudentFeedbackListComponent } from '../components/student/feedback-list/component';
import { StudentFeedbackComponent } from '../components/student/feedback/component';

import { InstructorCreateAssignmentComponent } from '../components/instructor/create-assignment/component';
import { InstructorReviewFormComponent } from '../components/instructor/review-form/component';
import { InstructorDashboardComponent } from '../components/instructor/dashboard/component';

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
    path: 'student/dashboard',
    component: StudentDashboardComponent,
    canActivate: [StudentGuard]
  },
  {
    path: 'student/feedback-list',
    component: StudentFeedbackListComponent,
    canActivate: [StudentGuard]
  },
  {
    path: 'student/feedback',
    component: StudentFeedbackComponent,
    canActivate: [StudentGuard]
  },
    {
    path: 'instructor/dashboard',
    component: InstructorDashboardComponent,
    canActivate: [InstructorGuard]
  },
  {
    path: 'instructor/review-form/:id',
    component: InstructorReviewFormComponent,
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
