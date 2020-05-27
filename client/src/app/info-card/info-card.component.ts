import {
  Component, Input, OnInit,
} from '@angular/core';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.css']
})
export class InfoCardComponent implements OnInit {
  @Input() info: string;
  @Input() icon: string;

  constructor() { }

  ngOnInit(): void {
  }

}
