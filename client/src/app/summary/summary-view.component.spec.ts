import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryViewComponent } from './summary-view.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('SummaryViewComponent', () => {
  let component: SummaryViewComponent;
  let fixture: ComponentFixture<SummaryViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ SummaryViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
