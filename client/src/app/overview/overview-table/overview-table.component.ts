import { Component, EventEmitter, OnInit, ViewChild, ViewEncapsulation, Output } from '@angular/core';
import { NgStyle, CommonModule } from '@angular/common';
import { ColumnMode } from '@swimlane/ngx-datatable/public-api';
import { NgxDatatableModule, INgxDatatableConfig} from '@swimlane/ngx-datatable/public-api';
import { MatCheckboxModule } from '@angular/material/checkbox';




@Component({
  selector: 'app-overview-table',
  templateUrl: './overview-table.component.html',
  styleUrls: ['./overview-table.component.scss']

})
export class OverviewTableComponent implements OnInit {
  @ViewChild('myTable') table: any;
  @Output() visitor = new EventEmitter<string>();

  pending = [];
  groups = [];
  teams = [{name: 'A', check: false}, {name: 'B', check: false}, {name: 'C', check: false}, {name: 'D', check: false}, {name: 'X', check: false}, {name: 'U', check: false}];
  searchRows = [];
  allRows = [
    {all: 0, prio: 'yellow', social: '601113-6865', team: 'B', team_temp: 'B', name: 'Jens', gender: 'male', age: 59, dr: 'Kerstin', nurse: 'Asim', nurse2: 'Ella', arrival: '01:00', search: 'buksm', activity: '', time: 20, arrival_method: 'ambulance'   },
    {all: 0, prio: 'green', social: '691122-6451', team: 'C', team_temp: 'C', name: 'Per', gender: 'female', age: 50, dr: 'Kerstin', nurse: 'Johan', nurse2: 'Martin', arrival: '02:00', search: 'buksm', activity: '', time: 10, arrival_method: 'ambulance'  },
    {all: 0, prio: 'blue', social: '600829-6631', team: 'B', team_temp: 'B', name: 'Axel', gender: 'male', age: 59, dr: 'Rakeeb', nurse: 'Asim', nurse2: 'Madihna', arrival: '03:00', search: 'buksm', activity: '', time: 13, arrival_method: 'ambulance'   },
    {all: 0, prio: 'blue', social: '980808-7890', team: 'A', team_temp: 'A', name: 'Tina',  gender: 'male', age: 52, dr: 'Kerstin', nurse: 'Johan', nurse2: 'Ella', arrival: '00:40', search: 'buksm', activity: '', time: 48, arrival_method: 'ambulance'   },
    {all: 0, prio: 'orange', social: '000213-9277', team: 'B', team_temp: 'B', name: 'Elias', gender: 'male', age: 20, dr: 'Kerstin', nurse: 'Ola', nurse2: 'Martin', arrival: '00:50', search: 'buksm', activity: '', time:  40, arrival_method: 'ambulance'   },
    {all: 0, prio: 'red', social: '940628-3789', team: 'C', team_temp: 'C', name: 'Tomas', gender: 'female', age: 25, dr: 'Kerstin', nurse: 'Johan', nurse2: 'Ella', arrival: '00:06', search: 'buksm', activity: '', time: 64, arrival_method: 'ambulance'  },
    {all: 0, prio: 'green', social: '1993-05-13', team: 'D', team_temp: 'D', name: 'Bardia', gender: 'female', age: 26, dr: 'Rakeeb', nurse: 'Asim', nurse2: 'Martin', arrival: '00:07', search: 'buksm', activity: '', time: 25, arrival_method: 'ambulance'  },
    {all: 0, prio: 'green', social: '1998-05-20', team: 'D', team_temp: 'D', name: 'Robert', gender: 'female', age: 21, dr: 'Rakeeb', nurse: 'Johan', nurse2: 'Madihna', arrival: '00:08', search: 'buksm', activity: '', time: 23, arrival_method: 'ambulance'  },
    {all: 0, prio: 'yellow', social: '1965-01-09', team: 'D', team_temp: 'D', name: 'Markus', gender: 'female', age: 55, dr: 'Rakeeb', nurse: 'Johan', nurse2: 'Ella', arrival: '00:12', search: 'buksm', activity: '', time: 12, arrival_method: 'ambulance'  },
    {all: 0, prio: 'blue', social: '123456-7890', team: 'U', team_temp: 'U', name: 'Molly', gender: 'female', age: 22, dr: 'Kerstin', nurse: 'Asim', nurse2: 'Martin', arrival: '02:00', search: 'buksm', activity: '', time: 34, arrival_method: 'ambulance'  },
    {all: 0, prio: 'red', social: '123456-7890', team: 'U', team_temp: 'U', name: 'Kassandra', gender: 'female', age: 22, dr: 'Rakeeb', nurse: 'Johan', nurse2: 'Ella', arrival: '04:24', search: 'buksm', activity: '', time: 10, arrival_method: 'ambulance'  },
    {all: 0, prio: 'orange', social: '123456-7890', team: 'U', team_temp: 'U', name: 'Margit', gender: 'female', age: 22, dr: 'David', nurse: 'Ola', nurse2: 'Martin', arrival: '00:23', search: 'buksm', activity: '', time: 19, arrival_method: 'ambulance'  },
    {all: 0, prio: 'orange', social: '123456-7890', team: 'X', team_temp: 'X', name: 'Jenny', gender: 'female', age: 22, dr: 'Rakeeb', nurse: 'Asim', nurse2: 'Madihna', arrival: '02:12', search: 'buksm', activity: '', time:  46, arrival_method: 'ambulance'  },
    {all: 0, prio: 'yellow', social: '123456-7890', team: 'X', team_temp: 'X', name: 'Kent', gender: 'female', age: 22, dr: 'David', nurse: 'Ola', nurse2: 'Madihna', arrival: '00:00', search: 'buksm', activity: '', time: 89, arrival_method: 'ambulance'  },
    {all: 0, prio: 'green', social: '123456-7890', team: 'X', team_temp: 'X', name: 'Liya', gender: 'female', age: 22, dr: 'David', nurse: 'Asim', nurse2: 'Martin', arrival: '01:10', search: 'buksm', activity: '', time: 43, arrival_method: 'ambulance'  },
    {all: 0, prio: 'orange', social: '123456-7890', team: 'X', team_temp: 'X', name: 'Nikol', gender: 'female', age: 22, dr: 'Rakeeb', nurse: 'Ola', nurse2: 'Ella', arrival: '00:00', search: 'buksm', activity: '', time: 23, arrival_method: 'ambulance'  },
    {all: 0, prio: 'green', social: '123456-7890', team: 'X', team_temp: 'X', name: 'Erika', gender: 'female', age: 22, dr: 'David', nurse: 'Asim', nurse2: 'Ella', arrival: '00:54', search: 'buksm', activity: '', time: 64, arrival_method: 'ambulance'  },
    {all: 0, prio: 'yellow', social: '601113-6865', team: 'B', team_temp: 'B', name: 'Jens', gender: 'male', age: 59, dr: 'Kerstin', nurse: 'Asim', nurse2: 'Ella', arrival: '01:00', search: 'buksm', activity: '', time: 20, arrival_method: 'ambulance'   },
    {all: 0, prio: 'green', social: '691122-6451', team: 'C', team_temp: 'C', name: 'Per', gender: 'female', age: 50, dr: 'Kerstin', nurse: 'Johan', nurse2: 'Martin', arrival: '02:00', search: 'buksm', activity: '', time: 10, arrival_method: 'ambulance'  },
    {all: 0, prio: 'blue', social: '600829-6631', team: 'B', team_temp: 'B', name: 'Axel', gender: 'male', age: 59, dr: 'Rakeeb', nurse: 'Asim', nurse2: 'Madihna', arrival: '03:00', search: 'buksm', activity: '', time: 13, arrival_method: 'ambulance'   },
    {all: 0, prio: 'blue', social: '980808-7890', team: 'A', team_temp: 'A', name: 'Tina',  gender: 'male', age: 52, dr: 'Kerstin', nurse: 'Johan', nurse2: 'Ella', arrival: '00:40', search: 'buksm', activity: '', time: 48, arrival_method: 'ambulance'   },
    {all: 0, prio: 'orange', social: '000213-9277', team: 'B', team_temp: 'B', name: 'Elias', gender: 'male', age: 20, dr: 'Kerstin', nurse: 'Ola', nurse2: 'Martin', arrival: '00:50', search: 'buksm', activity: '', time:  40, arrival_method: 'ambulance'   },
    {all: 0, prio: 'red', social: '940628-3789', team: 'C', team_temp: 'C', name: 'Tomas', gender: 'female', age: 25, dr: 'Kerstin', nurse: 'Johan', nurse2: 'Ella', arrival: '00:06', search: 'buksm', activity: '', time: 64, arrival_method: 'ambulance'  },
    {all: 0, prio: 'green', social: '1993-05-13', team: 'D', team_temp: 'D', name: 'Bardia', gender: 'female', age: 26, dr: 'Rakeeb', nurse: 'Asim', nurse2: 'Martin', arrival: '00:07', search: 'buksm', activity: '', time: 25, arrival_method: 'ambulance'  },
    {all: 0, prio: 'green', social: '1998-05-20', team: 'D', team_temp: 'D', name: 'Robert', gender: 'female', age: 21, dr: 'Rakeeb', nurse: 'Johan', nurse2: 'Madihna', arrival: '00:08', search: 'buksm', activity: '', time: 23, arrival_method: 'ambulance'  },
    {all: 0, prio: 'yellow', social: '1965-01-09', team: 'D', team_temp: 'D', name: 'Markus', gender: 'female', age: 55, dr: 'Rakeeb', nurse: 'Johan', nurse2: 'Ella', arrival: '00:12', search: 'buksm', activity: '', time: 12, arrival_method: 'ambulance'  },
    {all: 0, prio: 'blue', social: '123456-7890', team: 'U', team_temp: 'U', name: 'Molly', gender: 'female', age: 22, dr: 'Kerstin', nurse: 'Asim', nurse2: 'Martin', arrival: '02:00', search: 'buksm', activity: '', time: 34, arrival_method: 'ambulance'  },
    {all: 0, prio: 'red', social: '123456-7890', team: 'U', team_temp: 'U', name: 'Kassandra', gender: 'female', age: 22, dr: 'Rakeeb', nurse: 'Johan', nurse2: 'Ella', arrival: '04:24', search: 'buksm', activity: '', time: 10, arrival_method: 'ambulance'  },
    {all: 0, prio: 'orange', social: '123456-7890', team: 'U', team_temp: 'U', name: 'Margit', gender: 'female', age: 22, dr: 'David', nurse: 'Ola', nurse2: 'Martin', arrival: '00:23', search: 'buksm', activity: '', time: 19, arrival_method: 'ambulance'  },
    {all: 0, prio: 'orange', social: '123456-7890', team: 'X', team_temp: 'X', name: 'Jenny', gender: 'female', age: 22, dr: 'Rakeeb', nurse: 'Asim', nurse2: 'Madihna', arrival: '02:12', search: 'buksm', activity: '', time:  46, arrival_method: 'ambulance'  },
    {all: 0, prio: 'yellow', social: '123456-7890', team: 'X', team_temp: 'X', name: 'Kent', gender: 'female', age: 22, dr: 'David', nurse: 'Ola', nurse2: 'Madihna', arrival: '00:00', search: 'buksm', activity: '', time: 89, arrival_method: 'ambulance'  },
    {all: 0, prio: 'green', social: '123456-7890', team: 'X', team_temp: 'X', name: 'Liya', gender: 'female', age: 22, dr: 'David', nurse: 'Asim', nurse2: 'Martin', arrival: '01:10', search: 'buksm', activity: '', time: 43, arrival_method: 'ambulance'  },
    {all: 0, prio: 'orange', social: '123456-7890', team: 'X', team_temp: 'X', name: 'Nikol', gender: 'female', age: 22, dr: 'Rakeeb', nurse: 'Ola', nurse2: 'Ella', arrival: '00:00', search: 'buksm', activity: '', time: 23, arrival_method: 'ambulance'  },
    {all: 0, prio: 'green', social: '123456-7890', team: 'X', team_temp: 'X', name: 'Erika', gender: 'female', age: 22, dr: 'David', nurse: 'Asim', nurse2: 'Ella', arrival: '00:54', search: 'buksm', activity: '', time: 64, arrival_method: 'ambulance'  },
    {all: 0, prio: 'green', social: '123456-7890', team: 'X', team_temp: 'X', name: 'Elin', gender: 'female', age: 22, dr: 'Rakeeb', nurse: 'Johan', nurse2: 'Martin', arrival: '00:28', search: 'buksm', activity: '', time: 32, arrival_method: 'ambulance'}];
  showAllTeams = false;
  drList = ['Kerstin', 'David', 'Rakeeb'];
  nurseList = ['Johan', 'Asim', 'Ola'];
  assistantNurseList = ['Madihna', 'Ella', 'Martin'];
  drFilter = '';
  nurseFilter = '';
  assistantNurseFilter = '';
  searchFilter = '';
  rawEvent: any;
  contextmenuRow: any;
  contextmenuColumn: any;

