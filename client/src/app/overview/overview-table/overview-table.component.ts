import {Component, EventEmitter, OnInit, Output, ViewChild,} from '@angular/core';
import {ServerService} from '../../services/server.service';
import {PriorityTime} from "../../models/PriorityTime";


interface TableRow {
  prio: string
  name: string
  socialId: number
  checkupTime: number
  arrivalTime: number
  age: number
  arrivalMethod: string
  team: string
  dr: string
  nurse: string
  astNurse: string
  gender: string
  search: string
  activites: string
}

@Component({
  selector: 'app-overview-table',
  templateUrl: './overview-table.component.html',
  styleUrls: ['./overview-table.component.scss'],

})
export class OverviewTableComponent implements OnInit {
  @ViewChild('table') table: any;

  @ViewChild('fulltable') fullTable: any;

  @Output() visitor = new EventEmitter<string>();

  pending = [];

  groups = [];

  teams = [];

  searchRows = [];

  allRows = [];

  showAllTeams = false;

  drList = [];

  nurseList = [];

  assistantNurseList = [];

  drFilter = undefined;

  nurseFilter = undefined;

  assistantNurseFilter = undefined;

  searchFilter = '';

  rawEvent: any;

  contextmenuRow: any;

  contextmenuColumn: any;

  sortCounter: number = 0;

  constructor(private serverService: ServerService) {
  }

  /* Puts all loaded visits as the rows to show and gets overview-config.json
     from the server via the server service. */
  ngOnInit(): void {
    this.searchRows = this.allRows;
    const resp = this.serverService.getOverviewConfig().subscribe((ans: any) => {
      this.assistantNurseList = ans.staff.astNurse;
      this.nurseList = ans.staff.nurse;
      this.drList = ans.staff.dr;
      ans.team.forEach((team) => {
        this.teams.push({name: team, check: false});
      });
    }, (error) => {
      this.drList = ['Rekeeb'];
      this.nurseList = ['Ola'];
      this.assistantNurseList = ['Martin', 'Anna'];
      this.teams = [{name: 'A', check: false}, {name: 'B', check: false}, {name: 'X', check: false}];
    });
  }

  /* I called from app.component when the overview is routed and contains all active
  * visits, then coverts them into rows and set them as current. */
  loadVisits(loadedVisits) {
    loadedVisits.forEach((row) => {
      this.allRows.push(this.rowMaker(row));
    });
    this.allRows = this.sortProperties(this.allRows, 'team', false);
    this.searchRows = [...this.allRows];
  }

  /* Creates a row to be viewed in the table from a Visit. */
  rowMaker(visit): TableRow {
    const row = {} as TableRow;
    row.team = visit.visitInfo.team;
    row.name = `${visit.person.getFirstName()} ${visit.person.getLastName()}`;
    row.activites = '';
    row.arrivalMethod = visit.visitInfo.arrivalMethod;
    row.arrivalTime = visit.visitInfo.arrivalTime.slice(11, 16);
    row.dr = visit.visitInfo.dr;
    row.search = visit.visitInfo.search;
    row.astNurse = visit.visitInfo.astNurse;
    row.nurse = visit.visitInfo.nurse;
    row.prio = visit.visitInfo.prio;
    row.age = visit.visitInfo.age;
    row.gender = visit.visitInfo.gender;
    row.socialId = visit.visitInfo.socialId;
    row.checkupTime = Number(PriorityTime[visit.visitInfo.prio.toUpperCase()]);
    return row;
  }

  /* When the restet button is clicked in the overview remove all filters and sorting. */
  resetButtonPressed() {
    if (this.showAllTeams) {
      this.fullTable.sorts = [];
    } else {
      this.table.sorts = [];
      this.table.groupHeader.collapseAllGroups();
    }
    this.clearFilters('all');
  }

  /* Clears different types of filters based on input, either all or a specific field. */
  clearFilters(option: string): void {
    if (option === 'all' || option === 'checkbox') {
      this.clearCheckboxes('allTeamsBox');
      this.clearCheckboxes('teamBoxes');
    }
    if (option === 'all' || option === 'search') {
      this.searchFilter = '';
    }
    if (option === 'all' || option === 'personel') {
      this.nurseFilter = undefined;
      this.drFilter = undefined;
      this.assistantNurseFilter = undefined;
    }
    this.searchRows = this.allRows;
  }

  /* When the searchbar is clicked it removes all other types of filtering. */
  clickSearchBar() {
    this.clearCheckboxes('teamBoxes');
    this.clearFilters('personel');
    if (!this.showAllTeams) {
      this.table.groupHeader.collapseAllGroups();
    }
  }

