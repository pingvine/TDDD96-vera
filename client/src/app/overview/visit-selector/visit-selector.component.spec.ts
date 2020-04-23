import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitSelectorComponent } from './visit-selector.component';

describe('PatientmenyComponent', () => {
  let component: VisitSelectorComponent;
  let fixture: ComponentFixture<VisitSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
