import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {authHeader} from "../helpers/auth.headers";


@Injectable({
  providedIn: 'root'
})
export class RepositoriesService {

  httpOptions = {
    headers: new HttpHeaders({
      'Accept': 'application/json',
      'Authorization': authHeader
    })
  }


  constructor(private http: HttpClient) { }

  getGithubUserInfo(){
    return localStorage.getItem('githubUserInfo');
  }

  getUserRepositories(repos_url: string) {
    return this.http.get(repos_url, this.httpOptions)
  }

  getUserFollowers(followers_url: string) {
    return this.http.get(followers_url, this.httpOptions)
  }
}
