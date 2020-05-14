import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientStatusViewDialogComponent } from './patient-status-view-dialog.component';

describe('PatientStatusViewDialogComponent', () => {
  let component: PatientStatusViewDialogComponent;
  let fixture: ComponentFixture<PatientStatusViewDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientStatusViewDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientStatusViewDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
