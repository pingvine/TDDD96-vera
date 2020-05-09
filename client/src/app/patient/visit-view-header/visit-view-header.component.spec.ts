import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitViewHeaderComponent } from './visit-view-header.component';

describe('VisitViewHeaderComponent', () => {
  let component: VisitViewHeaderComponent;
  let fixture: ComponentFixture<VisitViewHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitViewHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitViewHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