  ngOnInit(): void {
    this.allRows = this.sortProperties(this.allRows, 'team', false);
    this.searchRows = this.allRows;
  }

  constructor() { }


  addPatient(visit): void {
    this.allRows = this.allRows.concat([visit]);
  }

  resetButtonPressed() {
    this.clearFilters('all');
    this.table.groupHeader.collapseAllGroups();
  }

  clearFilters(option: string): void {
    if (option === 'all' || option === 'checkbox') {
      this.clearCheckboxes('allBox');
      this.clearCheckboxes('teamBoxes');
    }
    if (option === 'all' || option === 'search') {
      this.searchFilter = '';
    }
    if (option === 'all' || option === 'personel') {
      this.nurseFilter = '';
      this.drFilter = '';
      this.assistantNurseFilter = '';
    }
    this.searchRows = this.allRows;
  }

  clickSearchBar(event) {
    console.log(event);
    console.log(event.target.childNodes);
    this.clearCheckboxes('teamBoxes');
    this.clearFilters('personel');
    this.table.groupHeader.collapseAllGroups();
  }

  updateSearchFilter(event): void {
    let val = event.target.value;
    const num = isNaN(val);
    console.log(num);
    // filter our data
    let temp = [];
    if (num) {
      val = val.toLowerCase();
      temp = this.allRows.filter((d) => {
        return d.name.toLowerCase().indexOf(val) !== -1 || !val;
      });
    } else {
      temp = this.allRows.filter((d) => {
        return d.social.toLowerCase().indexOf(val) !== -1 || !val;
      });
    }
    this.searchRows = temp;
  }

