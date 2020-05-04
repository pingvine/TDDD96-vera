import { Component, OnInit } from '@angular/core';
import { ViewNameService } from '../view-name.service';
import {HeaderName} from '../header-name';

@Component({
  selector: 'app-team-view',
  templateUrl: './team-view.component.html',
  styleUrls: ['./team-view.component.css']
})
export class TeamViewComponent extends HeaderName implements OnInit {
  constructor(viewNameService: ViewNameService) {
    super(viewNameService, 'Teamöversikt');
  }

  ngOnInit(): void {
    super.setView();
  }
}
