var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

var testRouter = require('./routes/test');
var indexRouter = require('./routes/index');
let oversiktRouter = require('./routes/oversikt');
let patientRouter = require('./routes/patient');
let sammanstallningRouter = require('./routes/sammanstallning');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/coronavirus', { useNewUrlParser: true, useUnifiedTopology: true });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to MongoDB!');
});

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/test', testRouter);
app.use('/oversikt', oversiktRouter);
app.use('/patient', patientRouter);
app.use('/sammanstallning', sammanstallningRouter);

module.exports = app;