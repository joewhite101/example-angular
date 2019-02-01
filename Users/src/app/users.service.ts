import { ResponseUsers, ResponseUser } from './domain/response';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UsersService {
  // baseUrl = 'http://localhost:8080/exampleAngular/api/portalDemo/';
  // baseUrl = 'http://10.132.37.183:8080/exampleAngular/api/portalDemo/';
  baseUrl: string;
  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<ResponseUsers> {
    return this.httpClient.get<ResponseUsers>(this.baseUrl + 'api/portalDemo/users');
  }

  getById(id: number): Observable<ResponseUser> {
    console.log('windows second', window);
    this.baseUrl = window['baseUrl'];
    console.log('base url', this.baseUrl);
    return this.httpClient.get<ResponseUser>(this.baseUrl + 'api/portalDemo/users/' + id);
  }
}
