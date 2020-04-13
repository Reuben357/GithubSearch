import { Component, OnInit } from '@angular/core';
import UserModel from "../../models/user.model";
import {RepositoriesService} from "../../services/repositories.service";
import RepositoryModel from "../../models/repository.model";


@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {


  githubUserInfo: UserModel;
  userRepositories: RepositoryModel[];
  userFollowers: UserModel[];
  followerCount: number;
  repositoryCount: number;

  constructor(private repositoriesService: RepositoriesService) { }

  ngOnInit(): void {
    
    
  

}
