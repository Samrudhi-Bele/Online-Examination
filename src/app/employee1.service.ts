import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Employee1Service {

  constructor(private httpclient:HttpClient) { }
  saveEmployee(employee:Employee){
    return this.httpclient.post<void>("http://localhost:8080/saveEmployee",employee)
  }
  }

export class Employee{
  eid:number;
  name:string;
  salary:number;
  constructor( eid:number,name:string, salary:number){
  this.eid=eid;
  this.name=name;
  this.salary=salary;


  }
}