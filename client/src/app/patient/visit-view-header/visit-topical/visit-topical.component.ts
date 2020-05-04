import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-visit-topical',
  templateUrl: './visit-topical.component.html',
  styleUrls: ['./visit-topical.component.css']
})
export class VisitTopicalComponent implements OnInit {

  @Input() text = '';
  @Output() textChanged = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onTextChanged(text: string) {
    this.textChanged.emit(text);
  }

}
