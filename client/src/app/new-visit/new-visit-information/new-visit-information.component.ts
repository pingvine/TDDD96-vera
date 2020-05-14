import {Component, EventEmitter, OnChanges, OnInit, Output} from '@angular/core';
import { partyData, EhrService } from '../../ehr.service';

@Component({
  selector: 'app-new-visit-information',
  templateUrl: './new-visit-information.component.html',
  styleUrls: ['./new-visit-information.component.css'],
})


export class NewVisitInformationComponent implements OnInit {
  departments = [
    'Motala', 'Linköping', 'Norrköping'
  ];
  arrivalMethods = [
    'Gående', 'Ambulans', 'Annat'
  ];


  @Output() newVisit = new EventEmitter<partyData>();
  party : partyData = {
    additionalInfo: {
      active: true,
      arrivalTime: '',
      arrivalMethod: '',
      socialId: '',
      projekt: 'VERA2020',
      search: '',
      team: 'X',
      ehrId: '',
      prio: 'red',
      age: '',
      tystnadsplikt: false,
      mottagning: '',
      remittance: false,
      idChecked: false,

    },
    firstNames: '',
    lastNames: '',
  }

  dateNow: Date;
  time: string;
  date: string;

  constructor() { }

  ngOnInit(): void {
    this.dateNow = new Date(Date.now());
    this.time = this.dateNow.toLocaleTimeString();
    this.date = this.dateNow.toLocaleDateString();
    this.party.additionalInfo.arrivalTime = this.date + ':' + this.time;
  }

  updateFirstName(firstName: any) {
    this.party.firstNames = firstName.target.value;
    console.log('Name:' + this.party.firstNames);
    this.newVisit.emit(this.party);
  }
  updateLastName(lastName: any) {
      this.party.lastNames = lastName.target.value;
      console.log('Name:' + lastName);
    this.newVisit.emit(this.party);
  }
  updateSocialId(socialId: any) {
    this.party.additionalInfo.socialId = socialId.target.value;
    console.log('Social id:' + this.party.additionalInfo.socialId);
    this.newVisit.emit(this.party);
  }

  updateAge(age: any) {
    this.party.additionalInfo.age = age.target.value;
    console.log('Age:' + this.party.additionalInfo.age);
    this.newVisit.emit(this.party);
  }

  updateGender(gender: any) {
    this.party.gender = gender;
    console.log('Gender:' + this.party.gender);
    this.newVisit.emit(this.party);
  }

  updatePhone(phone: any) {
    this.party.additionalInfo.phone = phone.target.value;
    console.log('Phone' + this.party.additionalInfo.phone);
    this.newVisit.emit(this.party);
  }

  updatePostcode(postcode: any) {
    this.party.additionalInfo.postcode = postcode.target.value;
    console.log('Postcode' + this.party.additionalInfo.postcode);
    this.newVisit.emit(this.party);
  }
  updateTown(town: any) {
    this.party.additionalInfo.town = town.target.value;
    console.log('Town' + this.party.additionalInfo.town);
    this.newVisit.emit(this.party);
  }
  updateAddress(address: any) {
    this.party.additionalInfo.address = address.target.value;
    console.log('Address' + this.party.additionalInfo.address);
    this.newVisit.emit(this.party);
  }

  updateIdChecked(checked: boolean) {
    this.party.additionalInfo.idChecked = checked;
    console.log('checked' + this.party.additionalInfo.idChecked);
    this.newVisit.emit(this.party);
  }

  updateRemittance(remittance: boolean) {
    this.party.additionalInfo.remittance = remittance;
    console.log('Remittance' + this.party.additionalInfo.remittance);
    this.newVisit.emit(this.party);
  }
  updateArrivalMethod(arrivalMethod: any) {
    this.party.additionalInfo.arrivalMethod = arrivalMethod;
    console.log('ArrivalMethod ' + this.party.additionalInfo.arrivalMethod);
    this.newVisit.emit(this.party);
  }
  updateDepartment(department: any) {
    this.party.additionalInfo.mottagning = department;
    console.log('Mottagning ' + this.party.additionalInfo.mottagning);
    this.newVisit.emit(this.party);
  }
  updateSecrecy(secrecy: boolean) {
    this.party.additionalInfo.tystnadsplikt = secrecy;
    console.log('Tystnadsplikt ' + this.party.additionalInfo.tystnadsplikt);
    this.newVisit.emit(this.party);
  }
  updateDate(date: string, time: string) {
    if (date.length < 1) {date = this.date}
    if (time.length < 1) {time = this.time}
    this.party.additionalInfo.arrivalTime = date + ':' + time;
    console.log('Time ' + this.party.additionalInfo.arrivalTime);
    this.newVisit.emit(this.party);
  }

  updateRelative(relative: any) {
    this.party.additionalInfo.relative = relative.target.value;
    console.log('Relative' + this.party.additionalInfo.relative);
    this.newVisit.emit(this.party);
  }
}
