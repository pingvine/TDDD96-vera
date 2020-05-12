import { EventVera } from '../shared/models/EventVera';
import { EventType } from '../shared/models/EventType';
import { RoleType } from '../client/src/app/models/RoleType';

const mongoose = require('mongoose');

const users = [];
const idCounter = 0;

mongoose.connect('mongodb://localhost/coronavirus', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB!');
});

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

function initDb() {
  /*
    TESTKOD FÖR DATABAS
     */
  // console.log("JSON VERA: " + JSON.stringify(new EventVera("test")))

  const data = {
    fieldId: '1',
    status: true,
  };

  const editEvent = new EventVera('simon', EventType.EditEvent, data);

  const eventSchema = new mongoose.Schema({
    senderId: String,
    eventType: Number,
    data: {},
  });
  const EventModel = mongoose.model('eventvera', eventSchema);
  const event = new EventModel(editEvent);
  event.save((err, val) => {
    console.log(`save: ${val}`);
  }); // Save to mongodb db

  EventModel.findOne({ senderId: 'simon' }, (err, eventOne) => {
    console.log(`docs ${eventOne}`);
  });

  EventModel.deleteMany({ senderId: 'simon' }, (err, val) => {
    console.log(`Err: ${err}val ${val}`);
  });
}
