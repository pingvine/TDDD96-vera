import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientViewHeaderComponent } from './patient-view-header.component';

describe('PatientViewHeaderComponent', () => {
  let component: PatientViewHeaderComponent;
  let fixture: ComponentFixture<PatientViewHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientViewHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientViewHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
