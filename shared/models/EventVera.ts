import {EventType} from "./EventType";

export class EventVera {
    senderId: string;
    eventType: EventType;
    data: {}

    constructor(senderId?: string, eventType?: EventType, data?: any){
        this.senderId = senderId;
        this.eventType = eventType;
        this.data = data;
    }
}