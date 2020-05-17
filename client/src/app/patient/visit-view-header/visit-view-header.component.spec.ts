import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule} from "@angular/common/http/testing";
import { VisitViewHeaderComponent } from './visit-view-header.component';
import { Person } from "../../models/Person"
import { Visit } from "../../models/Visit"

describe('VisitViewHeaderComponent', () => {
  let component: VisitViewHeaderComponent;
  let fixture: ComponentFixture<VisitViewHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
    imports: [
          HttpClientTestingModule,
        ],
      declarations: [ VisitViewHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitViewHeaderComponent);
    component = fixture.componentInstance;
    let newPerson = new Person(199705251234, "Peter", "Stefansson");
    let newVisit = new Visit(199705251234, newPerson);
    component.currentVisit = newVisit;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
