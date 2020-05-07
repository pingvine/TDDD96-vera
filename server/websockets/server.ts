import {EventVera} from "../../shared/models/EventVera";
import {EditEventData} from "../../shared/models/EditEventData";
import {EventType} from "../../shared/models/EventType";

"use strict";

var webSocketsServerPort = 80;

var webSocketServer = require('websocket').server;
var http = require('http');

var clients = [ ];
var events = [ ];
// Separate list for broadcasting to clients
var broadcast = [];

var server = http.createServer(function(request, response) {});
server.listen(webSocketsServerPort, function() {
    console.log((new Date()) + " Server is listening on port " + webSocketsServerPort);
});

var wsServer = new webSocketServer({
    httpServer: server
});

wsServer.on('request', function(request) {
    console.log((new Date()) + ' Connection from origin ' + request.origin + '.');
    var connection = request.accept(null, request.origin); 
    var index = clients.push(connection) - 1;

    console.log((new Date()) + ' Connection accepted for .' + connection);

    // Example connection.sendUTF(JSON.stringify( { type: 'history', data: history} ));

    connection.on('message', function(message) {
        if (message.type === 'utf8') { // accept text
            console.log((new Date()) + ' Received Message: ' + message.utf8Data);
            let obj = JSON.parse(message.utf8Data);
            let event: EventVera = new EventVera(obj.senderId, obj.eventType, obj.data)

            handleEvent(event);
            // broadcast message to all connected clients
            var json = JSON.stringify(events);
            for (var i=0; i < clients.length; i++) {
                clients[i].sendUTF(json);
                console.log((new Date()) + ' Server sent: <' + json + '> to: ' + clients[i]);
            }


        }
    }
    );

    connection.on('close', function(connection) {
        console.log((new Date()) + " Peer " + connection.remoteAddress + " disconnected.");
        clients.splice(index, 1); 
    });
});

function isEditEventDuplicate(event: EventVera): boolean {
    // Check if an event is a duplicate from senderId, fieldId, and status
    let duplicates = [];
    let data1 = event.data as EditEventData;
    duplicates = events.filter( function( event2: EventVera) {
        let data2 = event2.data as EditEventData;
        return event.senderId === event2.senderId && data1.fieldId === data2.fieldId && data1.status === data2.status;
    })
    console.log("DUPLICATES: " + duplicates.toString());
    return false;
}

function handleEditEvent(event: EventVera) {
    const data = event.data as EditEventData;
    console.log(event.data['status'])
    if (isEditEventDuplicate(event)) {
        return;
    }

    if (event.data['status'] == true){
        storeEvent(event);
    }
    if (event.data['status'] == false){
        removeEvent(event);
    }
}

function handleCareEvent(event: EventVera) {
}

function handleEvent(event: EventVera){
    switch(event.eventType) {
        case EventType.CareEvent:
            handleCareEvent(event);
        case EventType.EditEvent:
            handleEditEvent(event);
    }
}

function eventExists(event: EventVera): boolean {
    // Has no effect because JS doesn't know how to differentiate events?
    return events.includes(event);
}

function storeEvent(event: EventVera){
    if (!eventExists(event)) {
        events.push(event);
    }
}

function removeEvent(event: EventVera){
    events = events.filter( function (ev: EventVera) {
        return ev.senderId != event.senderId;
    })
    // console.log("REMOVE");
    // const index = events.indexOf(event);
    // console.log("INDEX " + index);
    // if (index > -1) {
    //     console.log("REMOVE 2");
    //     events.splice(index, 1);
    // }
}