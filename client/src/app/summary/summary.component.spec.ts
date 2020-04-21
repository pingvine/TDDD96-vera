import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Summarycomponent } from './summary.component';

describe('SammanstallningComponent', () => {
  let component: Summarycomponent;
  let fixture: ComponentFixture<Summarycomponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Summarycomponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Summarycomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
