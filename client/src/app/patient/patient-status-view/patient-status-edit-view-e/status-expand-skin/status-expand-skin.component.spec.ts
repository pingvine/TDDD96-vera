import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {StatusExpandSkinComponent} from './status-expand-skin.component';

describe('StatusExpandSkinComponent', () => {
  let component: StatusExpandSkinComponent;
  let fixture: ComponentFixture<StatusExpandSkinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StatusExpandSkinComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusExpandSkinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
