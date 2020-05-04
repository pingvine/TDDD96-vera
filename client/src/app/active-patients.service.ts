import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,  HttpParams} from '@angular/common/http';
var baseUrl = 'https://rest.ehrscape.com/rest/v1';
var urlActive = '/demographics/party/query/?Active=True';

const httpOptions1 = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization' : 'Basic ' + btoa('lio.se1:lio.se123')
    }),
};

@Injectable()
export class ActivePatientsService {
    constructor(private http: HttpClient) { }
    url = baseUrl + urlActive;
    getActive(){
      return this.http.get(this.url, httpOptions1);
    }

}
/*
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,  HttpParams} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
var baseUrl = 'https://rest.ehrscape.com/rest/v1';
var ehrIdTest =  'f8afc5e3-f99f-4004-b536-d32a1837358a';
var testUrlFirstName = '/demographics/party/query/?firstNames=Test1';
var testUrlActive = '/demographics/party/query/?Active=True'
var testUrlGender = '/demographics/party/query/?gender=MALE'
var testUrlVP = '/view/981994d1-3d4a-44b3-9493-248bf3469e17/weight'
var testUrlEHR = '/ehr/0982d17b-5010-4c63-b388-97002b471569'
var testUrlEhrId = '/demographics/ehr/' + ehrIdTest + '/party';
var testURLNewEhrId = 'https://rest.ehrscape.com/rest/v1/ehr';
var testUrlNewEhr = '/ehr';
var templateID =  '/openEHR-EHR-COMPOSITION.journal_comp.v0'
var templateIDTest = 'openEHR-EHR-OBSERVATION.body_weight.v2'



const httpOptions1 = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization' : 'Basic ' + btoa('lio.se1:lio.se123')
    }),
};
const httpOptions2 = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization' : 'Basic ' + btoa('lio.se2:ehr4lio.se2')
    }),

};

const httpParams = new HttpParams()
    .set('ehrId', ehrIdTest)
    .set('templateId', 'Journal VERA2020')
    .set('format', 'FLAT')
    .set('committer', 'Test Viktor')


const httpOptionsCompositionData = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization' : 'Basic ' + btoa('lio.se2:ehr4lio.se2')
    }),
    params: httpParams
};



//-------------
var aqlEhrId = "SELECT c/uid/value as uid, " +
    "c/context/start_time as time, " +
    "c/name/value as name " +
    "FROM EHR[ehr_id/value = '" + ehrIdTest + "'] CONTAINS COMPOSITION c " +
    "ORDER BY c/context/start_time DESC";

var aqlVikt = "SELECT f/data[at0002]/events[at0003]/data[at0001]/items[at0004]/value, " +
    "c/name/value as name " +
    "FROM EHR[ehr_id/value = '" + ehrIdTest + "'] CONTAINS COMPOSITION c " +
    "CONTAINS OBSERVATION f[openEHR-EHR-OBSERVATION.body_weight.v2] " +
    "OFFSET 0 LIMIT 10";

var aqlSpO2 = "SELECT x/data[at0001]/events[at0002]/data[at0003]/items[at0006]/value as value, " +
    "c/name/value as name " +
    "FROM EHR[ehr_id/value = '" + ehrIdTest + "'] CONTAINS COMPOSITION c " +
    "CONTAINS OBSERVATION x[openEHR-EHR-OBSERVATION.pulse_oximetry.v1]";

const httpParamsAQL = new HttpParams().set('aql', aqlVikt);

const httpOptionsAQL = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization' : 'Basic ' + btoa('lio.se2:ehr4lio.se2')
    }),
    params: httpParamsAQL
}
//-------------
const partyData = {
  firstNames: 'test',
  lastNames: 'Bäckman',
  dateOfBirth: '1996-10-02',
  partyAdditionalInfo: [{
      key: 'Personnummer',
      value: '19000102-0000'
  }]
};
//-------------

const compositionData = {
    'ctx/language': 'sv',
    'ctx/territory': 'SI',
    'journal_vera2020/pulsoximetri/ospecificerad_händelse/spo|numerator': 90
}
//-------------
//party1 - id: 1411386
const partyData1 = {
  firstNames: 'Test1',
  lastNames: 'Patient1',
  dateOfBirth: '1986-10-02',
  gender: 'MALE',
  id: "1411386",
  partyAdditionalInfo: [
    {
      key: 'Personnummer',
      value: '860102-0000'
    },
    {
      key: 'Projekt',
      value: 'VERA2020'
    },
    {
      key: 'Sökorsak',
      value: 'Feber 154',
    },
    {
      key: 'Ankomst',
      value: '12:00-4/5',
    },
    {
      key: 'Ålder',
      value: '33',
    },
    {
      key: 'ehrId',
      value: "7cefe311-6911-4cb5-a577-360c12002599",
    },
    {
      key: 'Active',
      value: 'true',
    },
    {
      key: 'Ankomstsätt',
      value: 'bil',
    },
    {
      key: 'Team',
      value: 'A',
    },
    {
      key: 'Ansvläk',
      value: 'Test läk',
    },
    {
      key: 'Ansvssk',
      value: 'Test ssk',
    },
    {
      key: 'Ansvusk',
      value: 'Test usk'
    },
    {
      key: 'prio',
      value: 'yellow'
    },
  ],

};

@Injectable()
export class ConfigService {

  constructor(private http: HttpClient) { }
  urlname = baseUrl + testUrlFirstName;
  urlCreateId ='https://rest.ehrscape.com/rest/v1/ehr';
  urlPartyData = baseUrl +'/demographics/party';
  urlPartyDataUp = baseUrl +'/demographics/party/1411386';
  url1 = 'https://rest.ehrscape.com/rest/v1/archetype/flat/' + templateIDTest;
  urlcomposition = "https://rest.ehrscape.com/rest/v1/composition?templateId=openEHR-EHR-OBSERVATION.body_weight.v2&ehrId=f8afc5e3-f99f-4004-b536-d32a1837358a&format=FLAT";
  url3 = 'https://rest.ehrscape.com/rest/v1/composition/ec3bd8ca-7e93-4ec3-af7e-a81ab47b638c::lio.ehrscape.com::1';
  urlAQL = baseUrl + '/query?'
  urlId = "https://rest.ehrscape.com/rest/v1/demographics/party/1410604";

  urlIdDELETE = "https://rest.ehrscape.com/rest/v1/demographics/party/1411419"

  getName(){
    return this.http.get(this.urlname, httpOptions1);
  }
  getId(){
    return this.http.get(this.urlId)
  }
  getAQL(){
    return this.http.get(this.urlAQL, httpOptionsAQL)
  }
  createID(){
    return this.http.post(this.urlCreateId, '',httpOptions2);
  }
  postPartyData(){
    return this.http.post(this.urlPartyData, partyData1, httpOptions2)
  }
  postCompositionData(){
    return this.http.post(this.urlcomposition , compositionData , httpOptionsCompositionData)
  }
  putPartyUpdate(){
    return this.http.put(this.urlPartyData, partyData1, httpOptions2);
  }
  deleteParty(){
    return this.http.delete(this.urlIdDELETE, httpOptions2);
  }

}
*/
