import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitSelectorHistoryComponent } from './visit-selector-history.component';

describe('HistoryComponent', () => {
  let component: VisitSelectorHistoryComponent;
  let fixture: ComponentFixture<VisitSelectorHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitSelectorHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitSelectorHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
