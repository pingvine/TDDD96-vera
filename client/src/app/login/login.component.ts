import {
  Component, EventEmitter, OnInit, Output,
} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { RoleType } from '../models/RoleType';
import { User } from '../models/User';
import { Person } from '../models/Person';
import { UserType } from '../models/UserType';
import { ServerService } from '../services/server.service';
import { SpinnerOverlayComponent } from '../spinner-overlay/spinner-overlay.component';
import { LoginService } from '../services/login.service';

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

  constructor(private serverService: ServerService,
              private loginService: LoginService,
              private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async logIn() {
    // Spinner overlay
    const dialogRef: MatDialogRef<SpinnerOverlayComponent> = this.dialog.open(SpinnerOverlayComponent,
      {
        panelClass: 'transparent',
        disableClose: true,
      });

    console.log(`Selected role:${this.selectedRole}`);
    console.log(`Selected username:${this.userName.value}`);

    this.serverService.getId().subscribe((msg) => {
      const { id } = msg;
      const fname = this.userName.value;
      const lname = '';
      const person = new Person(id, fname, lname);
      const user = new User(id, person, UserType.Editor);
      user.setRoleType(this.selectedRole);

      this.serverService.createUser(user).subscribe((msg) => {
        console.log('MESSAGE:');
        console.log(msg);
      });

      this.loginService.changeUser(user);
    },
    (error) => {
      console.log(`Error in login getId: ${error.message}`);
      dialogRef.close();
    },
    () => {
      dialogRef.close();
    });
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
