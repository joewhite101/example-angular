import { ResponseUsers, ResponseUser } from '../domain/response';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UsersService {
  // baseUrl = 'http://localhost:8080/exampleAngular/api/portalDemo/';
  // baseUrl = 'http://10.132.37.183:8080/exampleAngular/';
  baseUrl: string;
  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<ResponseUsers> {
    return this.httpClient.get<ResponseUsers>(this.baseUrl + 'api/portalDemo/users');
  }

  getById(id: number): Observable<ResponseUser> {
    this.baseUrl = window['baseUrl'];
    return this.httpClient.get<ResponseUser>(this.baseUrl + 'api/portalDemo/users/' + id);
  }
}
