import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user = new BehaviorSubject<string>('John');
  //to broadcast the user as observable
  //so i can moniter this anywhere, i can observe the changes now
  cast = this.user.asObservable();
  constructor() { }
  editUser(newUser){
    this.user.next(newUser);//a mothod in rx.js //this will basically replace the old value of user
  }
}