  /* When the searchbar is typed in, filter the list on socialId or name based
  * on if it's a number or string. */
  updateSearchFilter(event): void {
    let val = event.target.value;
    const num2 = isNaN(Number(val));
    // filter our data
    let temp = [];
    if (num2) {
      val = val.toLowerCase();
      temp = this.allRows.filter((d) => d.name.toLowerCase().indexOf(val) !== -1 || !val);
    } else {
      temp = this.allRows.filter((d) => d.socialId.toString().indexOf(val) !== -1 || !val);
    }
    this.searchRows = temp;
  }

  /* An OR filtering of the list based on team. */
  updateCheckboxFilter(): void {
    this.clearFilters('search');
    this.clearFilters('personel');
    this.clearCheckboxes('allTeamsBox');
    let rows = [];
    for (const team of this.teams) {
      if (team.check) {
        rows = rows.concat(this.allRows.filter((d) => d.team.indexOf(team.name) !== -1 || !team.name));
      }
    }
    if (rows.length !== 0) {
      this.searchRows = [...rows];
    } else {
      this.searchRows = this.allRows;
    }
    this.table.groupHeader.collapseAllGroups();
  }

  /* Deselects all checkbox filters based on input. */
  clearCheckboxes(option: string): void {
    if (option === 'teamBoxes') {
      for (const team of this.teams) {
        team.check = false;
      }
    } else if (option === 'allTeamsBox') {
      this.showAllTeams = false;
    }
  }

  /* OR filters the list based on which workers are selected. To see if all fields
  * are empty the empty check is used. */
  filterWorkers() {
    this.clearFilters('search');
    this.clearCheckboxes('teamBoxes');
    // filter our data
    let empty = 0;
    let temp = [];
    if (this.drFilter !== undefined) {
      temp = temp.concat(this.allRows.filter((d) => {
        if (d.dr !== undefined) {
          return d.dr.indexOf(this.drFilter) !== -1 || !this.drFilter;
        }
      }));
    } else {
      empty += 1;
    }
    if (this.nurseFilter !== undefined) {
      temp = temp.concat(this.allRows.filter((d) => {
        if (d.nurse !== undefined) {
          d.nurse.indexOf(this.nurseFilter) !== -1 || !this.nurseFilter;
        }
      }));
    } else {
      empty += 1;
    }

    if (this.assistantNurseFilter !== undefined) {
      temp = temp.concat(this.allRows.filter((d) => {
        if (d.astNurse !== undefined) {
          d.astNurse.indexOf(this.assistantNurseFilter) !== -1 || !this.assistantNurseFilter;
        }
      }));
    } else {
      empty += 1;
    }
    if (empty === 3) {
      temp = this.allRows;
    }
    this.searchRows = temp;
    if (!this.showAllTeams) {
      this.table.groupHeader.collapseAllGroups();
    }
  }

  /* Changes from viewing grouped by team to one big table. */
  changeGroupView(): void {
    if (this.table !== undefined) {
      this.clearCheckboxes('teamBoxes');
    }
    this.searchRows = this.allRows;
  }

  /* Sort by a given row, sorts on at a time, ascending, descending and neutral.
  * TODO:Neutral doesn't reset back to the original 'unordered' */
  sortRows(event): void {
    if (event.prevValue === undefined) {
      this.sortCounter = 0;
    }
    if (this.sortCounter > 1) {
      if (this.showAllTeams) {
        this.fullTable.sorts = [];
      } else {
        this.table.sorts = [];
      }
      this.searchRows = [...this.searchRows];
      this.sortCounter = 0;
    } else {
      this.sortCounter += 1;
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
  }

  /* Activates when the mouse hovers, clicks in the table etc. but only does something
  * when one of the requierments below are met. */
  mouseActivity(event: any): void {
    if (event.type === 'click') {
      if (event.column.name === 'Personnummer år kön') {
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

  /* When the header of a group is clicked it expands/collapses the */
  toggleExpandGroup(group): void {
    this.table.groupHeader.toggleExpandGroup(group);
  }

  /* Sorts a list of dictionaries based on a tag they all have, can be reversed.*/
  sortProperties(list, sortedBy, reverse) {
    sortedBy = sortedBy || 1; // by default first key
    const isNumericSort = typeof list[0][sortedBy] === 'number'; // by default text sort

    reverse = reverse || false; // by default no reverse

    const reversed = (reverse) ? -1 : 1;

    const sortable = [];
    for (const key in list) {
      if (list.hasOwnProperty(key)) {
        sortable.push(list[key]);
      }
    }
    if (isNumericSort) {
      sortable.sort((a, b) => reversed * (a[sortedBy] - b[sortedBy]));
    } else {
      sortable.sort((a, b) => {
        const x = a[sortedBy];
        const y = b[sortedBy];
        return x < y ? reversed * -1 : x > y ? reversed : 0;
      });
    }
    return sortable;
  }

  /* Support for right mouse click on the table. Currently does nothing.
  * TODO: Add custom context menu */
  onTableContextMenu(contextMenuEvent) {
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
