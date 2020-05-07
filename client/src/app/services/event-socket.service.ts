import { Injectable, OnInit } from '@angular/core';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { Observable, Subject} from 'rxjs';
import { EventVera } from '../../../../shared/models/EventVera';


const wsUrl = 'ws://localhost:80';

@Injectable({
  providedIn: 'root',
})
export class EventSocketService implements OnInit {
  private webSocket: WebSocketSubject<any>;

  private messages: Subject<EventVera> = new Subject<EventVera>();

  constructor() { }

  ngOnInit(): void {
    this.connect();
  }

  connect() {
    console.log('CONNECTING! :D');
    if (!this.webSocket || this.webSocket.closed) {
      this.webSocket = this.getNewWebSocket();
    }

    return this.webSocket.subscribe((msg) => {
      console.log(`CLIENT WEBSOCKET: Received msg: ${msg}`);
      this.messages.next(msg);
    },
    (error) => {
      console.log(`CLIENT WEBSOCKET: Error msg: ${error.message}`);
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
      openObserver: {
        next: (value) => {
          console.log('Open observer trigger');
        },
      },
    });
  }

  sendMessage(msg: any) {
    this.webSocket.next(msg);
  }

  getEventObservable(): Observable<EventVera> {
    // Pipe this with the data format we are using
    return this.messages.asObservable();
  }

  close() {
    this.webSocket.complete();
  }
}
