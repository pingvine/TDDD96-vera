import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {MatDialogModule} from "@angular/material/dialog";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {PatientStatusViewDialogComponent} from './patient-status-view-dialog.component';

describe('PatientStatusViewDialogComponent', () => {
  let component: PatientStatusViewDialogComponent;
  let fixture: ComponentFixture<PatientStatusViewDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatDialogModule, HttpClientTestingModule],
      declarations: [PatientStatusViewDialogComponent]
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
