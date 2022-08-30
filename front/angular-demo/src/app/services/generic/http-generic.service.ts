import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServerResponse } from 'src/app/models/server/server.model';

@Injectable({
  providedIn: 'root'
})
export class HttpGenericService {

  constructor(
    private http: HttpClient
  ) { }

  getFromServer = (): Observable<ServerResponse> => {
    return this.http.get<ServerResponse>('http://localhost:3001/get-data');
  }

  crashAtServer = (): Observable<{[key: string]: any}[]> => {
    return this.http.get<{[key: string]: any}[]>('http://localhost:3001/crash');
  }
}