  updateCheckboxFilter(): void {
    this.clearFilters('search');
    this.clearFilters('personel');
    this.clearCheckboxes('allBox');
    let rows = [];
    for (const team of this.teams) {
      if (team.check) {
        rows = rows.concat(this.allRows.filter((d) => {
          return d.team.indexOf(team.name) !== -1 || !team.name;
        }));
      }
    }
    if (rows.length !== 0) {
      this.searchRows = [...rows];
    } else {
      console.log(this.searchRows.length);
      this.searchRows = this.allRows;
      console.log(this.searchRows.length);
    }
    this.table.groupHeader.collapseAllGroups();
  }

  clearCheckboxes(option: string): void {
    if (option === 'teamBoxes') {
      console.log('Clear team checks');
      for (const team of this.teams) {
        team.check = false;
      }
    } else if (option === 'allBox') {
      console.log('Clear all check');
      this.showAllTeams = false;
    }
  }

  filterWorkers() {
    this.clearFilters('search');
    this.clearCheckboxes('teamBoxes');
    // filter our data
    let temp = [];
    console.log(this.drFilter);
    if (this.drFilter !== '') {
      temp = temp.concat(this.allRows.filter((d) => {


        console.log(d.dr.indexOf(this.drFilter));
        return d.dr.indexOf(this.drFilter) !== -1 || !this.drFilter;
      }));
    }
    console.log(temp);

    if (this.nurseFilter !== '') {
      temp = temp.concat(this.allRows.filter((d) => {
        return d.nurse.indexOf(this.nurseFilter) !== -1 || !this.nurseFilter;
      }));
    }

    if (this.assistantNurseFilter !== '') {
      temp = temp.concat(this.allRows.filter((d) => {
        return d.nurse2.indexOf(this.assistantNurseFilter) !== -1 || !this.assistantNurseFilter;
      }));
    }
    this.searchRows = temp;
    this.table.groupHeader.collapseAllGroups();
  }

