import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/User';
import { Person } from '../models/Person';
import { UserType } from '../models/UserType';
import {CookieService} from "ngx-cookie-service";

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private userSource = new BehaviorSubject<User>(new User(-1, new Person(-1, '', ''), UserType.Viewer));

  currentUser = this.userSource.asObservable();

  constructor(private cookieService: CookieService) { }

  changeUser(user: User) {
    this.userSource.next(user);
    this.cookieService.set('username', user.getFirstName());
  }
}
