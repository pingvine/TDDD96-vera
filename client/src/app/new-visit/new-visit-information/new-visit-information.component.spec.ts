import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {EhrService, partyData} from '../../ehr.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NewVisitInformationComponent } from './new-visit-information.component';
import { NewVisitViewComponent } from '../new-visit-view.component';
import {stringify} from 'querystring';
import {RouterTestingModule} from "@angular/router/testing";


describe('NewVisitInformationComponent', () => {
  let component: NewVisitInformationComponent;
  let parentComponent: NewVisitViewComponent;
  let fixture: ComponentFixture<NewVisitInformationComponent>;
  let parentFixture: ComponentFixture<NewVisitViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewVisitInformationComponent, NewVisitViewComponent ],
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [EhrService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewVisitInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    parentFixture = TestBed.createComponent(NewVisitViewComponent);
    parentComponent = parentFixture.componentInstance;
  });

  it('should create child', () => {
    expect(component).toBeTruthy();
  });

  it('should create parent', () => {
    expect(parentComponent).toBeTruthy();
  });

  it('the right age should be returned', () => {
    const dateOfBirth: Date = new Date('1997-05-10');
    expect(component.calculateAge(dateOfBirth)).toBe(23);
  })
  //
  // it('should emit data to parent class', () => {
  //   const firstName = 'Stefan';
  //   component.updateFirstName(firstName);
  //   var _firstName: string = parentComponent.visit.firstNames;
  //
  //   expect(_firstName).toBe(firstName);
  // })
});
