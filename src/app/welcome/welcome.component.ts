import { Component, OnInit } from '@angular/core';
import { TitlePipePipe } from '../title-pipe.pipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [CommonModule,TitlePipePipe],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent implements OnInit {
  username:any="";
  birthdate:Date=new Date(2000,1,26);
  imgurl:string ="assets/Images/Black Rose.jpeg";
  ngOnInit(): void 
  {
    
    this.username=sessionStorage.getItem('username');
  }
  show:boolean=false;
  persons:any[]=[{name:'sachin',country:'india'},

  {name:'mac',country:'america'},
  
  {name:'zen',country:'france'},
  
  {name:'mahesh',country:'india'},]

  getcolor(countryname:string){
    switch(countryname)
    {
  
        case 'india':
      return 'green';
  
    case 'america':
      return 'red';
  
    case 'france':
      return 'blue';
    }
  
    return "grey";	
  }
}
