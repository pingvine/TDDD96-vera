import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-visit-view-header',
  templateUrl: './visit-view-header.component.html',
  styleUrls: ['./visit-view-header.component.css']
})
export class VisitViewHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onReasonChange(reason: string) {
    console.log('Hello I am the header component and I received reasonChange event: ' + reason);
  }

  onTopicalChange(topicalText: string) {
    console.log('Topical change: ' + topicalText);
  }

  onClickedEvents($event: any) {
    console.log('Clicked the events. We want to open the view.');
  }

  onClickBody() {
    console.log('Open vital parameters view');

  }
}
