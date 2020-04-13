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
    this.githubUserInfo = JSON.parse(this.repositoriesService.getGithubUserInfo());

    this.repositoriesService.getUserRepositories(this.githubUserInfo.repos_url).subscribe((data: RepositoryModel[])  => {
      this.userRepositories = data;
      this.repositoryCount = this.userRepositories.length || 0;
    });

    this.repositoriesService.getUserFollowers(this.githubUserInfo.followers_url).subscribe((data: UserModel[] )=> {
      this.userFollowers = data;
      this.followerCount =this.userFollowers.length || 0;
    })
  }
  

}
