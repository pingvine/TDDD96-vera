import { Injectable } from '@angular/core';
import {Person} from "../models/Person";
import {Visit} from "../models/Visit";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})

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
    let pnr = '';
    if (socialId.includes("-")) {
      let index = socialId.length - 5;
      pnr = socialId.substring(0, index) + socialId.substring(index+ 1, socialId.length);
    } else {
      pnr = socialId;
    }
    this.pnrSource.next(parseInt(pnr));
  }

  clearnPnr() {
    this.pnrSource.next(null);
  }

  clear() {
    this.clearnPnr();
    this.clearVisit()
  }
}