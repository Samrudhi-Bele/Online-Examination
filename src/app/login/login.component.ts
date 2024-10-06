import { Component } from '@angular/core';
import { User } from '../user.service';
import { LoginServiceService } from '../login-service.service';
import { Router, RouterOutlet } from '@angular/router';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,RouterOutlet],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
message:any="";
user:User=new User('','',0,'');
subject:any="";
constructor(private loginService:LoginServiceService,private router:Router){}

validate()
 {
   this.loginService.validateUser(this.user).subscribe(answer=>{
     
     if(answer)
     {
       sessionStorage.setItem("subject",this.subject);
       sessionStorage.setItem("username",this.user.username);
       this.router.navigate(['question']);
     }
     else
     {
       this.router.navigate(['login']);
       this.message="wrong credentials";
     }

       
   });
 }
}
