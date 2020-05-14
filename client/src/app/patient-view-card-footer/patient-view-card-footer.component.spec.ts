import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientViewCardFooterComponent } from './patient-view-card-footer.component';

describe('PatientViewCardFooterComponent', () => {
  let component: PatientViewCardFooterComponent;
  let fixture: ComponentFixture<PatientViewCardFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientViewCardFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientViewCardFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
