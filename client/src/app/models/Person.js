"use strict";
exports.__esModule = true;
var Person = /** @class */ (function () {
    function Person(id, fName, lName) {
        this.socialId = id;
        this.firstName = fName;
        this.lastName = lName;
    }
    Person.prototype.getId = function () {
        return this.socialId;
    };
    Person.prototype.getFirstName = function () {
        return this.firstName;
    };
    Person.prototype.getLastName = function () {
        return this.lastName;
    };
    Person.prototype.getRoleType = function () {
        return this.roleType;
    };
    Person.prototype.setFirstName = function (fName) {
        this.firstName = fName;
    };
    Person.prototype.setLastName = function (lName) {
        this.lastName = lName;
    };
    Person.prototype.setRoleType = function (roleType) {
        this.roleType = roleType;
    };
    Person.prototype.setId = function (socialId) {
        this.socialId = socialId;
    };
    return Person;
}());
exports.Person = Person;
