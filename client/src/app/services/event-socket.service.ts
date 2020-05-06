import { Injectable, OnInit } from '@angular/core';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { Observable, Subscription } from 'rxjs';


const wsUrl = 'ws://localhost:4201';

@Injectable({
  providedIn: 'root',
})
export class EventSocketService implements OnInit {
  private webSocket: WebSocketSubject<any>;

  constructor() { }

  ngOnInit(): void {
    this.connect();
  }

  connect() {
    if (!this.webSocket || this.webSocket.closed) {
      this.webSocket = this.getNewWebSocket();
    }

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

  private getNewWebSocket(url = wsUrl) {
    return webSocket({
      url,
      closeObserver: {
        next: (value) => {
          console.log('CLIENT WEBSOCKET: Connection closed :(. Reconnecting.');
          this.webSocket = undefined;
          this.connect();
        },
      },
    });
  }

  sendMessage(msg: any) {
    this.webSocket.next(msg);
  }

  close() {
    this.webSocket.complete();
  }
}
