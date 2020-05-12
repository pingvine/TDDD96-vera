import { EventVera } from '../shared/models/EventVera';
import { EventType } from '../shared/models/EventType';
import { RoleType } from '../client/src/app/models/RoleType';
import { EventModel } from './modelsAndSchemas';

const mongoose = require('mongoose');


const users = [];
const idCounter = 0;

/**
 *
 * @param event JSON EventVera object
 */
export function storeEvent(event: string) {
  const eventModel = new EventModel(event);
  eventModel.save((err, val) => {
  });
}

export function removeEvent(anything: any) {

}

export function getCareEventByRoleType(roleType: RoleType) {
  console.log("GET BY ROLETYPE");
  // let query = EventModel.$where(function () {
  //   return this.data.careEvent.recievers[0][0] === 3;
  // }).exec((err, val) => {
  //   console.log(val);
  // })

  //EventModel.deleteMany({});
}

export function getCareEventByTeam(team: number) {

}

export function getCareEventByPatient(socialId: number) {

}

export function getAllEvents() {

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
