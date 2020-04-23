import {Component, EventEmitter, OnInit, Output, ViewChild, ViewEncapsulation} from '@angular/core';
import { NgStyle, CommonModule } from "@angular/common";
import { ColumnMode } from '@swimlane/ngx-datatable/public-api';

@Component({
  selector: 'app-overview-table',
  templateUrl: './overview-table.component.html',
  styleUrls: ['./overview-table.component.scss']

})
export class OverviewTableComponent implements OnInit {
  @ViewChild('myTable') table:any;

  @Output() visitor = new EventEmitter<string>();
  ngOnInit(): void {

  }


  getCellClass({ row, column, value }): any {
    return {
      'prio-blue': value === 'blue',
      'prio-green': value === 'green',
      'prio-yellow': value === 'yellow',
      'prio-orange': value === 'orange',
      'prio-red': value === 'red'

    };
  }

  getRowClass(row):any{
    return {'row' : true};

  }

  funder = [];
  calculated = [];
  pending = [];
  groups = [];
  editing = {};


  temp = [

    {prio:"yellow", social: "010101-7890", team:'B', name: 'Dany', gender: 'male', age:31, dr:"Rakeeb", nurse: "Anna", nurse2:"erik", arrival:"01:00", search:"buksm 178", activity:"button", time: "10 min", arrival_method:"ambulance"   },
    {prio:"green", social: "123456-7890", team:'C', name: 'Molly', gender: 'female', age:22, dr:"Rakeeb", nurse: "Anna", nurse2:"erik", arrival:"02:00", search:"buksm 178", activity:"button", time: "10 min", arrival_method:"ambulance"  },
    {prio:"blue", social: "123456-7890", team:'B', name: 'Chany', gender: 'male', age:34, dr:"Rakeeb", nurse: "Anna", nurse2:"erik", arrival:"03:00", search:"buksm 178", activity:"button", time: "10 min", arrival_method:"ambulance"   },
    {prio:"blue", social: "980808-7890", team:'A', name:'Austin',  gender: 'male', age:52, dr:"Rakeeb", nurse: "Anna", nurse2:"erik", arrival:"00:40", search:"buksm 178", activity:"button", time: "10 min", arrival_method:"ambulance"   },
    {prio:"orange", social: "123456-7890", team:'B', name: 'Bany', gender: 'male', age:23, dr:"Rakeeb", nurse: "Anna", nurse2:"erik", arrival:"00:50", search:"buksm 178", activity:"button", time: "10 min", arrival_method:"ambulance"   },
    {prio:"red", social: "123456-7890", team:'C', name: 'Jenny', gender: 'female', age:22, dr:"Rakeeb", nurse: "Anna", nurse2:"erik", arrival:"00:06", search:"buksm 178", activity:"button", time: "10 min", arrival_method:"ambulance"  },
    {prio:"green", social: "123456-7890", team:'D', name: 'Molly', gender: 'female', age:22, dr:"Rakeeb", nurse: "Anna", nurse2:"erik", arrival:"00:07", search:"buksm 178", activity:"button", time: "10 min", arrival_method:"ambulance"  },
    {prio:"green", social: "123456-7890", team:'D', name: 'Molly', gender: 'female', age:22, dr:"Rakeeb", nurse: "Anna", nurse2:"erik", arrival:"00:08", search:"buksm 178", activity:"button", time: "10 min", arrival_method:"ambulance"  },
    {prio:"yellow", social: "123456-7890", team:'D', name: 'Molly', gender: 'female', age:22, dr:"Rakeeb", nurse: "Anna", nurse2:"erik", arrival:"00:12", search:"buksm 178", activity:"button", time: "10 min", arrival_method:"ambulance"  },
    {prio:"blue", social: "123456-7890", team:'U', name: 'Molly', gender: 'female', age:22, dr:"Rakeeb", nurse: "Anna", nurse2:"erik", arrival:"02:00", search:"buksm 178", activity:"button", time: "10 min", arrival_method:"ambulance"  },
    {prio:"red", social: "123456-7890", team:'U', name: 'Molly', gender: 'female', age:22, dr:"Rakeeb", nurse: "Anna", nurse2:"erik", arrival:"04:24", search:"buksm 178", activity:"button", time: "10 min", arrival_method:"ambulance"  },
    {prio:"orange", social: "123456-7890", team:'U', name: 'Molly', gender: 'female', age:22, dr:"Rakeeb", nurse: "Anna", nurse2:"erik", arrival:"00:23", search:"buksm 178", activity:"button", time: "10 min", arrival_method:"ambulance"  },
    {prio:"orange", social: "123456-7890", team:'X', name: 'Molly', gender: 'female', age:22, dr:"Rakeeb", nurse: "Anna", nurse2:"erik", arrival:"02:12", search:"buksm 178", activity:"button", time: "10 min", arrival_method:"ambulance"  },
    {prio:"yellow", social: "123456-7890", team:'X', name: 'Molly', gender: 'female', age:22, dr:"Rakeeb", nurse: "Anna", nurse2:"erik", arrival:"00:00", search:"buksm 178", activity:"button", time: "10 min", arrival_method:"ambulance"  },
    {prio:"green", social: "123456-7890", team:'X', name: 'Molly', gender: 'female', age:22, dr:"Rakeeb", nurse: "Anna", nurse2:"erik", arrival:"01:10", search:"buksm 178", activity:"button", time: "10 min", arrival_method:"ambulance"  },
    {prio:"orange", social: "123456-7890", team:'X', name: 'Molly', gender: 'female', age:22, dr:"Rakeeb", nurse: "Anna", nurse2:"erik", arrival:"00:00", search:"buksm 178", activity:"button", time: "10 min", arrival_method:"ambulance"  },
    {prio:"green", social: "123456-7890", team:'X', name: 'Molly', gender: 'female', age:22, dr:"Rakeeb", nurse: "Anna", nurse2:"erik", arrival:"00:54", search:"buksm 178", activity:"button", time: "10 min", arrival_method:"ambulance"  },
    {prio:"green", social: "123456-7890", team:'X', name: 'Molly', gender: 'female', age:22, dr:"Rakeeb", nurse: "Anna", nurse2:"erik", arrival:"00:28", search:"buksm 178", activity:"button", time: "10 min", arrival_method:"ambulance"  },
    {prio:"green", social: "123456-7890", team:'X', name: 'Molly', gender: 'female', age:22, dr:"Rakeeb", nurse: "Anna", nurse2:"erik", arrival:"00:00", search:"buksm 178", activity:"button", time: "10 min", arrival_method:"ambulance"  },
    {prio:"green", social: "123456-7890", team:'X', name: 'Molly', gender: 'female', age:22, dr:"Rakeeb", nurse: "Anna", nurse2:"erik", arrival:"05:32", search:"buksm 178", activity:"button", time: "10 min", arrival_method:"ambulance"  },
    {prio:"green", social: "123456-7890", team:'X', name: 'Molly', gender: 'female', age:22, dr:"Rakeeb", nurse: "Anna", nurse2:"erik", arrival:"05:00", search:"buksm 178", activity:"button", time: "10 min", arrival_method:"ambulance"  },
    {prio:"green", social: "123456-7890", team:'X', name: 'Molly', gender: 'female', age:22, dr:"Rakeeb", nurse: "Anna", nurse2:"erik", arrival:"00:00", search:"buksm 178", activity:"button", time: "10 min", arrival_method:"ambulance"  },

  ];
  rows = this.temp;




