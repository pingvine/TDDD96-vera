import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticeDialogComponent } from './notice-dialog.component';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

describe('NoticeDialogComponent', () => {
  let component: NoticeDialogComponent;
  let fixture: ComponentFixture<NoticeDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoticeDialogComponent ],
      providers: [{ provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: [] }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
