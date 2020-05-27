import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {NewVisitViewComponent} from './new-visit-view.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {EhrService} from '../ehr.service';
import {RouterTestingModule} from "@angular/router/testing";

describe('NewVisitComponent', () => {
  let component: NewVisitViewComponent;
  let fixture: ComponentFixture<NewVisitViewComponent>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NewVisitViewComponent],
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [EhrService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewVisitViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
