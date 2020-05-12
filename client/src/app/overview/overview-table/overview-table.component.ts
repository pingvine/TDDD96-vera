import {
  Component, EventEmitter, OnInit, ViewChild, Output,
} from '@angular/core';

interface TableRow {
  prio: string
  name: string
  socialId: number
  checkupTime: number
  arrivalTime: number
  age: number
  arrivalMethod:string
  team: string
  dr:string
  nurse:string
  astNurse:string
  gender:string
  search:string
  activites:string
}

@Component({
  selector: 'app-overview-table',
  templateUrl: './overview-table.component.html',
  styleUrls: ['./overview-table.component.scss'],

})
export class OverviewTableComponent implements OnInit {
  @ViewChild('myTable') table: any;

  @Output() visitor = new EventEmitter<string>();

  pending = [];

  groups = [];

  teams = [{ name: 'A', check: false }, { name: 'B', check: false }, { name: 'C', check: false }, { name: 'D', check: false }, { name: 'X', check: false }, { name: 'U', check: false }];

  searchRows = [];

  allRows = [];

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
    this.searchRows = this.allRows;
  }


  loadVisits(loadedRows) {
    loadedRows.forEach((row) => {
      this.allRows.push(this.rowMaker(row));
    });
    this.searchRows = [...this.allRows];
    console.log(this.allRows);
  }

  rowMaker(visit): TableRow {
    const row = {} as TableRow;
    row.team = visit.visitInfo.Team;
    row.name = `${visit.person.getFirstName()} ${visit.person.getLastName()}`;
    row.activites = '';
    row.arrivalMethod = visit.visitInfo.Ankomstsätt;
    row.arrivalTime = visit.visitInfo.Ankomst;
    row.dr = visit.visitInfo.Ansvläk;
    row.astNurse = visit.visitInfo.Ansvusk;
    row.nurse = visit.visitInfo.Ansvssk;
    row.prio = visit.visitInfo.prio;
    row.age = visit.visitInfo.Ålder;
    row.socialId = visit.visitInfo.Personnummer;
    return row;
  }

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
    const num = typeof val === 'number';
    console.log(num);
    // filter our data
    let temp = [];
    if (num) {
      val = val.toLowerCase();
      temp = this.allRows.filter((d) => d.name.toLowerCase().indexOf(val) !== -1 || !val);
    } else {
      temp = this.allRows.filter((d) => d.social.toLowerCase().indexOf(val) !== -1 || !val);
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
        rows = rows.concat(this.allRows.filter((d) => d.team.indexOf(team.name) !== -1 || !team.name));
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
      temp = temp.concat(this.allRows.filter((d) => d.nurse.indexOf(this.nurseFilter) !== -1 || !this.nurseFilter));
    }

    if (this.assistantNurseFilter !== '') {
      temp = temp.concat(this.allRows.filter((d) => d.nurse2.indexOf(this.assistantNurseFilter) !== -1 || !this.assistantNurseFilter));
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
      this.searchRows = this.sortProperties(this.searchRows, event.column.prop, reverse);
      if (!this.showAllTeams) {
        this.searchRows = this.sortProperties(this.searchRows, 'team', false);
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


  sortProperties(obj, sortedBy, reverse) {
    console.log(obj);
    sortedBy = sortedBy || 1; // by default first key
    const isNumericSort = typeof obj[0][sortedBy] === 'number'; // by default text sort

    reverse = reverse || false; // by default no reverse

    const reversed = (reverse) ? -1 : 1;

    const sortable = [];
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        sortable.push(obj[key]);
      }
    }
    console.log(sortable);
    if (isNumericSort) {
      sortable.sort((a, b) => reversed * (a[sortedBy] - b[sortedBy]));
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
