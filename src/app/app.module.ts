import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login/login-page/login-page.component';
import { TeamLeaderComponent } from './login/team-leader/team-leader.component';
import { ProfileComponent } from './login/profile/profile.component';
import { DetailsJobComponent } from './login/details-job/details-job.component';
import { UpdateJobComponent } from './login/update-job/update-job.component';
import { AddJobComponent } from './login/add-job/add-job.component';
import { ProjectManagerComponent } from './login/project-manager/project-manager.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    TeamLeaderComponent,
    ProfileComponent,
    DetailsJobComponent,
    UpdateJobComponent,
    AddJobComponent,
    ProjectManagerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
