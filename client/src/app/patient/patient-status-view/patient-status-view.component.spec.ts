import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PatientStatusViewComponent } from './patient-status-view.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

describe('PatientStatusViewComponent', () => {
  let component: PatientStatusViewComponent;
  let fixture: ComponentFixture<PatientStatusViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [MatDialogModule],
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



