import {Component, OnChanges, OnInit} from '@angular/core';

@Component({
  selector: 'app-new-visit-information',
  templateUrl: './new-visit-information.component.html',
  styleUrls: ['./new-visit-information.component.css'],
})
export class NewVisitInformationComponent implements OnInit {

  socialId: number = null;
  name: string = null;
  age: number = null;
  gender: string = null;
  phone: number = null;
  address: string = null;
  postcode: number = null;
  town: string = null;
  idChecked: boolean = false;
  relative: string = null;
  remittance: boolean = false;

  constructor() { }

  ngOnInit(): void {  }

  updateName(name: any) {
    this.name = name.target.value;
    console.log('Name:' + this.name);
  }

  updateSocialId(socialId: any) {
    this.socialId = socialId.target.value;
    console.log('Social id:' + this.socialId);
  }

  updateAge(age: any) {
    this.age = age.target.value;
    console.log('Age:' + this.age);
  }

  updateGender(gender: any) {
    this.gender = gender;
    console.log('Gender:' + this.gender);
  }

  updatePhone(phone: any) {
    this.phone = phone.target.value;
    console.log('Phone' + this.phone);
  }

  updatePostcode(postcode: any) {
    this.postcode = postcode.target.value;
    console.log('Postcode' + this.postcode);
  }
  updateTown(town: any) {
    this.town = town.target.value;
    console.log('Town' + this.town);
  }
  updateAddress(address: any) {
    this.address = address.target.value;
    console.log('Address' + this.address);
  }

  updateIdChecked(checked: boolean) {
    this.idChecked = checked;
    console.log('checked' + this.idChecked);
  }

  updateRemittance(remittance: boolean) {
    this.remittance = remittance;
    console.log('Remittance' + this.remittance);
  }

  updateRelative(relative: any) {
    this.relative = relative.target.value;
    console.log('Relative' + this.relative);
  }

}
