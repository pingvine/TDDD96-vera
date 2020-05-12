import { Person } from './Person';
import { CareEvent } from './CareEvent';
import { HealthManager } from '../Managers/HealthManager';

export class Visit {
    private id: number;

    private person: Person;

    private hosts: Person[];

    private timeLine: CareEvent[];

    private healthManager: HealthManager;

    private visitInfo;

    constructor(id: number, person: Person) {
      this.id = id;
      this.person = person;
      this.hosts = [];
      this.timeLine = [];
      this.healthManager = undefined;
    }

    getId() {
      return this.id;
    }

    getPerson() {
      return this.person;
    }

    getHosts() {
      return this.hosts;
    }

    addHosts(person: Person) {
      this.hosts.push(person);
    }

    removeHost(person: Person) {
      const index = this.hosts.indexOf(person, 0);
      if (index > -1) {
        this.hosts.splice(index, 1);
      }
    }

    getTimeLine() {
      return this.timeLine;
    }

    addToTimeLine(careEvent: CareEvent) {
      this.timeLine.push(careEvent);
    }

    getHealthManager() {
      return this.healthManager;
    }

    setHealthManager(healthManager: HealthManager) {
      this.healthManager = healthManager;
    }

    getVisitInfo() {
      return this.visitInfo;
    }

    setVisitInfo(visitInfo) {
      this.visitInfo = visitInfo;
    }
}
