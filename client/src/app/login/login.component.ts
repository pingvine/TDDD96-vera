import {
  Component, EventEmitter, OnInit, Output,
} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { RoleType } from '../models/RoleType';
import { User } from '../models/User';
import { Person } from '../models/Person';
import { UserType } from '../models/UserType';

interface Role {
  value: RoleType;
  viewValue: string;
}


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  roles: Role[] = [
    { value: RoleType.AssistingNurse, viewValue: 'USK' },
    { value: RoleType.Nurse, viewValue: 'SSK' },
    { value: RoleType.Doctor, viewValue: 'LÄK' },
    { value: RoleType.Administrator, viewValue: 'Admin' },
  ]

  @Output() logInClick = new EventEmitter<any>();

  selectedRole: RoleType;

  userName = new FormControl('', [Validators.required, Validators.nullValidator])

  roleControl = new FormControl('', [Validators.required, Validators.nullValidator]);

  constructor() { }

  ngOnInit(): void {
  }

  logIn() {
    console.log(`Selected role:${this.selectedRole}`);
    console.log(`Selected username:${this.userName.value}`);

    const id = 0;
    const fname = this.userName.value;
    const lname = '';
    const person = new Person(id, fname, lname);
    person.setRoleType(this.selectedRole);
    const user = new User(id, person, UserType.Editor);
  }

  getUsernameErrorMessage() {
    if (this.userName.hasError('required')) {
      return 'Du måste skriva in ett användarnamn.';
    }
  }

  getSelectorErrorMessage() {
    if (this.userName.hasError('required')) {
      return 'Du måste välja en roll.';
    }
  }

  getButtonDisabled() {
    return !this.userName.value || !this.selectedRole;
  }
}
