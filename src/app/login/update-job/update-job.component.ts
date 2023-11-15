import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../login-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Job } from '../job';

@Component({
  selector: 'app-update-job',
  templateUrl: './update-job.component.html',
  styleUrls: ['./update-job.component.css']
})
export class UpdateJobComponent implements OnInit {
  jobId:string="";
  job: Job=new Job();
  flag: boolean=false
  constructor(private loginservice: LoginServiceService,private activatedRouter: ActivatedRoute,private router: Router){


  }
  ngOnInit(): void {
    this.jobId=this.activatedRouter.snapshot.params['jobId'];
    this.loginservice.getJobByJobId(this.jobId).subscribe(
      data=>{
        this.job=data
        console.log(data);
      }
    )
  }
  updateJob(){
    this.loginservice.updateJobDescription(this.job).subscribe(
      data=>{
        this.job=data
        console.log(data)
        this.flag=true;
      }
    )
  }

  Backto(){
    this.router.navigate(['teamleader']);
    this.loginservice.getJobDescription;
   }

}
