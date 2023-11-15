import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../login-service.service';
import { Job } from '../job';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details-job',
  templateUrl: './details-job.component.html',
  styleUrls: ['./details-job.component.css']
})
export class DetailsJobComponent  implements OnInit{
  jobId:string="";
  job:Job=new Job();
  constructor(private loginservice: LoginServiceService,private activatedRouter : ActivatedRoute,private router: Router){


  }
  ngOnInit(): void {
    this.jobId=this.activatedRouter.snapshot.params['jobId'];
    console.log(this.jobId);
    this.loginservice.detailsJobDescription(this.jobId).subscribe(
      data=>{
        
        this.job=data;
        console.log(this.job);
      }

    )
  }
  Backto(){
    this.router.navigate(['teamleader']);
    this.loginservice.getJobDescription;
   }
}
