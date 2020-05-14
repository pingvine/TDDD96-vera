"use strict";
exports.__esModule = true;
var mongoose = require('mongoose');
var EventVeraSchema = new mongoose.Schema({
    senderId: String,
    eventType: Number,
    data: {}
});
var TestSchema = new mongoose.Schema({
    senderId: String,
    eventType: Number,
    data: {
        careEvent: {
            touched: Date,
            creatorId: Number,
            receivers: {
                roleTypes: [Number],
                team: Number
            },
            creationTime: Date,
            comment: String,
            patient: {
                socialId: Number,
                firstName: String,
                lastName: String,
                roleType: Number
            }
        }
    }
});
var CurrentId = new mongoose.Schema({});
exports.EventModel = mongoose.model('eventvera', EventVeraSchema);
exports.TestEventModel = mongoose.model('testevent', TestSchema);
exports.CurrentIdModel = mongoose.model('currentid', CurrentId);
