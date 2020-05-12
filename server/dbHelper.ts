import { EventVera } from '../shared/models/EventVera';
import { EventType } from '../shared/models/EventType';
import { RoleType } from '../client/src/app/models/RoleType';
import { EventModel, TestEventModel } from './modelsAndSchemas';

const mongoose = require('mongoose');


const users = [];
const idCounter = 0;

/**
 *
 * @param event JSON EventVera object
 */
export function storeEvent(event) {
  const eventModel = new EventModel(event);
  // eventModel.save((err, val) => {
  // });
  const cevt = event.data.careEvent;
  const testEventModel = new TestEventModel({
    senderId: event.senderId,
    eventType: event.eventType,
    data: {
      careEvent: {
        touched: cevt.touched,
        creatorId: cevt.creatorId,
        receivers: {
          roleTypes: cevt.receivers.roleTypes,
          team: cevt.receivers.team,
        },
        creationTime: cevt.creationTime,
        comment: cevt.comment,
        patient: {
          socialId: cevt.patient.socialId,
          firstName: cevt.patient.firstName,
          lastName: cevt.patient.lastName,
          roleType: cevt.patient.roleType,
        },
      },
    },
  });

  testEventModel.save((err, val) => {
    // console.log('Saved test:');
    // console.log(val);
    // console.log('Error');
    // console.log(err);
  });
}

export function removeEvent(anything: any) {

}

export function getCareEventByRoleType(roleType: RoleType, callback) {
  console.log('GET BY ROLETYPE');
  return TestEventModel.find({ 'data.careEvent.receivers.roleTypes': { $in: [roleType] } }).exec((err, val) => {
    let events = []

    val.forEach((event) => {
      // Do something with each event
      events.push(event);
    })
    callback(events);
  });

}

export function getCareEventByTeam(team: number, callback) {
  TestEventModel.find({ 'data.careEvent.receivers.team': { $in: team } }).exec((err, val) => {
    let events = []

    val.forEach((event) => {
      // Do something with each event
      events.push(event);
    })
    callback(events);
  });
}

export function getCareEventByPatient(socialId: number, callback) {
  TestEventModel.find({ 'data.careEvent.patient.socialId': { $in: socialId } }).exec((err, val) => {
    let events = []

    val.forEach((event) => {
      // Do something with each event
      events.push(event);
    })
    callback(events);
  });
}

export function getAllEvents(callback) {
  TestEventModel.find({}, (err, val) => {
    let events = []

    val.forEach((event) => {
      // Do something with each event
      events.push(event);
    })
    callback(events);
  })

}

export function userExists(socialId, userss) {
  // Doesn't work atm
  console.log(`socialid ${socialId}`);
  userss.forEach((user) => {
    console.log(`SocialId comp: ${user.socialId}`);
    if (socialId === user.socialId) {
      return true;
    }
  });
  return false;
}

export function initDb() {
  mongoose.connect('mongodb://localhost/coronavirus', { useNewUrlParser: true, useUnifiedTopology: true });

  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', () => {
    console.log('Connected to MongoDB!');
  });
}


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
