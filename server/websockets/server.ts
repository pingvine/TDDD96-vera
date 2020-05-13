import { Subject } from 'rxjs';
import { EventVera } from '../../shared/models/EventVera';
import { EditEventData } from '../../shared/models/EditEventData';
import { EventType } from '../../shared/models/EventType';
import {CareEvent} from "../../client/src/app/models/CareEvent";
import {CareEventData} from "../../shared/models/CareEventData";

'use strict';

const webSocketsServerPort = 80;

const webSocketServer = require('websocket').server;
const http = require('http');

const clients = [];
let events = [];
// Separate list for broadcasting to clients
const broadcast = [];

const server = http.createServer((request, response) => {});
server.listen(webSocketsServerPort, () => {
  console.log(`${new Date()} Server is listening on port ${webSocketsServerPort}`);
});

const wsServer = new webSocketServer({
  httpServer: server,
});

function broadcastToClients() {
  broadcast.forEach((event) => {
    const json = JSON.stringify(event);
    clients.forEach((client) => {
      client.sendUTF(json);
      console.log(`${new Date()} Server sent: <${json}> to: ${client}`);
    });
    // Pop from queue
    broadcast.shift();
  });
}

export function runWebSocketServer() {
  wsServer.on('request', (request) => {
    console.log(`${new Date()} Connection from origin ${request.origin}.`);
    const connection = request.accept(null, request.origin);
    const index = clients.push(connection) - 1;

    console.log(`${new Date()} Connection accepted for .${connection}`);

    // Example connection.sendUTF(JSON.stringify( { type: 'history', data: history} ));

    connection.on('message', (message) => {
      if (message.type === 'utf8') { // accept text
        console.log(`${new Date()} Received Message: ${message.utf8Data}`);
        const obj = JSON.parse(message.utf8Data);
        const event: EventVera = new EventVera(obj.senderId, obj.eventType, obj.data);

        handleEvent(event);
        // broadcast message to all connected clients
        // var json = JSON.stringify(events);
        // for (var i=0; i < clients.length; i++) {
        //     clients[i].sendUTF(json);
        //     console.log((new Date()) + ' Server sent: <' + json + '> to: ' + clients[i]);
        // }
      }
    });

    connection.on('close', (connection) => {
      console.log(`${new Date()} Peer ${connection.remoteAddress} disconnected.`);
      clients.splice(index, 1);
    });
  });
}


function isEditEventDuplicate(event: EventVera): boolean {
  // Check if an event is a duplicate from senderId, fieldId, and status
  let duplicates = [];
  const data1 = event.data as EditEventData;
  duplicates = events.filter((event2: EventVera) => {
    const data2 = event2.data as EditEventData;
    return event.senderId === event2.senderId && data1.fieldId === data2.fieldId && data1.status === data2.status;
  });
  return duplicates.length != 0;
}

function handleEditEvent(event: EventVera) {
  const data = event.data as EditEventData;
  broadcast.push(event);
  if (isEditEventDuplicate(event)) {
    return;
  }

  if (event.data['status'] === true) {
    storeEvent(event);
  }
  if (event.data['status'] === false) {
    removeEvent(event);
  }
}

function pushAndBroadcast(event: EventVera) {
  broadcast.push(event);
  broadcastToClients();
}

function handleCareEvent(event: EventVera) {
  //broadcast.push(event);
  let data = event.data;
  let creationTime = data['careEvent']['creationTime'];
  console.log("CARE EVENT");
  console.log(creationTime);
  let date = new Date(creationTime);
  console.log("Date in future: " + isDateInFuture(date));
  console.log(date.getTime());
  console.log("Time to future: " + getTimeToDateMs(date));
  setTimeout(pushAndBroadcast, 1000, event);
}

function isDateInFuture(date: Date) {
  return date.getTime() > Date.now();
}

function getTimeToDateMs(dateInFuture: Date) {
  return dateInFuture.getTime() - Date.now();
}

export function handleEvent(event: EventVera) {
  console.log('HANDLE EVENT');
  console.log(event);
  switch (event.eventType) {
    case EventType.CareEvent:
      handleCareEvent(event);
    case EventType.EditEvent:
      handleEditEvent(event);
  }

  broadcastToClients();
}

function eventExists(event: EventVera): boolean {
  // Has no effect because JS doesn't know how to differentiate events?
  return events.includes(event);
}

function storeEvent(event: EventVera) {
  if (!eventExists(event)) {
    events.push(event);
  }
}

function removeEvent(event: EventVera) {
  events = events.filter((ev: EventVera) => ev.senderId != event.senderId);
  // console.log("REMOVE");
  // const index = events.indexOf(event);
  // console.log("INDEX " + index);
  // if (index > -1) {
  //     console.log("REMOVE 2");
  //     events.splice(index, 1);
  // }
}

export function getEvents(): EventVera[] {
  return events;
}
