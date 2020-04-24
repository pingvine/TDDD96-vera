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

  funder = [];
  calculated = [];
  pending = [];
  groups = [];
  editing = {};
  teams = [{team: 'A', check: false}, {team: 'B', check: false}, {team: 'C', check: false}, {team: 'D', check: false}, {team: 'X', check: false}, {team: 'U', check: false}];
  rows = [];
  temp = [
    {all: 0, prio: 'yellow', social: '601113-6865', team: 'B', name: 'Jens', gender: 'male', age: 59, dr: 'Rakeeb', nurse: 'Anna', nurse2: 'Erik', arrival: '01:00', search: 'buksm', activity: '', time: 20, arrival_method: 'ambulance'   },
    {all: 0, prio: 'green', social: '691122-6451', team: 'C', name: 'Per', gender: 'female', age: 50, dr: 'Rakeeb', nurse: 'Anna', nurse2: 'Erik', arrival: '02:00', search: 'buksm', activity: '', time: 10, arrival_method: 'ambulance'  },
    {all: 0, prio: 'blue', social: '600829-6631', team: 'B', name: 'Axel', gender: 'male', age: 59, dr: 'Rakeeb', nurse: 'Anna', nurse2: 'Erik', arrival: '03:00', search: 'buksm', activity: '', time: 13, arrival_method: 'ambulance'   },
    {all: 0, prio: 'blue', social: '980808-7890', team: 'A', name: 'Tina',  gender: 'male', age: 52, dr: 'Rakeeb', nurse: 'Anna', nurse2: 'Erik', arrival: '00:40', search: 'buksm', activity: '', time: 48, arrival_method: 'ambulance'   },
    {all: 0, prio: 'orange', social: '000213-9277', team: 'B', name: 'Elias', gender: 'male', age: 20, dr: 'Rakeeb', nurse: 'Anna', nurse2: 'Erik', arrival: '00:50', search: 'buksm', activity: '', time:  40, arrival_method: 'ambulance'   },
    {all: 0, prio: 'red', social: '940628-3789', team: 'C', name: 'Tomas', gender: 'female', age: 25, dr: 'Rakeeb', nurse: 'Anna', nurse2: 'Erik', arrival: '00:06', search: 'buksm', activity: '', time: 64, arrival_method: 'ambulance'  },
    {all: 0, prio: 'green', social: '1993-05-13', team: 'D', name: 'Bardia', gender: 'female', age: 26, dr: 'Rakeeb', nurse: 'Anna', nurse2: 'Erik', arrival: '00:07', search: 'buksm', activity: '', time: 25, arrival_method: 'ambulance'  },
    {all: 0, prio: 'green', social: '1998-05-20', team: 'D', name: 'Robert', gender: 'female', age: 21, dr: 'Rakeeb', nurse: 'Anna', nurse2: 'Erik', arrival: '00:08', search: 'buksm', activity: '', time: 23, arrival_method: 'ambulance'  },
    {all: 0, prio: 'yellow', social: '1965-01-09', team: 'D', name: 'Markus', gender: 'female', age: 55, dr: 'Rakeeb', nurse: 'Anna', nurse2: 'Erik', arrival: '00:12', search: 'buksm', activity: '', time: 12, arrival_method: 'ambulance'  },
    {all: 0, prio: 'blue', social: '123456-7890', team: 'U', name: 'Molly', gender: 'female', age: 22, dr: 'Rakeeb', nurse: 'Anna', nurse2: 'Erik', arrival: '02:00', search: 'buksm', activity: '', time: 34, arrival_method: 'ambulance'  },
    {all: 0, prio: 'red', social: '123456-7890', team: 'U', name: 'Kassandra', gender: 'female', age: 22, dr: 'Rakeeb', nurse: 'Anna', nurse2: 'Erik', arrival: '04:24', search: 'buksm', activity: '', time: 10, arrival_method: 'ambulance'  },
    {all: 0, prio: 'orange', social: '123456-7890', team: 'U', name: 'Margit', gender: 'female', age: 22, dr: 'Rakeeb', nurse: 'Anna', nurse2: 'Erik', arrival: '00:23', search: 'buksm', activity: '', time: 19, arrival_method: 'ambulance'  },
    {all: 0, prio: 'orange', social: '123456-7890', team: 'X', name: 'Jenny', gender: 'female', age: 22, dr: 'Rakeeb', nurse: 'Anna', nurse2: 'Erik', arrival: '02:12', search: 'buksm', activity: '', time:  46, arrival_method: 'ambulance'  },
    {all: 0, prio: 'yellow', social: '123456-7890', team: 'X', name: 'Kent', gender: 'female', age: 22, dr: 'Rakeeb', nurse: 'Anna', nurse2: 'Erik', arrival: '00:00', search: 'buksm', activity: '', time: 89, arrival_method: 'ambulance'  },
    {all: 0, prio: 'green', social: '123456-7890', team: 'X', name: 'Liya', gender: 'female', age: 22, dr: 'Rakeeb', nurse: 'Anna', nurse2: 'Erik', arrival: '01:10', search: 'buksm', activity: '', time: 43, arrival_method: 'ambulance'  },
    {all: 0, prio: 'orange', social: '123456-7890', team: 'X', name: 'Nikol', gender: 'female', age: 22, dr: 'Rakeeb', nurse: 'Anna', nurse2: 'Erik', arrival: '00:00', search: 'buksm', activity: '', time: 23, arrival_method: 'ambulance'  },
    {all: 0, prio: 'green', social: '123456-7890', team: 'X', name: 'Erika', gender: 'female', age: 22, dr: 'Rakeeb', nurse: 'Anna', nurse2: 'Erik', arrival: '00:54', search: 'buksm', activity: '', time: 64, arrival_method: 'ambulance'  },
    {all: 0, prio: 'green', social: '123456-7890', team: 'X', name: 'Elin', gender: 'female', age: 22, dr: 'Rakeeb', nurse: 'Anna', nurse2: 'Erik', arrival: '00:28', search: 'buksm', activity: '', time: 32, arrival_method: 'ambulance'}];
  allTeams = false;

  ngOnInit(): void {
    this.temp = this.sortProperties(this.temp,"team", false);
    this.rows = this.temp;
  }


  updateCheckboxFilter() {
    for (const team of this.teams) {
      console.log(team.team + ' :' + team.check);
    }
  }

  updateFilter(event) {
    let val = event.target.value;
    const num = isNaN(val);
    console.log(num);
    // filter our data
    let temp = [];
    if (num) {
      val = val.toLowerCase();
      temp = this.temp.filter(function(d) {
        return d.name.toLowerCase().indexOf(val) !== -1 || !val;
      });
    } else {
      temp = this.temp.filter(function(d) {
        return d.social.toLowerCase().indexOf(val) !== -1 || !val;
      });
    }
    this.rows = temp;

  }

  sortByAll() {
    console.log("test");
    for (const team of this.teams) {
      team.check = false;
    }
    this.table._groupRowsBy = 'all';
  }

  sortRows(event) {
    console.log(event);
    if (event.newValue !== undefined) {
      const reverse = event.newValue !== 'asc';
      const numeric = false;
      this.rows = this.sortProperties(this.rows, event.column.prop,  reverse);
      this.rows = this.sortProperties(this.rows, 'team',  false);
    } else {
      this.rows = this.temp;
    }


  }

  print(event) {
    console.log(event);
  }

  doubleclick(event: any) {
    console.log(event);
  }

  activity(event: any) {
    if (event.type === 'click') {
      this.visitor.emit(event.row);
      console.log(event.row.social);
    }
    console.log();
    //console.log(this.table);

    this.table.recalculate();
  }

  activityClicked(event) {
    console.log('Activity clicked');
  }

  constructor() { }


  toggleExpandGroup(group) {
    console.log('Toggled Expand Group!', group);
    this.table.groupHeader.toggleExpandGroup(group);
  }

  onDetailToggle(event) {
    console.log('Detail Toggled', event);
  }


  sortProperties(obj, sortedBy, reverse) {
    sortedBy = sortedBy || 1; // by default first key
    console.log(sortedBy);
    const isNumericSort = typeof obj[0][sortedBy] === 'number'; // by default text sort
    console.log(isNumericSort);

    reverse = reverse || false; // by default no reverse

    const reversed = (reverse) ? -1 : 1;

    const sortable = [];
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
            sortable.push( obj[key]);
        }
    }
    if (isNumericSort) {
      sortable.sort(function(a, b) {
            return reversed * (a[sortedBy] - b[sortedBy]);
      });
    } else {
      sortable.sort(function(a, b) {
          const x = a[sortedBy].toLowerCase(),
              y = b[sortedBy].toLowerCase();
          return x < y ? reversed * -1 : x > y ? reversed : 0;
        });
    }

    return sortable;
  }
}
