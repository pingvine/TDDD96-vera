import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { NgStyle } from "@angular/common";  
import { ColumnMode } from '@swimlane/ngx-datatable/public-api';

@Component({
  selector: 'app-overview-table',
  templateUrl: './overview-table.component.html',
  styleUrls: ['./overview-table.component.scss']
  
})
export class OverviewTableComponent implements OnInit {
  @ViewChild('myTable') table:any; 
  

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
    {prio:"blue", social: "980808-7890", team:'A', name:'Austin',  gender: 'Male', age:22, dr:"Rakeeb", nurse: "Anna", nurse2:"erik", arrival:"00:00", search:"buksm 178", activity:"button", time: "10 min", arrival_method:"ambulance"   },
    {prio:"yellow", social: "010101-7890", team:'B', name: 'Dany', gender: 'Male', age:33, dr:"Rakeeb", nurse: "Anna", nurse2:"erik", arrival:"00:00", search:"buksm 178", activity:"button", time: "10 min", arrival_method:"ambulance"   },
    {prio:"orange", social: "123456-7890", team:'B', name: 'Bany', gender: 'Male', age:33, dr:"Rakeeb", nurse: "Anna", nurse2:"erik", arrival:"00:00", search:"buksm 178", activity:"button", time: "10 min", arrival_method:"ambulance"   },
    {prio:"blue", social: "123456-7890", team:'B', name: 'Chany', gender: 'Male', age:33, dr:"Rakeeb", nurse: "Anna", nurse2:"erik", arrival:"00:00", search:"buksm 178", activity:"button", time: "10 min", arrival_method:"ambulance"   },
    {prio:"green", social: "123456-7890", team:'C', name: 'Molly', gender: 'Female', age:22, dr:"Rakeeb", nurse: "Anna", nurse2:"erik", arrival:"00:00", search:"buksm 178", activity:"button", time: "10 min", arrival_method:"ambulance"  },
    {prio:"red", social: "123456-7890", team:'C', name: 'Jenny', gender: 'Female', age:22, dr:"Rakeeb", nurse: "Anna", nurse2:"erik", arrival:"00:00", search:"buksm 178", activity:"button", time: "10 min", arrival_method:"ambulance"  },
    {prio:"green", social: "123456-7890", team:'D', name: 'Molly', gender: 'Female', age:22, dr:"Rakeeb", nurse: "Anna", nurse2:"erik", arrival:"00:00", search:"buksm 178", activity:"button", time: "10 min", arrival_method:"ambulance"  },
    {prio:"green", social: "123456-7890", team:'D', name: 'Molly', gender: 'Female', age:22, dr:"Rakeeb", nurse: "Anna", nurse2:"erik", arrival:"00:00", search:"buksm 178", activity:"button", time: "10 min", arrival_method:"ambulance"  },
    {prio:"green", social: "123456-7890", team:'D', name: 'Molly', gender: 'Female', age:22, dr:"Rakeeb", nurse: "Anna", nurse2:"erik", arrival:"00:00", search:"buksm 178", activity:"button", time: "10 min", arrival_method:"ambulance"  },
    {prio:"green", social: "123456-7890", team:'U', name: 'Molly', gender: 'Female', age:22, dr:"Rakeeb", nurse: "Anna", nurse2:"erik", arrival:"00:00", search:"buksm 178", activity:"button", time: "10 min", arrival_method:"ambulance"  },
    {prio:"green", social: "123456-7890", team:'U', name: 'Molly', gender: 'Female', age:22, dr:"Rakeeb", nurse: "Anna", nurse2:"erik", arrival:"00:00", search:"buksm 178", activity:"button", time: "10 min", arrival_method:"ambulance"  },
    {prio:"green", social: "123456-7890", team:'U', name: 'Molly', gender: 'Female', age:22, dr:"Rakeeb", nurse: "Anna", nurse2:"erik", arrival:"00:00", search:"buksm 178", activity:"button", time: "10 min", arrival_method:"ambulance"  },
    {prio:"green", social: "123456-7890", team:'X', name: 'Molly', gender: 'Female', age:22, dr:"Rakeeb", nurse: "Anna", nurse2:"erik", arrival:"00:00", search:"buksm 178", activity:"button", time: "10 min", arrival_method:"ambulance"  },
    {prio:"green", social: "123456-7890", team:'X', name: 'Molly', gender: 'Female', age:22, dr:"Rakeeb", nurse: "Anna", nurse2:"erik", arrival:"00:00", search:"buksm 178", activity:"button", time: "10 min", arrival_method:"ambulance"  },
    {prio:"green", social: "123456-7890", team:'X', name: 'Molly', gender: 'Female', age:22, dr:"Rakeeb", nurse: "Anna", nurse2:"erik", arrival:"00:00", search:"buksm 178", activity:"button", time: "10 min", arrival_method:"ambulance"  },
    {prio:"green", social: "123456-7890", team:'X', name: 'Molly', gender: 'Female', age:22, dr:"Rakeeb", nurse: "Anna", nurse2:"erik", arrival:"00:00", search:"buksm 178", activity:"button", time: "10 min", arrival_method:"ambulance"  },
    {prio:"green", social: "123456-7890", team:'X', name: 'Molly', gender: 'Female', age:22, dr:"Rakeeb", nurse: "Anna", nurse2:"erik", arrival:"00:00", search:"buksm 178", activity:"button", time: "10 min", arrival_method:"ambulance"  },
    {prio:"green", social: "123456-7890", team:'X', name: 'Molly', gender: 'Female', age:22, dr:"Rakeeb", nurse: "Anna", nurse2:"erik", arrival:"00:00", search:"buksm 178", activity:"button", time: "10 min", arrival_method:"ambulance"  },
    {prio:"green", social: "123456-7890", team:'X', name: 'Molly', gender: 'Female', age:22, dr:"Rakeeb", nurse: "Anna", nurse2:"erik", arrival:"00:00", search:"buksm 178", activity:"button", time: "10 min", arrival_method:"ambulance"  },
    {prio:"green", social: "123456-7890", team:'X', name: 'Molly', gender: 'Female', age:22, dr:"Rakeeb", nurse: "Anna", nurse2:"erik", arrival:"00:00", search:"buksm 178", activity:"button", time: "10 min", arrival_method:"ambulance"  },
    {prio:"green", social: "123456-7890", team:'X', name: 'Molly', gender: 'Female', age:22, dr:"Rakeeb", nurse: "Anna", nurse2:"erik", arrival:"00:00", search:"buksm 178", activity:"button", time: "10 min", arrival_method:"ambulance"  },
    {prio:"green", social: "123456-7890", team:'X', name: 'Molly', gender: 'Female', age:22, dr:"Rakeeb", nurse: "Anna", nurse2:"erik", arrival:"00:00", search:"buksm 178", activity:"button", time: "10 min", arrival_method:"ambulance"  },

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

  doubleclick(abc:any){
    console.log("doubleclick");
  }
  
  activityClicked(event){
    console.log("Activity clicked");
  }

  constructor() { }

  ngOnInit(): void {
  }

  getGroupRowHeight(group, rowHeight) {
    let style = {};

    style = {
      height: group.length * 40 + 'px',
      width: '100%'
    };

    return style;
  }

  toggleExpandGroup(group) {
    console.log('Toggled Expand Group!', group);
    this.table.groupHeader.toggleExpandGroup(group);
  }

  onDetailToggle(event) {
    console.log('Detail Toggled', event);
  }
}
