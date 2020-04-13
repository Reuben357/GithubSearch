import { Injectable } from '@angular/core';
import{authHeader} from "../helpers/auth.headers";
import {configs} from "../app.config";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  //define endpoint to query
  private searchUsersEndpoint: string = configs.apiBaseURL + '/search/users';


  // define http-options
  httpOptions = {
    headers: new HttpHeaders(
      {
        'Accept': 'application/json',
        'Authorization': authHeader
      }
    ),
    params: {
      'q': ''
    }
  }

  constructor(private http: HttpClient) {
  }

  getGithubUser(username: string) {

    // add query parameter
    this.httpOptions.params.q = username;

    return this.http.get(this.searchUsersEndpoint, this.httpOptions);

  }
}
