import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  api = 'http://localhost:3000/api';
  token;

  constructor(private http: HttpClient,private router: Router) { }

  public login(userInfo: User){
    this.http.post(this.api + '/authenticate', {userInfo})
    .subscribe((resp: any) => {
     
      this.router.navigate(['registre']);
    localStorage.setItem('ACCESS_TOKEN', "access_token");
  }

    )}

  public isLoggedIn(){
    return localStorage.getItem('ACCESS_TOKEN') !== null;

  }

  public logout(){
    localStorage.removeItem('ACCESS_TOKEN');
  }
}
