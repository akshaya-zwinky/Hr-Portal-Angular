import { Component, OnInit } from '@angular/core';
 
import { Router } from '@angular/router';
import { LoginServiceService } from '../login-service.service';
import { Job } from '../job';
 

@Component({
  selector: 'app-team-leader',
  templateUrl: './team-leader.component.html',
  styleUrls: ['./team-leader.component.css']
})
export class TeamLeaderComponent implements OnInit{
  employeeid:string="";
  
  jobDescription:Job[]=[];
   constructor(  private router: Router, private loginservice: LoginServiceService){

   }
  ngOnInit(): void {
    this.employeeid=this.loginservice.getLoginDetails();
  this.reloadData();
  }
  reloadData():void{
    this.loginservice.getJobDescription(this.employeeid).subscribe(
      data=>{
        this.jobDescription=data;
        console.log(this.jobDescription);

      }
    )
    

  }
  gotoprofile(){
    this.router.navigate(['profile']);
  }

  gotologin(){
    this.loginservice.clearValues()
    this.router.navigate(['logout']);
  }

  deleteJob(jobId:string){
    this.loginservice
    this.loginservice.deleteJobDescription(jobId).subscribe(
      data=>{
        console.log(data)
        this.reloadData();
      }
      );
    

  }
  detailsJob(jobId:string){
    this.router.navigate(['detailsJob',jobId]);
  }
  updateJobdescription(jobId:string){
    this.router.navigate(['updateJob',jobId])
  }

  sendrequest(){
    this.router.navigate(['sendrequest']);
  }
   
 
}
