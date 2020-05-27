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

const CurrentIdSchema = new mongoose.Schema({
    currentId: Number
});

export const EventModel = mongoose.model('eventvera', EventVeraSchema);
export const TestEventModel = mongoose.model('testevent', TestSchema);
export const CurrentIdModel = mongoose.model('currentid', CurrentIdSchema);

