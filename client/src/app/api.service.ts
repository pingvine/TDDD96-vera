import {Injectable} from '@angular/core';
import {Observable, of,} from 'rxjs';
import {HttpClient, HttpHeaders,} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = 'http://localhost:5000/api/';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  // Simple HTTP GET for communication to server
  // getCases(): Observable<Any[]> {
  //   return this.http.get<Any[]>(`${apiUrl}`)
  //     .pipe(
  //       tap(cases => console.log('fetched cases')),
  //       catchError(this.handleError('getCases', []))
  //     );
  // }
}