  changeGroupView(): void {
    if (this.table !== undefined) {
      this.clearCheckboxes('teamBoxes');
    }
    this.searchRows = this.allRows;
  }

  sortRows(event): void {
    if (event.newValue !== undefined) {
      const reverse = event.newValue !== 'asc';
      this.searchRows = this.sortProperties(this.searchRows, event.column.prop,  reverse);
      if (!this.showAllTeams) {
        this.searchRows = this.sortProperties(this.searchRows, 'team',  false);
      }
      this.searchRows = [...this.searchRows];
    } else {
      this.searchRows = this.allRows;
    }
  }


  mouseActivity(event: any): void {
    if (event.type === 'click') {
      if (event.column.name === 'Personnummer(år)(kön)') {
        console.log('Clicked Social-id');
        this.visitor.emit(event.row);
      } else if (event.column.name === 'Checkup') {
        console.log('Clicked Checkup');
      } else if (event.column.name === 'Aktivitet') {
        console.log('Clicked Activity');
      } else if (event.column.name === 'Kommentar') {
        console.log('Clicked Comment');
      }
    }
  }


  toggleExpandGroup(group): void {
    console.log('Toggled Expand Group!', group);
    this.table.groupHeader.toggleExpandGroup(group);
  }

  onDetailToggle(event) {
    console.log('Detail Toggled', event);
  }


