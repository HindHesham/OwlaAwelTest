import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http: HttpClient) { }


  configUrl = 'http://localhost:3000/users/signUp';
  

  signUp(data: any) {
    console.log("d", data);
    return this.http.post(this.configUrl, data);
  }
}

