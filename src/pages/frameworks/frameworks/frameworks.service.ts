import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import { Framework } from './framework';

@Injectable()
export class FrameworksService {
  constructor(private _http: Http) { }

  getFrameworks() {
    const baseUrl = 'http://localhost:5118';
    const headers = new Headers();
    headers.set('Accept', 'application/json');
    headers.append('Access-Control-Allow-Origin', baseUrl);
    headers.append('Access-Control-Allow-Methods', 'GET');
    const options = new RequestOptions({headers: headers});
    return this._http.get(baseUrl + '/api/SampleData/GetFrameworks', options)
      .map((response: Response) => <Framework[]>response.json());
  }
}
