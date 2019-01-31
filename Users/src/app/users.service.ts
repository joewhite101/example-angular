import { Response } from './domain/response';
import { User } from './domain/user';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UsersService {
  baseUrl = 'http://localhost:8080/exampleAngular/api/portalDemo/';
  constructor(private httpClient: HttpClient) { }


  getAll(): Observable<Response> {
    // return this.customers;
    return this.httpClient.get<Response>(this.baseUrl + 'users');
  }
}
