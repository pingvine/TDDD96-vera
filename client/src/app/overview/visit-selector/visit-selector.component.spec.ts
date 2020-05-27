import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { VisitSelectorComponent } from './visit-selector.component';

describe('VisitSelectorComponent', () => {
  let component: VisitSelectorComponent;
  let fixture: ComponentFixture<VisitSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
    imports: [
          HttpClientTestingModule,
    ],
    declarations: [ VisitSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
