import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  get(url) {
    return this.httpClient.get(url);
  }
  post(url, body) {

    let header = new HttpHeaders()
      .set('Content-Type', 'application/json');

    return this.httpClient.post(url, body, { headers: header });
    // return this.httpClient.post(url, body);
  }
}
