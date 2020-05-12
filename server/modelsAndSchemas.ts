import {RoleType} from "../client/src/app/models/RoleType";

const mongoose = require('mongoose');

const EventVeraSchema = new mongoose.Schema({
  senderId: String,
  eventType: Number,
  data: {},
});


const TestSchema = new mongoose.Schema({
  senderId: String,
  eventType: Number,
  data: {
    careEvent: {
      touched: Date,
      creatorId: Number,
      receivers: {
        roleTypes: [Number],
        team: Number,
      },
      creationTime: Date,
      comment: String,
      patient: {
        socialId: Number,
        firstName: String,
        lastName: String,
        roleType: Number,
      },
    },
  },
});

export const EventModel = mongoose.model('eventvera', EventVeraSchema);
export const TestEventModel = mongoose.model('testevent', TestSchema);
