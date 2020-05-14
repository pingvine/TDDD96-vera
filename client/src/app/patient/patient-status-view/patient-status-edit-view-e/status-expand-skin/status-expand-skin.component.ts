import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-status-expand-skin',
  templateUrl: './status-expand-skin.component.html',
  styleUrls: ['./status-expand-skin.component.css']
})
export class StatusExpandSkinComponent implements OnInit {

  comment = '';
  @Output() commentChange: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onCommentChange(event: string) {
    this.commentChange.emit(event);
  }

}
