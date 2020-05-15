import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewVisitTriageComponent } from './new-visit-triage.component';

describe('NewVisitTriageComponent', () => {
  let component: NewVisitTriageComponent;
  let fixture: ComponentFixture<NewVisitTriageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewVisitTriageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewVisitTriageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
