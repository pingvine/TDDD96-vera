import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PatientStatusEditViewEComponent } from './patient-status-edit-view-e.component';

describe('PatientStatusEditViewEComponent', () => {
  let component: PatientStatusEditViewEComponent;
  let fixture: ComponentFixture<PatientStatusEditViewEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientStatusEditViewEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientStatusEditViewEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
