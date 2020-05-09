import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitReasonComponent } from './visit-reason.component';

describe('VisitReasonComponent', () => {
  let component: VisitReasonComponent;
  let fixture: ComponentFixture<VisitReasonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitReasonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitReasonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
