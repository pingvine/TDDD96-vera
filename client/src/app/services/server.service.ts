import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EventVera } from '../../../../shared/models/EventVera';
import { User } from '../models/User';

const baseUrl = 'http://localhost:4201';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class ServerService {
  constructor(private http: HttpClient) { }

  getEvents(): Observable<any> {
    const url = `${baseUrl}/events`;
    return this.http.get(url, httpOptions);
  }

  getId() : Observable<any> {
    const url = `${baseUrl}/id`;
    return this.http.post(url, '', httpOptions);
  }

  createUser(user: User) {
    const url = `${baseUrl}/user`;
    return this.http.post(url, JSON.stringify(user), httpOptions);
  }
}