  updateFilter(event) {
    var val = event.target.value;
    const num = isNaN(val);
    console.log(num);
    // filter our data
    var temp = [];
    if (num) {
      val = val.toLowerCase();
      temp = this.temp.filter(function (d) {
        return d.name.toLowerCase().indexOf(val) !== -1 || !val;
      });
    } else {
      temp = this.temp.filter(function (d) {
        return d.social.toLowerCase().indexOf(val) !== -1 || !val;
      });
    }
    this.rows = temp;

  }

  sortRows(event){
    console.log(event);
    if(event.newValue !== undefined){
      var reverse = event.newValue !== "asc"
      console.log(this.sortProperties(this.rows,event.column.prop,false, reverse));
      this.rows = this.sortProperties(this.rows,event.column.prop,false, reverse);
      this.rows = this.sortProperties(this.rows,'team',false, false);
    } else{
      this.rows = this.temp;
    }


  }

  print(event){
    console.log(event);
  }

  doubleclick(event:any){
    console.log(event);
  }


  activity(event:any){
    if(event.type === "click"){
      this.visitor.emit(event.row);
      console.log(event.row);
    }

  }

  activityClicked(event){
    console.log("Activity clicked");
  }

  constructor() { }


  toggleExpandGroup(group) {
    console.log('Toggled Expand Group!', group);
    this.table.groupHeader.toggleExpandGroup(group);
  }

  onDetailToggle(event) {
    console.log('Detail Toggled', event);
  }


  sortProperties(obj, sortedBy, isNumericSort, reverse) {
    sortedBy = sortedBy || 1; // by default first key
    isNumericSort = isNumericSort || false; // by default text sort
    reverse = reverse || false; // by default no reverse

    var reversed = (reverse) ? -1 : 1;

    var sortable = [];
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
            sortable.push( obj[key]);
        }
    }
    if (isNumericSort)
      sortable.sort(function (a, b) {
            return reversed * (a[1][sortedBy] - b[1][sortedBy]);
      });
    else
      sortable.sort(function (a, b) {
          var x = a[sortedBy].toLowerCase(),
              y = b[sortedBy].toLowerCase();
          return x < y ? reversed * -1 : x > y ? reversed : 0;
        });
    return sortable; // array in format [ [ key1, val1 ], [ key2, val2 ], ... ]
  }
}
