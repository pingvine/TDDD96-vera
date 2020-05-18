import {Component, EventEmitter, OnChanges, OnInit, Output} from '@angular/core';
import { partyData } from '../../ehr.service';

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
      search: 'Buksmärta',
      team: 'A',
      ehrId: '',
      prio: 'red',
      age: '',
      tystnadsplikt: false,
      mottagning: '',
      remittance: false,
      idChecked: false,
      dr: 'Rakeeb',
      nurse: 'Ola',
      astNurse: 'Anna',

    },
    firstNames: '',
    lastNames: '',

    }
  constructor() { }

  calculateAge(date: Date) {
    const now = new Date(Date.now());
    var diff = ((now.getTime() - date.getTime()) / 1000);
    diff /= (60*60*24);

    return Math.abs(Math.floor(diff/365));
  }


  dateNow: Date;
  time: string;
  date: string;


  ngOnInit(): void {
    this.dateNow = new Date(Date.now());
    this.time = this.dateNow.toLocaleTimeString();
    this.date = this.dateNow.toLocaleDateString();
    this.party.additionalInfo.arrivalTime = this.date + ':' + this.time;
  }
  updateFirstName(firstName: string) {
    this.party.firstNames = firstName;
    console.log('Name:' + this.party.firstNames);
    this.newVisit.emit(this.party);
  }
  updateLastName(lastName: string) {
      this.party.lastNames = lastName;
      console.log('Name:' + lastName);
    this.newVisit.emit(this.party);
  }
  updateSocialId(socialId: string) {
    if (socialId != null) {
      var age = this.calculateAge(new Date(socialId));
      this.updateAge(age.toString());
      console.log(age);
      socialId = socialId.replace('-', '');
      socialId = socialId.replace('-', '');
      socialId = socialId.replace('-', '');

    }
    this.party.additionalInfo.socialId = socialId;
    console.log('Social id:' + socialId);
    this.newVisit.emit(this.party);
  }
  updateId(id: string) {
    this.party.additionalInfo.socialId += id.toString();
    console.log(id.slice(3,3));
    if (Number(id.slice(3, 3)) % 2 == 0) {

      this.updateGender('FEMALE');
    } else {
      this.updateGender('MALE');
    }
    console.log(this.party.additionalInfo.socialId);
    this.newVisit.emit(this.party);
  }
  updateAge(age: string) {
    this.party.additionalInfo.age = age;
    console.log('Age:' + this.party.additionalInfo.age);
    this.newVisit.emit(this.party);
  }
  updateGender(gender: string) {
    this.party.gender = gender;
    console.log('Gender:' + this.party.gender);
    this.newVisit.emit(this.party);
  }
  updatePhone(phone: string) {
    this.party.additionalInfo.phone = phone;
    console.log('Phone' + this.party.additionalInfo.phone);
    this.newVisit.emit(this.party);
  }
  updatePostcode(postcode: string) {
    this.party.additionalInfo.postcode = postcode;
    console.log('Postcode' + this.party.additionalInfo.postcode);
    this.newVisit.emit(this.party);
  }
  updateTown(town: string) {
    this.party.additionalInfo.town = town;
    console.log('Town' + this.party.additionalInfo.town);
    this.newVisit.emit(this.party);
  }
  updateAddress(address: string) {
    this.party.additionalInfo.address = address;
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
  updateArrivalMethod(arrivalMethod: string) {
    this.party.additionalInfo.arrivalMethod = arrivalMethod;
    console.log('ArrivalMethod ' + this.party.additionalInfo.arrivalMethod);
    this.newVisit.emit(this.party);
  }
  updateDepartment(department: string) {
    this.party.additionalInfo.mottagning = department;
    console.log('Mottagning ' + this.party.additionalInfo.mottagning);
    this.newVisit.emit(this.party);
  }
  updateSecrecy(secrecy: boolean) {
    this.party.additionalInfo.tystnadsplikt = secrecy;
    console.log('Tystnadsplikt ' + this.party.additionalInfo.tystnadsplikt);
    this.newVisit.emit(this.party);
  }
  updateRelative(relative: string) {
    this.party.additionalInfo.relative = relative;
    console.log('Relative' + this.party.additionalInfo.relative);
    this.newVisit.emit(this.party);
  }
}
