import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitInfoPersonalComponent } from './visit-info-personal.component';

describe('VisitInfoPersonalComponent', () => {
  let component: VisitInfoPersonalComponent;
  let fixture: ComponentFixture<VisitInfoPersonalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitInfoPersonalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitInfoPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
