import { Project } from "./project";

export class Employee{

    employeeId: String="";
    password: string="";
    firstName: string="";
    lastName: string="";
    gender: string="";
    phoneNo:number=0;
    email:string="";
    dateOfBirth:any=null;
    designation:string="";
    salary:number=0.0;

    projectId:string="";
    projectDetails:Project=new Project();
    managerId:string="";
    
}
