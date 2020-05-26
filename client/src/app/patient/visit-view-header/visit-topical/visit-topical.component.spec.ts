import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { VisitTopicalComponent } from './visit-topical.component';

describe('VisitTopicalComponent', () => {
  let component: VisitTopicalComponent;
  let fixture: ComponentFixture<VisitTopicalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitTopicalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitTopicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
