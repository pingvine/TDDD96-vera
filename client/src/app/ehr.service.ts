import { Injectable } from '@angular/core';
import {
  HttpClient, HttpHeaders, HttpParams,
} from '@angular/common/http';
import * as accounts from './accounts-EHRScape.json';

//Interface for creating party data.
export interface partyData {
    additionalInfo: {
        active: boolean;
        arrivalTime: string;
        arrivalMethod: string;
        dr?: string;
        nurse?: string;
        astNurse?: string;
        socialId: string;
        projekt: string;
        search: string;
        team: string;
        ehrId: string;
        prio: string;
        age: string;
        tystnadsplikt: boolean;
        mottagning: string;
        remittance: boolean;
        phone?: string;
        postcode?: string;
        town?: string;
        idChecked:boolean;
        address?: string;
        relative?: string;

    };
    firstNames: string;
    gender?: string;
    id?: string;
    lastNames: string;
    version?: number;
}


@Injectable({
  providedIn: 'root',
})
export class EhrService {
    httpOptions1 = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            Authorization: `Basic ${btoa(accounts.readAccountCredentials)}`,
        }),
    };


  httpOptions2 = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Basic ${btoa(accounts.writeReadCredentials)}`,
    }),

  };

  compositions = {
      andning: 'journal_vera2020/andning/ospecificerad_händelse/frekvens|magnitude'
  }

  baseUrl = 'https://rest.ehrscape.com/rest/v1';

  urlCreateId = 'https://rest.ehrscape.com/rest/v1/ehr';

  urlPartyData = `${this.baseUrl}/demographics/party`;

  urlpnr = '/demographics/party/query/?socialId=';

  urlPnr = this.baseUrl + this.urlpnr;

  urlActive = `${this.baseUrl}/demographics/party/query/?Active=True`;

  urlcomposition = "https://rest.ehrscape.com/rest/v1/composition?";

  urlAQL = this.baseUrl + '/query/?';


  constructor(private http: HttpClient) { }


  /* Hämtar party-data från givet personnumemer, bör endast hämta ett party */
  getPnr(pnr: string) {
    const url = this.urlPnr + pnr;
    return this.http.get(url, this.httpOptions1);
  }


  /* Postar party data för en person, kommer innehålla bl.a. ehrid, pnr och namn, dummydata */
  postPartyData(party) {
    return this.http.post(this.urlPartyData, party, this.httpOptions2);
  }

  /* Skapar ett ehrID om det saknas för givet personnummer, annars hämtar den party datan för det personnummret
  * Egentligen ska det skickas med partydata som input för att fylla på om det inte finns ett ehrid */
  async createPerson(party) {
    this.getPnr(party.additionalInfo.socialId).subscribe((resp: any) => {
      if (resp === null) {
        console.log('Skapa nytt ehrId och lägg till party data');
        const ehr = this.http.post(this.urlCreateId, '', this.httpOptions2);
        ehr.subscribe((resp2: any) => {
            party.additionalInfo.ehrId = resp2.ehrId;
            this.postPartyData(party).subscribe((ans1) => {
                console.log(ans1);
          });
        });
      } else {
        console.log('Hämta befintlig party data');
        console.log(resp.parties[0]); // Antag att en träff per personnummer
        return resp.parties[0];
      }
    });
  }

  /* Hämta alla aktiva patienter från EHRscape */
  getActivePatients(location: string) {
    return this.http.get(this.urlActive, this.httpOptions1);
  }
  /*Spara en composition i EHRScape*/
    async postCompositionData(compositionData, ehrId: string){

        const httpOptionsCompositionData = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization' : 'Basic ' + btoa(accounts.writeReadCredentials)
            }),
            params: new HttpParams()
                .set('ehrId', ehrId.toString())
                .set('templateId', 'Journal VERA2020')
                .set('format', 'FLAT')
            };
        console.log('test')
        this.http.post(this.urlcomposition , compositionData , httpOptionsCompositionData).subscribe(answer => {
            console.log(answer);
        });

    }
    //AQL query for the latest SpO2 value
    getSpo2(ehrId: string){
        var aqlSpo2 = "SELECT x/data[at0001]/events[at0002]/data[at0003]/items[at0006]/value as value, " +
                      "c/name/value as name " +
                      "FROM EHR[ehr_id/value = '" + ehrId + "'] CONTAINS COMPOSITION c " +
                      "CONTAINS OBSERVATION x[openEHR-EHR-OBSERVATION.pulse_oximetry.v1]" +
                      "ORDER BY c/context/start_time DESC " +   "OFFSET 0 LIMIT 1";

        const httpParamsAQL = new HttpParams().set('aql', aqlSpo2);
        return this.sendAQL(httpParamsAQL);
    }

    //AQL query for the latest AF value
    getAf(ehrId: string){
        var aqlAf = "SELECT x/data[at0001]/events[at0002]/data[at0003]/items[at0004]/value as value," +
                         "c/name/value as name " +
                         "FROM EHR[ehr_id/value = '" + ehrId + "'] CONTAINS COMPOSITION c " +
                         "CONTAINS OBSERVATION x[openEHR-EHR-OBSERVATION.respiration.v2]" +
                         "ORDER BY c/context/start_time DESC " +   "OFFSET 0 LIMIT 1";

        const httpParamsAQL = new HttpParams().set('aql', aqlAf);
        return this.sendAQL(httpParamsAQL);
    }

    //AQL query for the latest Pulse value
    getPulse(ehrId: string){
        var aqlPuls = "SELECT x/data[at0002]/events[at0003]/data[at0001]/items[at0004]/value as value," +
                      "c/name/value as name " +
                      "FROM EHR[ehr_id/value = '" + ehrId + "'] CONTAINS COMPOSITION c " +
                      "CONTAINS OBSERVATION x[openEHR-EHR-OBSERVATION.pulse.v2]" +
                      "ORDER BY c/context/start_time DESC " +   "OFFSET 0 LIMIT 1";
        const httpParamsAQL = new HttpParams().set('aql', aqlPuls);
        return this.sendAQL(httpParamsAQL);
    }

    //AQL query for the latest BT value
    getBt(ehrId: string){
        var aqlBlodtryck = "SELECT x/data[at0001]/events[at0006]/data[at0003]/items[at1006]/value as value," +
                           "c/name/value as name " +
                           "FROM EHR[ehr_id/value = '" + ehrId + "'] CONTAINS COMPOSITION c " +
                           "CONTAINS OBSERVATION x[openEHR-EHR-OBSERVATION.blood_pressure.v2]" +
                           "ORDER BY c/context/start_time DESC " +   "OFFSET 0 LIMIT 1";
        const httpParamsAQL = new HttpParams().set('aql', aqlBlodtryck);
        return this.sendAQL(httpParamsAQL);
    }

    //AQL query for the latest Temp value
    getTemp(ehrId: string){
        var aqlKroppstemperatur = "SELECT x/data[at0002]/events[at0003]/data[at0001]/items[at0004]/value as value," +
                                  "c/name/value as name " +
                                  "FROM EHR[ehr_id/value = '" + ehrId + "'] CONTAINS COMPOSITION c " +
                                  "CONTAINS OBSERVATION x[openEHR-EHR-OBSERVATION.body_temperature.v2] " +
                                  "ORDER BY c/context/start_time DESC " +   "OFFSET 0 LIMIT 1";
        const httpParamsAQL = new HttpParams().set('aql', aqlKroppstemperatur);
        return this.sendAQL(httpParamsAQL);
    }

    //AQL query for the latest Weight value
    getWeight(ehrId: string){
        var aqlWeight = "SELECT x/data[at0002]/events[at0003]/data[at0001]/items[at0004]/value as value," +
                      "c/name/value as name " +
                      "FROM EHR[ehr_id/value = '" + ehrId + "'] CONTAINS COMPOSITION c " +
                      "CONTAINS OBSERVATION x[openEHR-EHR-OBSERVATION.body_weight.v2]" +
                      "ORDER BY c/context/start_time DESC " +   "OFFSET 0 LIMIT 1";
        const httpParamsAQL = new HttpParams().set('aql', aqlWeight);
        return this.sendAQL(httpParamsAQL);
    }

    //AQL query for the latest Pain value
    getPain(ehrId: string){
        var aqlAbbeyPainScal = "SELECT x/data[at0001]/events[at0002]/data[at0003]/items[at0029]/value as value," +
                               "c/name/value as name " +
                               "FROM EHR[ehr_id/value = '" + ehrId + "'] CONTAINS COMPOSITION c " +
                               "CONTAINS OBSERVATION x[openEHR-EHR-OBSERVATION.abbey_pain_scale.v0]" +
                               "ORDER BY c/context/start_time DESC " +   "OFFSET 0 LIMIT 1";
        const httpParamsAQL = new HttpParams().set('aql', aqlAbbeyPainScal);
        return this.sendAQL(httpParamsAQL);

    }

    //Sends AQL query
    sendAQL(httpParamsAQL){
        const httpOptionsAQL = {
            headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization' : 'Basic ' + btoa(accounts.writeReadCredentials)
            }),
            params: httpParamsAQL
            }
        return this.http.get(this.urlAQL, httpOptionsAQL);

    }
}
