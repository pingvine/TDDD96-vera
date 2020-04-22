import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TriageSmallComponent } from './triage-small.component';

describe('TriageSmallComponent', () => {
  let component: TriageSmallComponent;
  let fixture: ComponentFixture<TriageSmallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TriageSmallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TriageSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
