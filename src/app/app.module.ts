// Core modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


// Third Party Modules
//// Google Material Design
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
//// AngularFire
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
//// File upload
import { FileUploadModule } from 'ng2-file-upload';

// TD Components
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/component';
import { StudentBetBearFormComponent } from './components/student/bet-bear-form/component';
import { StudentDashboardComponent } from './components/student/dashboard/component';
import { InstructorCreateAssignmentComponent } from './components/instructor/create-assignment/component';
import { InstructorViewFormsComponent } from './components/instructor/view-forms/component';

// TD Routing
import { StudentGuard } from './guards/student.guard';
import { InstructorGuard } from './guards/instructor.guard';
import { AppRoutingModule }     from './app-routing/app-routing.module';

// TD Services
import { UsersService } from './services/users.service';
import { FormsService } from './services/forms.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StudentBetBearFormComponent,
    StudentDashboardComponent,
    InstructorCreateAssignmentComponent,
    InstructorViewFormsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FileUploadModule
  ],
  providers: [
    UsersService,
    FormsService,
    StudentGuard,
    InstructorGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
