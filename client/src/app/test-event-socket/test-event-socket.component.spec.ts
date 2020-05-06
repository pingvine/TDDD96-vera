import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestEventSocketComponent } from './test-event-socket.component';

describe('TestEventSocketComponent', () => {
  let component: TestEventSocketComponent;
  let fixture: ComponentFixture<TestEventSocketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestEventSocketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestEventSocketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
