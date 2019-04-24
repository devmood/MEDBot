import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatToolbarModule, MatButtonModule, MatIconModule, MatCardModule, MatInputModule, MatProgressSpinnerModule, MatGridListModule } from '@angular/material';
import { DoctorsComponent } from './components/doctors/doctors.component';
import { PatientsComponent } from './components/patients/patients.component';
import { CreateInterviewComponent } from './components/create-interview/create-interview.component';
import { InterviewComponent } from './components/interview/interview.component';
import { LoginComponent } from './components/login/login.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './_helpers/jwt.interceptor';
import { ErrorInterceptor } from './_helpers/error.inceptor';
import { SharedService } from './services/shared.service';
import { BrowseInterviewsComponent } from './components/browse-interviews/browse-interviews.component';
import { AnswerInterviewComponent } from './components/answer-interview/answer-interview.component';
import { ManagePatientComponent } from './components/manage-patient/manage-patient.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { ManageDoctorComponent } from './components/manage-doctor/manage-doctor.component';

@NgModule({
  declarations: [
    AppComponent,
    DoctorsComponent,
    PatientsComponent,
    InterviewComponent,
    LoginComponent,
    QuestionsComponent,
    CreateInterviewComponent,
    BrowseInterviewsComponent,
    AnswerInterviewComponent,
    ManagePatientComponent,
    ChangePasswordComponent,
    ManageDoctorComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatGridListModule
  ],
  exports: [MatButtonModule, MatToolbarModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
