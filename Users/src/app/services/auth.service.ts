import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  // loggedIn = false;
  // user: User;

  constructor() {}

  getToken(): string {
    const accessToken = localStorage.getItem('accessToken');
    console.log('ACCESS TOKEN', accessToken);
    return accessToken;
  }

}
