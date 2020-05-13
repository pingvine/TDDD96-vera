import { Injectable } from '@angular/core';
import {Person} from "../models/Person";
import {Visit} from "../models/Visit";
import {BehaviorSubject} from "rxjs";
import {getNumberFromSocialString} from "../util/helpers";

@Injectable({
  providedIn: 'root'
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

  constructor() { }

  changeVisit(visit: Visit) {
    this.visitSource.next(visit);
  }

  clearVisit() {
    this.visitSource.next(null);
  }

  changePnr(socialId: string) {
    this.pnrSource.next(getNumberFromSocialString(socialId));
  }

  clearnPnr() {
    this.pnrSource.next(null);
  }

  clear() {
    this.clearnPnr();
    this.clearVisit()
  }
}
