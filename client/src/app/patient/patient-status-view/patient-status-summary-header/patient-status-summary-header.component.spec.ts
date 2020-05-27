import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PatientStatusSummaryHeaderComponent } from './patient-status-summary-header.component';

describe('PatientStatusSummaryHeaderComponent', () => {
  let component: PatientStatusSummaryHeaderComponent;
  let fixture: ComponentFixture<PatientStatusSummaryHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientStatusSummaryHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientStatusSummaryHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
