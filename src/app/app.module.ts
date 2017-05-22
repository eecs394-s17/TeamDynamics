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
import { BetBearFormComponent } from './components/bet-bear-form/bet-bear-form.component';
import { CreateAssignmentComponent } from './components/create-assignment/create-assignment.component';
import { FacViewFormsComponent } from './components/fac-view-forms/fac-view-forms.component';
import { LoginComponent } from './components/login/login.component';
import { StudentDashboardComponent } from './components/student-dashboard/student-dashboard.component';
// TD Routing
import { StudentGuard } from './guards/student.guard';
import { ProfessorGuard } from './guards/professor.guard';
import { AppRoutingModule }     from './app-routing/app-routing.module';

// TD Services
import { UsersService } from './services/users.service';
import { FormsService } from './services/forms.service';

@NgModule({
  declarations: [
    AppComponent,
    BetBearFormComponent,
    CreateAssignmentComponent,
    FacViewFormsComponent,
    LoginComponent,
    StudentDashboardComponent
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
    ProfessorGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
