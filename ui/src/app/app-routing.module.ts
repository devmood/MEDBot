import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DoctorsComponent } from './components/doctors/doctors.component';
import { PatientsComponent } from './components/patients/patients.component';
import { HelloWorldComponent } from './components/hello-world/hello-world.component';
import { InterviewComponent } from './components/interview/interview.component';
import { LoginComponent } from './components/login/login.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { CreateInterviewComponent } from './components/create-interview/create-interview.component';
import { BrowseInterviewsComponent } from './components/browse-interviews/browse-interviews.component'
import { AuthGuard } from './_guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/helloworld', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'interview/:id', component: InterviewComponent },
  { path: 'browseInterviews', component: BrowseInterviewsComponent },
  { path: 'doctors/create-interview', component: CreateInterviewComponent },
  { path: 'helloworld', component: HelloWorldComponent },
  { path: 'doctors', component: DoctorsComponent, canActivate: [AuthGuard] },
  { path: 'patients', component: PatientsComponent, canActivate: [AuthGuard] },
  { path: 'questions', component: QuestionsComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
