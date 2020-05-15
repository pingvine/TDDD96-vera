import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatOptionModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { OverviewTableComponent } from './overview-table.component';
import {Visit} from "../../models/Visit";
import {Person} from "../../models/Person";


describe('OverviewTableComponent', () => {
  let component: OverviewTableComponent;
  let fixture: ComponentFixture<OverviewTableComponent>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OverviewTableComponent],
      imports: [
        NgxDatatableModule, FormsModule, MatCardModule, MatGridListModule,
        MatFormFieldModule, MatSelectModule, MatCheckboxModule, MatButtonModule,
        MatInputModule, BrowserAnimationsModule, MatOptionModule,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.searchRows = [{
      prio: 'yellow', social: '010101-7890', team: 'B', name: 'Dany', gender: 'male', age: 31, dr: 'Rakeeb', nurse: 'Anna', nurse2: 'erik', arrival: '01:00', search: 'buksm 178', activity: 'button', time: '10 min', arrival_method: 'ambulance',
    },
      {
        prio: 'green', social: '123456-7890', team: 'C', name: 'Molly', gender: 'female', age: 22, dr: 'Rakeeb', nurse: 'Anna', nurse2: 'erik', arrival: '02:00', search: 'buksm 178', activity: 'button', time: '10 min', arrival_method: 'ambulance',
      },
      {
        prio: 'blue', social: '123456-7890', team: 'B', name: 'Chany', gender: 'male', age: 34, dr: 'Rakeeb', nurse: 'Anna', nurse2: 'erik', arrival: '03:00', search: 'buksm 178', activity: 'button', time: '10 min', arrival_method: 'ambulance',
      },
    ];
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('sorting function should return correct number list', () => {
    const list = [{ key: 2 }, { key: 3 }, { key: 4 }, { key: 5 }, { key: 1 }];
    expect(component.sortProperties(list, 'key', false)).toEqual([{ key: 1 }, { key: 2 }, { key: 3 }, { key: 4 }, { key: 5 }]);
    expect(component.sortProperties(list, 'key', true)).toEqual([{ key: 5 }, { key: 4 }, { key: 3 }, { key: 2 }, { key: 1 }]);
  });

  it('sorting function should return correct alphabetic list', () => {
    const list = [{ key: 'aab' }, { key: 'aba' }, { key: 'aaa' }, { key: 'bba' }, { key: 'bbb' }];
    expect(component.sortProperties(list, 'key', false)).toEqual([{ key: 'aaa' }, { key: 'aab' }, { key: 'aba' }, { key: 'bba' }, { key: 'bbb' }]);
    expect(component.sortProperties(list, 'key', true)).toEqual([{ key: 'bbb' }, { key: 'bba' }, { key: 'aba' }, { key: 'aab' }, { key: 'aaa' }]);
  });

  it('should show the correct table', () => {
    expect(component.showAllTeams).toBe(false);
    expect(fixture.debugElement.query(By.css('#group'))).toBeTruthy();
    expect(fixture.debugElement.query(By.css('#noGroup'))).toBeNull();
    const checkbox = fixture.debugElement.query(By.css('#all mat-checkbox label')).nativeElement;
    checkbox.click();
    fixture.detectChanges();
    expect(component.showAllTeams).toBe(true);
    expect(fixture.debugElement.query(By.css('#group'))).toBeNull();
    expect(fixture.debugElement.query(By.css('#noGroup'))).toBeTruthy();
  });

  it('should clear all input fields when reset button pressed', () => {
    component.showAllTeams = true;
    component.searchFilter = 'testvalue';
    component.drFilter = component.drList[0];
    fixture.detectChanges();
    component.clearFilters('all');
    expect(component.showAllTeams).toBeFalse();
    expect(component.searchFilter).toEqual('');
    expect(component.drFilter).toEqual('');
  });

  it('should create a row from a visit', () => {
    const person = new Person(1234567890, 'firstname', 'lastname');
    const visit = new Visit("23b3ad3d-7574-4fc3-a0c2-6e070714772a", person);
    const visitInfo = {Team: 'A', arrivalTime: '0000-00-00:12:12:12'};
    visit.setVisitInfo(visitInfo);
    const row = component.rowMaker(visit);
    expect(row.name).toEqual('firstname lastname');
    expect(row.socialId).toEqual(1234567890);
  });
});
