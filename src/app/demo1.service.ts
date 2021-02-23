import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Demo1 } from './demo1';


@Injectable({
  providedIn: 'root'
})
export class Demo1Service {

  _url = 'enroll';
  constructor(private _http: HttpClient) { }

  enroll(user: Demo1) {
    return this._http.post<any>(this._url, user);
  }
}
