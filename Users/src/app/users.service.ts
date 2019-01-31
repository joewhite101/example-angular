import { User } from './domain/user';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UsersService {
  baseUrl = 'https://jsonplaceholder.typicode.com/';
  constructor(private httpClient: HttpClient) { }


  getAll(): Observable<Array<User>> {
    // return this.customers;
    return this.httpClient.get<Array<User>>(this.baseUrl + 'users');
  }
}
