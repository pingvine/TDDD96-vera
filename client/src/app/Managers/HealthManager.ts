import { CareEvent } from '../models/CareEvent';
import { getEhrData, postEhrData } from './HealtRecord';


export class HealthManager {
    private ehrId: number;

    constructor(id: number) {
        this.ehrId = id;
    }

    getData(id: number, data: string) {
    return getEhrData(id, data);
    }

    postData(id: number, data: string) {
        postEhrData(id, data);
    }

    createRecord() {
        return true;
    }

    addCareEvent(event: CareEvent) {
        return true;
    }
}
