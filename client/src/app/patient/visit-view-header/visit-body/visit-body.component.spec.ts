import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { VisitBodyComponent } from './visit-body.component';

describe('VisitBodyComponent', () => {
  let component: VisitBodyComponent;
  let fixture: ComponentFixture<VisitBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
