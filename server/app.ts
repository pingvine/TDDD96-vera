import {EventVera} from "../shared/models/EventVera";
import {EventType} from "../shared/models/EventType";

var eventserver = require('./websockets/server');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var testRouter = require('./routes/test');
var indexRouter = require('./routes/index');
var overviewRouter = require('./routes/overview');
var patientRouter = require('./routes/patient');
var summaryRouter = require('./routes/summary');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/coronavirus', { useNewUrlParser: true, useUnifiedTopology: true });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to MongoDB!');
});

// Only accept trusted connections
var corsOptions = {
  origin:  function (origin, callback) {
    if (origin === 'http://localhost:4200' || !origin) {
      callback(null, true)
    } else {
      callback('Hejdå')
    }
  }
}

var app = express();

app.use(cors(corsOptions))
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/test', testRouter);
app.use('/overview', overviewRouter);
app.use('/patient', patientRouter);
app.use('/summary', summaryRouter);

app.get("/events", (req, res, next) => {
  // TODO REPLACE WITH DATABASE GET FROM ACTIVEEVENTS
  res.json(eventserver.getEvents());
});

eventserver.runWebSocketServer();


function initDb() {
  /*
  TESTKOD FÖR DATABAS
   */
  //console.log("JSON VERA: " + JSON.stringify(new EventVera("test")))

  let data = {
    fieldId: "1",
    status: true
  }

  let editEvent = new EventVera("simon", EventType.EditEvent, data);

  var eventSchema = new mongoose.Schema({
    senderId: String,
    eventType: Number,
    data: {}
  })
  let EventModel = mongoose.model("eventvera", eventSchema);
  let event = new EventModel(editEvent);
  event.save((err, val) => {
    console.log("save: " + val);
  });  // Save to mongodb db

  EventModel.findOne({senderId: 'simon'}, function (err, eventOne) {
    console.log("docs " + eventOne);
  });

  EventModel.deleteMany({senderId: 'simon'}, (err, val) => {
    console.log("Err: " + err + "val " + val);
  })

}
module.exports = app;