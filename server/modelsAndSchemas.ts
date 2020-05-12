const mongoose = require('mongoose');

const EventVeraSchema = new mongoose.Schema({
  senderId: String,
  eventType: Number,
  data: {},
});

export const EventModel = mongoose.model('eventvera', EventVeraSchema);