import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { PatientStatusViewComponent } from './patient-status-view.component';

describe('PatientStatusViewComponent', () => {
  let component: PatientStatusViewComponent;
  let fixture: ComponentFixture<PatientStatusViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [MatDialogModule, HttpClientTestingModule],
      declarations: [PatientStatusViewComponent],
      providers: [MatDialog]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientStatusViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});



