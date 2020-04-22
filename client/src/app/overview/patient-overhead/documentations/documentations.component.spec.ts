import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentationsComponent } from './documentations.component';

describe('DocumentationsComponent', () => {
  let component: DocumentationsComponent;
  let fixture: ComponentFixture<DocumentationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
