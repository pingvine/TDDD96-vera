import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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

const testparty : partyData = {
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

@Injectable({
  providedIn: 'root',
})
export class EhrService {
  httpOptions1 = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Basic ${btoa('lio.se1:lio.se123')}`,
    }),
  };

  httpOptions2 = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Basic ${btoa('lio.se2:ehr4lio.se2')}`,
    }),

  };

  baseUrl = 'https://rest.ehrscape.com/rest/v1';

  urlCreateId = 'https://rest.ehrscape.com/rest/v1/ehr';

  urlPartyData = `${this.baseUrl}/demographics/party`;

  urlpnr = '/demographics/party/query/?socialId=';

  urlPnr = this.baseUrl + this.urlpnr;

  urlActive = `${this.baseUrl}/demographics/party/query/?Active=True`;


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
    console.log(party)
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
}
