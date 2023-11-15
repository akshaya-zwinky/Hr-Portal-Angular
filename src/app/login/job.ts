import { Employee } from "./employee";
import { Project } from "./project";

export class Job{
     jobId:string="";
	title:string="";
	 qualification:string="";
	 skill1:string="";
	  skill2:string="";
	 skill3:string="";
	 projectId:string="";
	 employeeId:string="";
	 requiredEmployees:number=0;
	 status:string="";
	 projectDetails:Project=new Project();
	 employee:Employee=new Employee();
}