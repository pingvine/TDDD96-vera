"use strict";
exports.__esModule = true;
var CareEvent = /** @class */ (function () {
    function CareEvent(creator, receivers, team, action, comment, patient) {
        this.touched = new Date();
        this.creatorId = creator.getId();
        this.receivers = { roleTypes: receivers, team: team };
        this.completed = undefined;
        this.actionType = action;
        this.creationTime = new Date();
        this.comment = comment;
        this.patient = patient;
    }
    CareEvent.prototype.setPatient = function (person) {
        this.patient = person;
    };
    CareEvent.prototype.setCreationTime = function (date) {
        this.creationTime = date;
    };
    CareEvent.prototype.getPatient = function () {
        return this.patient;
    };
    CareEvent.prototype.touch = function () {
        this.touched = new Date();
    };
    CareEvent.prototype.getCreatorId = function () {
        return this.creatorId;
    };
    CareEvent.prototype.getReceiverId = function () {
        return this.receivers;
    };
    CareEvent.prototype.markAsCompleted = function (markedBy) {
        this.completed = [new Date(), markedBy];
    };
    CareEvent.prototype.getActionType = function () {
        return this.actionType;
    };
    CareEvent.prototype.getCreationTime = function () {
        return this.creationTime;
    };
    CareEvent.prototype.getComment = function () {
        return this.comment;
    };
    CareEvent.prototype.appendComment = function (comment) {
        var lineBreak = '\n';
        this.comment = this.comment.concat(lineBreak);
        this.comment = this.comment.concat(comment.toString());
    };
    return CareEvent;
}());
exports.CareEvent = CareEvent;
