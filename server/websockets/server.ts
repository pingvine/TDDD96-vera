import { EventVera } from "../../shared/models/EventVera";

"use strict";

var webSocketsServerPort = 80;

var webSocketServer = require('websocket').server;
var http = require('http');

var clients = [ ];
var events = [ ]; 

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
            let event: EventVera = JSON.parse(message);
            storeEvent(event);

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

function storeEvent(event: EventVera){
    events.push(event) - 1; 
}