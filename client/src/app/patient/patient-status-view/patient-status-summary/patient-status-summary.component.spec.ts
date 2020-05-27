import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {PatientStatusSummaryComponent} from './patient-status-summary.component';

describe('PatientStatusSummaryComponent', () => {
  let component: PatientStatusSummaryComponent;
  let fixture: ComponentFixture<PatientStatusSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PatientStatusSummaryComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientStatusSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
