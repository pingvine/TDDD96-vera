import {Person} from './Person';
import {Visit} from './Visit';

export class Team {
  private id: number;
  private prefix: string;
  private visits: Visit[];
  private members: Person[];

  constructor(id: number, members: Person[]) {
    this.id = id;
    this.members = members;
  }

  getId() {
    return this.id;
  }

  getPrefix() {
    return this.prefix;
  }

  getVisits() {
    return this.visits
  }

  addVisit(visit: Visit) {
    this.visits.push(visit);
  }

  removeVisit(visit: Visit) {
    const index = this.visits.indexOf(visit, 0)
    if (index > -1) {
      this.visits.splice(index, 1)
    }
  }

  getMembers() {
    return this.members;
  }
}
