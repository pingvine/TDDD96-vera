import { Component, OnInit } from '@angular/core';
import { ViewNameService } from '../view-name.service';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {
  alerts = [].length;
  currentView: string;

  constructor(private viewNameService: ViewNameService) {
    this.viewNameService.view$.subscribe(view => this.currentView = view);
  }

  ngOnInit(): void {
  }

}
