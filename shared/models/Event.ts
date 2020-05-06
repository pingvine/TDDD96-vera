import {EventType} from "./EventType";

export interface Event {
    senderId: string;
    eventType: EventType;
    data: {}
}