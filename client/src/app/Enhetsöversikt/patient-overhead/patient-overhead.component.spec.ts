import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientOverheadComponent } from './patient-overhead.component';

describe('PatientmenyComponent', () => {
  let component: PatientOverheadComponent;
  let fixture: ComponentFixture<PatientOverheadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientOverheadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientOverheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
