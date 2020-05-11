import { EventVera } from '../shared/models/EventVera';
import { EventType } from '../shared/models/EventType';

const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
const eventserver = require('./websockets/server');
const testRouter = require('./routes/test');
const indexRouter = require('./routes/index');
const overviewRouter = require('./routes/overview');
const patientRouter = require('./routes/patient');
const summaryRouter = require('./routes/summary');


mongoose.connect('mongodb://localhost/coronavirus', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB!');
});

// Only accept trusted connections
const corsOptions = {
  origin(origin, callback) {
    if (origin === 'http://localhost:4200' || !origin) {
      callback(null, true);
    } else {
      callback('Hejdå');
    }
  },
};

const app = express();

app.use(cors(corsOptions));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/test', testRouter);
app.use('/overview', overviewRouter);
app.use('/patient', patientRouter);
app.use('/summary', summaryRouter);


/*
REST
 */
app.get('/events', (req, res, next) => {
  // TODO REPLACE WITH DATABASE GET FROM ACTIVEEVENTS
  res.json(eventserver.getEvents());
});

app.get('/visit/:socialId', (req, res) => {
  console.log(`visit req: ${req}`);
  res.json({});
});

app.get('/user/:id', (req, res) => {
  res.json({});
});


eventserver.runWebSocketServer();


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
module.exports = app;
