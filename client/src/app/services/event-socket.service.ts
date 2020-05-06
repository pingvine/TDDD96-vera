import { Injectable, OnInit } from '@angular/core';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { Observable, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EventSocketService implements OnInit {
  private webSocket: WebSocketSubject<any> = webSocket('ws://localhost:4201');

  constructor() { }

  ngOnInit(): void {
    this.connect();
  }

  connect(): Subscription {
    return this.webSocket.subscribe((msg) => {
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
