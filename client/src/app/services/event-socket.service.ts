import { Injectable, OnInit } from '@angular/core';
import { WebSocketSubject } from 'rxjs/internal-compatibility';
import { webSocket } from 'rxjs/webSocket';

@Injectable({
  providedIn: 'root',
})
export class EventSocketService implements OnInit {
  private webSocket: WebSocketSubject<any> = webSocket('ws://localhost:4201');

  constructor() { }

  ngOnInit(): void {
    this.webSocket.subscribe((msg) => {
      console.log(`CLIENT WEBSOCKET: Received msg: ${msg}`);
    },
    (error) => {
      console.log(`CLIENT WEBSOCKET: Error msg: ${error}`);
    },
    () => {
      // Completed
      console.log('CLIENT WEBSOCKET: Completed.');
    });
  }
}
