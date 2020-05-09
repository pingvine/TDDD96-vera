import {Component, OnInit} from '@angular/core';
import {RoleType} from "../models/RoleType";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  roles: RoleType[] = [RoleType.Administrator, RoleType.AssistingNurse]

  constructor() { }

  ngOnInit(): void {
  }

}
