import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchDataService {
  constructor(private http: HttpClient) { }

  // Get data from server and convert response to JavaScript List
  getData(url: string): Observable<any[]> {
    return this.http.get(url)
      .pipe(map(response => {
        const data = [];
        for (const key in response) {
          if (response.hasOwnProperty(key)) {
            data[key] = response[key];
          }
        }
        return data;
      }));
  }
}
