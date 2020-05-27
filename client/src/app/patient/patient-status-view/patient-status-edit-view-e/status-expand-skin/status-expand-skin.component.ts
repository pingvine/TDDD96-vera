import {
  Component, EventEmitter, OnInit, Output,
} from '@angular/core';

@Component({
  selector: 'app-status-expand-skin',
  templateUrl: './status-expand-skin.component.html',
  styleUrls: ['./status-expand-skin.component.css'],
})
export class StatusExpandSkinComponent implements OnInit {
  comment = '';

  type = '';

  @Output() changedValues: EventEmitter<any> = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  updateSkin() {
    this.changedValues.emit({ type: this.type, comment: this.comment });
  }
}
