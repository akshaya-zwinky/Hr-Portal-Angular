import { Component } from '@angular/core';
import { Employee } from '../employee';
import { LoginServiceService } from '../login-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  employee: Employee=new Employee();
  employeeId: string="";
  password:String="";
  desigination:String="";
  
  constructor(private loginservice: LoginServiceService, private router: Router){

  }

  login(){
    this.loginservice.getEmployeeByEmployeeId(this.employeeId).subscribe(
      data=>{
        
        this.employee=data;
        console.log(this.employee);
        
      }

    )
     
    
  }
  gotopage(){
    if(this.employeeId==this.employee.employeeId && this.password==this.employee.password && this.employee.designation=="TL"){
      this.loginservice.setLoginDetails(this.employeeId);
      this.router.navigate(['teamleader']);
    }
    else if(this.employeeId==this.employee.employeeId && this.password==this.employee.password && this.employee.designation=="Manager"){
      this.router.navigate(['Manager']);
    }

  }
  getemployeeId(): string{
    return this.employeeId

  }

  getemployee():string{
    return this.employeeId


  }

}
