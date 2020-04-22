import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitSelectorTriageComponent } from './visit-selector-triage.component';

describe('TriageSmallComponent', () => {
  let component: VisitSelectorTriageComponent;
  let fixture: ComponentFixture<VisitSelectorTriageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitSelectorTriageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitSelectorTriageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
