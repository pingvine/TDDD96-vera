import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OversiktComponent } from './oversikt.component';

describe('OverwatchComponent', () => {
  let component: OversiktComponent;
  let fixture: ComponentFixture<OversiktComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OversiktComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OversiktComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
