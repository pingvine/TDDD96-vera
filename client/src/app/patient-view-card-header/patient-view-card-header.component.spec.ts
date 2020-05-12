import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientViewCardHeaderComponent } from './patient-view-card-header.component';

describe('PatientViewCardHeaderComponent', () => {
  let component: PatientViewCardHeaderComponent;
  let fixture: ComponentFixture<PatientViewCardHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientViewCardHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientViewCardHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
