import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewVisitInformationComponent } from './new-visit-information.component';

describe('NewVisitInformationComponent', () => {
  let component: NewVisitInformationComponent;
  let fixture: ComponentFixture<NewVisitInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewVisitInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewVisitInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
