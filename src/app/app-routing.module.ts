import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamLeaderComponent } from './login/team-leader/team-leader.component';
import { LoginPageComponent } from './login/login-page/login-page.component';
import { ProfileComponent } from './login/profile/profile.component';
import { DetailsJobComponent } from './login/details-job/details-job.component';
import { UpdateJobComponent } from './login/update-job/update-job.component';
import { AddJobComponent } from './login/add-job/add-job.component';
import { ProjectManagerComponent } from './login/project-manager/project-manager.component';


const routes: Routes = [
  
  {path:"",component:LoginPageComponent},
  {path:"teamleader",component:TeamLeaderComponent},
  {path:"profile", component:ProfileComponent},
  {path:"logout", component:LoginPageComponent},
  {path:"detailsJob/:jobId",component:DetailsJobComponent},
  {path:"updateJob/:jobId", component:UpdateJobComponent},
  {path:"sendrequest",component:AddJobComponent},
  {path:"Manager",component:ProjectManagerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