  sortProperties(obj, sortedBy, reverse)  {
    sortedBy = sortedBy || 1; // by default first key
    const isNumericSort = typeof obj[0][sortedBy] === 'number'; // by default text sort

    reverse = reverse || false; // by default no reverse

    const reversed = (reverse) ? -1 : 1;

    const sortable = [];
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
            sortable.push( obj[key]);
        }
    }
    if (isNumericSort) {
      sortable.sort((a, b) => {
            return reversed * (a[sortedBy] - b[sortedBy]);
      });
    } else {
      sortable.sort((a, b) => {
          const x = a[sortedBy].toLowerCase();
          const y = b[sortedBy].toLowerCase();
          return x < y ? reversed * -1 : x > y ? reversed : 0;
        });
    }

    return sortable;
  }

  onTableContextMenu(contextMenuEvent) {
    console.log(contextMenuEvent);

    this.rawEvent = contextMenuEvent.event;
    if (contextMenuEvent.type === 'body') {
      this.contextmenuRow = contextMenuEvent.content;
      this.contextmenuColumn = undefined;
    } else {
      this.contextmenuColumn = contextMenuEvent.content;
      this.contextmenuRow = undefined;
    }

    contextMenuEvent.event.preventDefault();
    contextMenuEvent.event.stopPropagation();
  }
}
