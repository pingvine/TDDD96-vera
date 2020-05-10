import {Component, OnChanges, OnInit} from '@angular/core';
import { partyData, EhrService } from '../../ehr.service'

@Component({
  selector: 'app-new-visit-information',
  templateUrl: './new-visit-information.component.html',
  styleUrls: ['./new-visit-information.component.css'],
})
export class NewVisitInformationComponent implements OnInit{

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
        prio: '',
        age: '',
        tystnadsplikt: false,
        mottagning: '',
        remittance: false,
        idChecked: false,

    },
    firstNames: 'test',
    lastNames: '123',
}
  constructor(private ehrService : EhrService) { }

  ngOnInit(): void {  }

  updateName(name: any) {
    this.party.firstNames = name.target.value;
    console.log('Name:' + this.party.firstNames);
  }

  updateSocialId(socialId: any) {
    this.party.additionalInfo.socialId = socialId.target.value;
    console.log('Social id:' + this.party.additionalInfo.socialId);
  }

  updateAge(age: any) {
    this.party.additionalInfo.age = age.target.value;
    console.log('Age:' + this.party.additionalInfo.age);
  }

  updateGender(gender: any) {
    this.party.gender = gender;
    console.log('Gender:' + this.party.gender);
  }

  updatePhone(phone: any) {
    this.party.additionalInfo.phone = phone.target.value;
    console.log('Phone' + this.party.additionalInfo.phone);
  }

  updatePostcode(postcode: any) {
    this.party.additionalInfo.postcode = postcode.target.value;
    console.log('Postcode' + this.party.additionalInfo.postcode);
  }
  updateTown(town: any) {
    this.party.additionalInfo.town = town.target.value;
    console.log('Town' + this.party.additionalInfo.town);
  }
  updateAddress(address: any) {
    this.party.additionalInfo.address = address.target.value;
    console.log('Address' + this.party.additionalInfo.address);
  }

  updateIdChecked(checked: boolean) {
    this.party.additionalInfo.idChecked = checked;
    console.log('checked' + this.party.additionalInfo.idChecked);
  }

  updateRemittance(remittance: boolean) {
    this.party.additionalInfo.remittance = remittance;
    console.log('Remittance' + this.party.additionalInfo.remittance);
  }

  updateRelative(relative: any) {
    this.party.additionalInfo.relative = relative.target.value;
    console.log('Relative' + this.party.additionalInfo.relative);
  }
  savePatient(){
    this.ehrService.createPerson(this.party);
    console.log('patient saved')
  }

}
