import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewVisitViewComponent } from './new-visit-view.component';

describe('NewPatientComponent', () => {
  let component: NewVisitViewComponent;
  let fixture: ComponentFixture<NewVisitViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewVisitViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewVisitViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
