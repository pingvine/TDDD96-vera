import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {DummyGet} from './models/get.dummy.model';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  constructor(private http: HttpClient) { }

  // Get data from server and convert response to JavaScript List
  getData(url: string): Observable<DummyGet[]> {
    return this.http.get<DummyGet>(url)
      .pipe(map(response => {
        /*const data = [];
        console.log(response);
        for (const key in response) {
          console.log({...response});
          if (response.hasOwnProperty(key)) {
            data.push(response[key]);
          }
        }*/
        const data = [];
        data.push({...response});
        return data;
      }));
  }
}
