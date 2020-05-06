import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitEventsComponent } from './visit-events.component';

describe('VisitEventsComponent', () => {
  let component: VisitEventsComponent;
  let fixture: ComponentFixture<VisitEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
