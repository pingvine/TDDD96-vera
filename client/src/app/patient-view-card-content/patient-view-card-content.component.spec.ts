import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PatientViewCardContentComponent } from './patient-view-card-content.component';

describe('PatientViewCardContentComponent', () => {
  let component: PatientViewCardContentComponent;
  let fixture: ComponentFixture<PatientViewCardContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientViewCardContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientViewCardContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
