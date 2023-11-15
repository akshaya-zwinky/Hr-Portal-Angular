import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from '../login-service.service';
import { Job } from '../job';

@Component({
  selector: 'app-project-manager',
  templateUrl: './project-manager.component.html',
  styleUrls: ['./project-manager.component.css']
})
export class ProjectManagerComponent implements OnInit {
  employeeid:string="";
  
  jobDescription:Job[]=[];
  constructor( private router: Router, private loginservice:LoginServiceService){
    
  }
  ngOnInit(): void {
    this.employeeid=this.loginservice.getLoginDetails();
  }
  reloadData():void{
    this.loginservice.getJobDescription(this.employeeid).subscribe(
      data=>{
        this.jobDescription=data;
        console.log(this.jobDescription);

      }
    )
    

  }
}
