import { Component } from '@angular/core';
import { Job } from '../job';
import { LoginServiceService } from '../login-service.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-add-job',
  templateUrl: './add-job.component.html',
  styleUrls: ['./add-job.component.css']
})
export class AddJobComponent {
  job:Job=new Job();
  flag: boolean=false;
  constructor(private loginservice: LoginServiceService,private router: Router){

  }

  saveJob(){
    this.job.employeeId=this.loginservice.getLoginDetails();
    this.loginservice.addJob(this.job).subscribe(
      data=>{
        console.log(data);
        this.flag=data;
      }
    );

  }
 Backto(){
  this.router.navigate(['teamleader']);
  this.loginservice.getJobDescription;
 }

}
