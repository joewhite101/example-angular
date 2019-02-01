import { StreamServe } from './../domain/streamserve';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class StreamServeService {

  constructor(private httpClient: HttpClient) { }
  baseUrl: string;

  add(streamServe: StreamServe): Observable<Object> {
    // this.customers.push(customer);
    this.baseUrl = window['baseUrl'];
    return this.httpClient.post<StreamServe>(this.baseUrl + 'streamserves', streamServe);
  }
}
