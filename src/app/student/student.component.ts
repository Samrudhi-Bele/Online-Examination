import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-student',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent {
  //arrayname :type=[values];

  //values can be numbers,string,javascript object ,Employee object etc.
 students:any[]=[{rno:1,name:'Sam'},{rno:2,name:'Bittu'}]
 a:any=10;
 constructor(){
  this.a='java';
 }
}
