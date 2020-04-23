import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {
  currentView = 'Enhetsöversikt';
  alerts = [].length;
  constructor() { }

  ngOnInit(): void {
  }

}
