import { Component, OnInit } from '@angular/core';
import { RoleType } from '../models/RoleType';

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

  constructor() { }

  ngOnInit(): void {
  }
}
