import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NewVisitReasonComponent} from './new-visit-reason.component';

describe('NewVisitReasonComponent', () => {
  let component: NewVisitReasonComponent;
  let fixture: ComponentFixture<NewVisitReasonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NewVisitReasonComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewVisitReasonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
