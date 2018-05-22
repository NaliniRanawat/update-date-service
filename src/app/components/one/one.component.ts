import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {
user:string;
newUser:string;
  constructor(private usersService:UserService) { }

  ngOnInit() {
    this.usersService.cast.subscribe(user=>this.user = user);
  }
  editTheUser(){
    this.usersService.editUser(this.newUser);
  }

}

