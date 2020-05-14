import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestNoticeSocketComponent } from './test-notice-socket.component';

describe('TestNoticeSocketComponent', () => {
  let component: TestNoticeSocketComponent;
  let fixture: ComponentFixture<TestNoticeSocketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestNoticeSocketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestNoticeSocketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
