import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {
 employee:Employee=new Employee(101,'sam',1000000);
 age:number=90;
 update(){
  this.employee.name='Bittu';
  console.log("age"+this.age);
  
 }
}
class Employee{
eid:number;
name:string;
salary:number;
constructor(eid:number, name:string,salary:number){
  this.eid=eid;
  this.name=name;
  this.salary=salary
}
}
