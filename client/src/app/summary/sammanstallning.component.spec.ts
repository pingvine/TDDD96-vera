import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SammanstallningComponent } from './sammanstallning.component';

describe('SammanstallningComponent', () => {
  let component: SammanstallningComponent;
  let fixture: ComponentFixture<SammanstallningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SammanstallningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SammanstallningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
