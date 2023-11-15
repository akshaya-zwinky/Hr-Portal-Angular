import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';
import { Job } from './job';


@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
 loginID: string = ""

  constructor(private httpClient: HttpClient) {

  }
  setLoginDetails(value:string) {
    this.loginID=value;
    
  }
  clearValues(){
    this.loginID = "";
  }
  getLoginDetails():string {
    return this.loginID;
  }

  getEmployeeByEmployeeId(employeeId: string): Observable<Employee> {
    return this.httpClient.get<Employee>(" http://localhost:8081/employeeapi/getone/" + employeeId);

  }
 getJobDescription(employeeId:string):Observable<Job[]>{
  return this.httpClient.get<Job[]>("http://localhost:8081/jobapi/getall/" + employeeId);
 }
 deleteJobDescription(jobId:string):Observable<boolean>{
  return this.httpClient.delete<boolean>("http://localhost:8081/jobapi/delete/"+ jobId)
 }

 detailsJobDescription(jobId:string):Observable<Job>{
  return this.httpClient.get<Job>(" http://localhost:8081/jobapi/getone/" + jobId)
 }

 updateJobDescription(job:Job):Observable<Job>{
  return this.httpClient.put<Job>(" http://localhost:8081/jobapi/update",job);
 }
 getJobByJobId(jobId:string):Observable<Job>{
  return this.httpClient.get<Job>(" http://localhost:8081/jobapi/getone/" + jobId);
 }

 getallJob():Observable<Job>{
  return this.httpClient.get<Job>(" http://localhost:8081/jobapi/getAll");
 }

 addJob(job:Job):Observable<boolean>{
  return this.httpClient.post<boolean>("http://localhost:8081/jobapi/add",job)
 }
 getAllJobDescripition():Observable<Job[]>{
  return this.httpClient.get<Job[]>(" http://localhost:8081/jobapi/getAll")
 }
}
