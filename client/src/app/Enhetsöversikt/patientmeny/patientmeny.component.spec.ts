import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientmenyComponent } from './patientmeny.component';

describe('PatientmenyComponent', () => {
  let component: PatientmenyComponent;
  let fixture: ComponentFixture<PatientmenyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientmenyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientmenyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
