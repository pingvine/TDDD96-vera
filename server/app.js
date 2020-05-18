"use strict";
exports.__esModule = true;
var EventVera_1 = require("../shared/models/EventVera");
var RoleType_1 = require("../client/src/app/models/RoleType");
var dbHelper_1 = require("./dbHelper");
var EventType_1 = require("../shared/models/EventType");
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var bodyParser = require('body-parser');
var fs = require('fs');
var eventserver = require('./websockets/server');
var testRouter = require('./routes/test');
var indexRouter = require('./routes/index');
var overviewRouter = require('./routes/overview');
var patientRouter = require('./routes/patient');
var summaryRouter = require('./routes/summary');
var users = [];
var idCounter = 0;
// Only accept trusted connections
var corsOptions = {
    origin: function (origin, callback) {
        if (origin === 'http://localhost:4200' || !origin) {
            callback(null, true);
        }
        else {
            callback('Hejdå');
        }
    }
};
var app = express();
app.use(cors(corsOptions));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.json());
app.use('/', indexRouter);
app.use('/test', testRouter);
app.use('/overview', overviewRouter);
app.use('/patient', patientRouter);
app.use('/summary', summaryRouter);
/*
REST
 */
app.get('/events/editevent', function (req, res) {
    // TODO REPLACE WITH DATABASE GET FROM ACTIVEEVENTS
    res.json(eventserver.getEvents());
});
app.get('/events/careevent', function (req, res) {
    dbHelper_1.getAllEvents(function (err, val) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(val);
        }
    });
});
app.get('/visit/:socialId', function (req, res) {
    res.json({ id: req.params.socialId });
});
app.get('/user/:id', function (req, res) {
    res.json({ id: req.params.id });
});
app.get('/events/careevent/receiver/role/:roletype', function (req, res) {
    if (req.params.roletype in RoleType_1.RoleType) {
        dbHelper_1.getCareEventByRoleType(req.params.roletype, function (err, val) {
            if (err) {
                res.json(err);
            }
            else {
                res.json(val);
            }
        });
    }
    else {
        res.json({ Error: 'RoleType does not exist.' });
    }
});
app.get('/events/careevent/receiver/team/:team', function (req, res) {
    dbHelper_1.getCareEventByTeam(req.params.team, function (err, val) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(val);
        }
    });
});
app.get('/teams', function (req, res) {
    res.json({});
});
app.post('/event', function (req, res) {
    if (req.body.eventType === EventType_1.EventType.CareEvent) {
        dbHelper_1.storeEvent(req.body);
    }
    var obj = req.body;
    var event = new EventVera_1.EventVera(obj.senderId, obj.eventType, obj.data);
    eventserver.handleEvent(event);
    res.json({ status: 'OK' });
});
app.post('/id', function (req, res) {
    res.json({ id: idCounter });
    idCounter += 1;
});
app.get('/getNewId', function (req, res) {
    dbHelper_1.getCurrentId(function (err, val) {
        res.json(val);
    });
});
app.post('/user', function (req, res) {
    console.log('Request body:');
    console.log(req.body);
    if (dbHelper_1.userExists(req.body.socialId, users)) {
        res.json({ status: 'alreadyexists' });
    }
    else {
        users.push(req.body);
        res.json({ status: 'OK' });
        console.log(users);
    }
});
app.get('/config', function (req, res) {
    var raw = fs.readFileSync('overview-config.json');
    res.json(JSON.parse(raw));
});
eventserver.runWebSocketServer();
dbHelper_1.initDb();
module.exports = app;
