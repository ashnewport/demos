import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ServerService {
  constructor(private http: Http) {}

  storeServers(servers: any) {
    return this.http.post('https://udemy-ng-http-d080f.firebaseio.com/data.json', servers);
  }
}
