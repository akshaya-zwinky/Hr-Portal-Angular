import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../login-service.service';
import { Employee } from '../employee';
import { Router } from '@angular/router';
 

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  employeeId:string="";
  employee:Employee=new Employee();
  constructor(private loginservice: LoginServiceService, private router: Router){

  }
  ngOnInit(): void {
    this.employeeId=this.loginservice.getLoginDetails();
    this.loginservice.getEmployeeByEmployeeId(this.employeeId).subscribe(
      data=>{
        
        this.employee=data;
        console.log(this.employee);
      }

    )
    
     
  }
  Backto(){
    this.router.navigate(['teamleader']);
    this.loginservice.getJobDescription;
   } 

  }

   


