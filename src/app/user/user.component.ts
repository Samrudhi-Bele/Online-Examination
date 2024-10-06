import { Component, OnInit } from '@angular/core';
import { User, UserService } from '../user.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent  implements OnInit {
user:User=new User('','',0,'');
users:User[]=[];
//in java User[] users={};
message:String="";
constructor(private service:UserService){}

ngOnInit():void{
  this.getAllUsers();

}
 
saveUser(){
  this.service.saveUser(this.user).subscribe(message=>this.message="object is save");

  //user ka object srevice  ko denga
}
getAllUsers()
  {
    this.service.getAllUsers().subscribe(userarray=>this.users=userarray);
    //[user[]] Observable object given by getAllUsers()
    //User user =query.list().get(0);
  }
  getUser(){
    this.service.getUser(this.user.username).subscribe(userobject=>this.user=userobject);
  }
  deleteUser(){
    this.service.deleteUser(this.user.username).subscribe(message=>this.message="object is deleted");
  }

}
