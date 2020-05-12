import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/User';
import { Person } from '../models/Person';
import { UserType } from '../models/UserType';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private userSource = new BehaviorSubject<User>(new User(-1, new Person(-1, '', ''), UserType.Viewer));

  currentUser = this.userSource.asObservable();

  constructor() {
    if (sessionStorage.getItem('user')) {
      console.log('USER EXISTS IN SESSION');
      const userJson = JSON.parse(sessionStorage.getItem('user'));
      const userObj = new User(0, new Person(0, '', ''), UserType.Viewer);
      userObj.setRoleType(userJson.roleType);
      userObj.setFirstName(userJson.firstName);
      userObj.setLastName(userJson.lastName);
      userObj.setId(userJson.socialId);
      userObj.setUserType(userJson.userType);
      this.userSource.next(userObj);
    } else {
      // User does not exist
    }
  }

  changeUser(user: User) {
    this.userSource.next(user);
    sessionStorage.setItem('user', JSON.stringify(user));
  }
}
