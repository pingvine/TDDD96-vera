import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Person } from '../models/Person';
import { Visit } from '../models/Visit';
import { getNumberFromSocialString } from '../util/helpers';


const visitKey = 'currentvisit';
const pnrKey = 'currentpnr';

@Injectable({
  providedIn: 'root',
})

/**
 * Serves the currently selected patient (visit).
 * Subscribe on visit source.
 */
export class PatientService {
  // Behaviour subject saves the last added object
  private visitSource = new BehaviorSubject<Visit>(null);

  private pnrSource = new BehaviorSubject<number>(null);

  currentVisit = this.visitSource.asObservable();

  currentPnr = this.pnrSource.asObservable();

  constructor() {
    if (sessionStorage.getItem(visitKey) !== 'undefined') {
      // Unpack visit
      const visitJson = JSON.parse(sessionStorage.getItem(visitKey));
      const visitObj = new Visit('', new Person(0, '', ''));
      Object.assign(visitObj, visitJson);
      this.visitSource.next(visitObj);
    }

    const pnr = sessionStorage.getItem(pnrKey);
    if (pnr !== 'undefined' && pnr) {
      this.changePnr(pnr);
    }
  }

  changeVisit(visit: Visit) {
    this.visitSource.next(visit);
    if (visit) {
      sessionStorage.setItem(visitKey, JSON.stringify(visit));
    }
  }

  clearVisit() {
    this.visitSource.next(null);
    sessionStorage.removeItem(visitKey);
  }

  changePnr(socialId: string) {
    this.pnrSource.next(parseInt(socialId));
    sessionStorage.setItem(pnrKey, `${socialId}`);
  }

  clearnPnr() {
    this.pnrSource.next(null);
  }

  clear() {
    this.clearnPnr();
    this.clearVisit();
  }
}
