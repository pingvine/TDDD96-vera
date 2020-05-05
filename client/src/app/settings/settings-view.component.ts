import { Component, OnInit } from '@angular/core';
import { ViewNameService } from '../view-name.service';
import {HeaderName} from '../header-name';

@Component({
  selector: 'app-settings-view',
  templateUrl: './settings-view.component.html',
  styleUrls: ['./settings-view.component.css']
})
export class SettingsViewComponent extends HeaderName implements OnInit {
  constructor(viewNameService: ViewNameService) {
    super(viewNameService, 'Inställningar');
  }

  ngOnInit(): void {
    super.setView();
  }

}
