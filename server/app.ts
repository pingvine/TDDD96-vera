import {EventVera} from '../shared/models/EventVera';
import {RoleType} from '../client/src/app/models/RoleType';
import {
  getCareEventByRoleType,
  initDb,
  storeEvent,
  userExists,
  getCareEventByTeam,
  getCareEventByPatient, getAllEvents
} from './dbHelper'

const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const eventserver = require('./websockets/server');
const testRouter = require('./routes/test');
const indexRouter = require('./routes/index');
const overviewRouter = require('./routes/overview');
const patientRouter = require('./routes/patient');
const summaryRouter = require('./routes/summary');
const bodyParser = require('body-parser');


const users = [];
var idCounter = 0;

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
app.use(bodyParser.json());

app.use('/', indexRouter);
app.use('/test', testRouter);
app.use('/overview', overviewRouter);
app.use('/patient', patientRouter);
app.use('/summary', summaryRouter);


/*
REST
 */
app.get('/events', (req, res) => {
  // TODO REPLACE WITH DATABASE GET FROM ACTIVEEVENTS
  res.json(eventserver.getEvents());
});

app.get('/visit/:socialId', (req, res) => {
  res.json({ id: req.params.socialId });
});

app.get('/user/:id', (req, res) => {
  res.json({ id: req.params.id });
});

app.get('/events/careevent/receiver/role/:roletype', (req, res) => {
  console.log(`Event roletype params: ${req.params.roletype}`);
  if (req.params.roletype in RoleType) {
    res.json({ roletype: RoleType[req.params.roletype] });
  } else {
    res.json({ Error: 'RoleType does not exist.' });
  }
});

app.get('/events/careevent/receiver/id/:id', (req, res) => {
  res.json({ id: req.params.id });
});

app.get('/teams', (req, res) => {
  res.json({});
});


app.post("/event", (req, res) => {
  storeEvent(req.body);
  let obj = req.body;
  const event: EventVera = new EventVera(obj.senderId, obj.eventType, obj.data);
  eventserver.handleEvent(event);
  res.json({status: "OK"});

  //console.log(getCareEventByRoleType(RoleType.AssistingNurse));
  //getCareEventByPatient(0);
  getAllEvents((val) => {
    console.log("RECEIVED ALL EVNTS FROM CB");
    console.log(val);
  });

})

app.post('/id', (req, res) => {
  res.json({ id: idCounter });
  idCounter += 1;
});

app.post('/user', (req, res) => {
  console.log('Request body:');
  console.log(req.body);
  if (userExists(req.body.socialId, users)) {
    res.json({ status: 'alreadyexists' });
  } else {
    users.push(req.body);
    res.json({ status: 'OK' });
    console.log(users);
  }
});

eventserver.runWebSocketServer();
initDb();

module.exports = app;