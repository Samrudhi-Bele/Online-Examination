import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  template: ` <span> value of meassage is {{message}} </span>`,
  styleUrl: './child.component.css'
})
export class ChildComponent {
  //@Input marks field as input property which will get value from component 
  @Input()
message:string="";
}