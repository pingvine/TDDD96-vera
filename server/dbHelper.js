"use strict";
exports.__esModule = true;
var modelsAndSchemas_1 = require("./modelsAndSchemas");
var mongoose = require('mongoose');
var users = [];
var idCounter = 0;
function getCurrentId(callback) {
    var currentIdModel = new modelsAndSchemas_1.CurrentIdModel();
    currentIdModel.find(function (err, res) {
        if (err) {
            console.log('Err: ' + err);
        }
        else {
            console.log('Res: ' + res);
        }
        res.currentId += 1;
        currentIdModel.save(res);
        callback(err, res.currentId);
        console.log('Returned: ' + res.currentId + '\n');
    });
}
exports.getCurrentId = getCurrentId;
/**
 *
 * @param event JSON EventVera object
 */
function storeEvent(event) {
    var eventModel = new modelsAndSchemas_1.EventModel(event);
    // eventModel.save((err, val) => {
    // });
    var cevt = event.data.careEvent;
    var testEventModel = new modelsAndSchemas_1.TestEventModel({
        senderId: event.senderId,
        eventType: event.eventType,
        data: {
            careEvent: {
                touched: cevt.touched,
                creatorId: cevt.creatorId,
                receivers: {
                    roleTypes: cevt.receivers.roleTypes,
                    team: cevt.receivers.team
                },
                creationTime: cevt.creationTime,
                comment: cevt.comment,
                patient: {
                    socialId: cevt.patient.socialId,
                    firstName: cevt.patient.firstName,
                    lastName: cevt.patient.lastName,
                    roleType: cevt.patient.roleType
                }
            }
        }
    });
    testEventModel.save(function (err, val) {
        // console.log('Saved test:');
        // console.log(val);
        // console.log('Error');
        // console.log(err);
    });
}
exports.storeEvent = storeEvent;
function removeEvent(anything) {
}
exports.removeEvent = removeEvent;
function getCareEventByRoleType(roleType, callback) {
    console.log('GET BY ROLETYPE');
    return modelsAndSchemas_1.TestEventModel.find({ 'data.careEvent.receivers.roleTypes': { $in: [roleType] } }).exec(function (err, val) {
        var events = [];
        val.forEach(function (event) {
            // Do something with each event
            events.push(event);
        });
        callback(err, events);
    });
}
exports.getCareEventByRoleType = getCareEventByRoleType;
function getCareEventByTeam(team, callback) {
    modelsAndSchemas_1.TestEventModel.find({ 'data.careEvent.receivers.team': { $in: team } }).exec(function (err, val) {
        var events = [];
        val.forEach(function (event) {
            // Do something with each event
            events.push(event);
        });
        callback(err, events);
    });
}
exports.getCareEventByTeam = getCareEventByTeam;
function getCareEventByPatient(socialId, callback) {
    modelsAndSchemas_1.TestEventModel.find({ 'data.careEvent.patient.socialId': { $in: socialId } }).exec(function (err, val) {
        var events = [];
        val.forEach(function (event) {
            // Do something with each event
            events.push(event);
        });
        callback(err, events);
    });
}
exports.getCareEventByPatient = getCareEventByPatient;
function getAllEvents(callback) {
    modelsAndSchemas_1.TestEventModel.find({}, function (err, val) {
        var events = [];
        val.forEach(function (event) {
            // Do something with each event
            events.push(event);
        });
        callback(err, events);
    });
}
exports.getAllEvents = getAllEvents;
function userExists(socialId, userss) {
    // Doesn't work atm
    console.log("socialid " + socialId);
    userss.forEach(function (user) {
        console.log("SocialId comp: " + user.socialId);
        if (socialId === user.socialId) {
            return true;
        }
    });
    return false;
}
exports.userExists = userExists;
function initDb() {
    mongoose.connect('mongodb://localhost/coronavirus', { useNewUrlParser: true, useUnifiedTopology: true });
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function () {
        console.log('Connected to MongoDB!');
    });
}
exports.initDb = initDb;
/*
    TESTKOD FÖR DATABAS
     */
// console.log("JSON VERA: " + JSON.stringify(new EventVera("test")))
// const data = {
//   fieldId: '1',
//   status: true,
// };
//
// const editEvent = new EventVera('simon', EventType.EditEvent, data);
// const event = new EventModel(editEvent);
// event.save((err, val) => {
//   console.log(`save: ${val}`);
// }); // Save to mongodb db
// EventModel.findOne({ senderId: 'simon' }, (err, eventOne) => {
//   console.log(`docs ${eventOne}`);
// });
//
// EventModel.deleteMany({ senderId: 'simon' }, (err, val) => {
//   console.log(`Err: ${err}val ${val}`);
// });
