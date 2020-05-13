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

  currentVisit = this.visitSource.asObservable();

  constructor() { }

  changeVisit(visit: Visit) {
    this.visitSource.next(visit);
  }

  clearVisit() {
    this.visitSource.next(null);
  }
}
