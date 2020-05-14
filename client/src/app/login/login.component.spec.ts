import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {ServerService} from "../services/server.service";
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import {RouterTestingModule} from "@angular/router/testing";

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [HttpClientTestingModule, MatDialogModule, RouterTestingModule],
      providers: [ ServerService, MatDialog ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
