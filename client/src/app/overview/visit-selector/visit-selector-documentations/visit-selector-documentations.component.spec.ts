import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitSelectorDocumentationsComponent } from './visit-selector-documentations.component';

describe('DocumentationsComponent', () => {
  let component: VisitSelectorDocumentationsComponent;
  let fixture: ComponentFixture<VisitSelectorDocumentationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitSelectorDocumentationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitSelectorDocumentationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
