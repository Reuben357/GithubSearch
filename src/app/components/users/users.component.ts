import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service'
import {Router} from "@angular/router";
import {NotificationService} from "../../services/notification.service";
import {SlimLoadingBarService} from "ng2-slim-loading-bar";


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  githubUsernameForm: FormGroup;
  private items;

  constructor(private formBuilder: FormBuilder,
    private notification: NotificationService,
    private router: Router,
    private slimLoadingBarService: SlimLoadingBarService,
    private userService: UserService) {
this.createForm()
}

startLoading() {
this.slimLoadingBarService.start();
}

stopLoading() {
this.slimLoadingBarService.stop();
}

createForm() {
this.githubUsernameForm = this.formBuilder.group({
githubUsername: ['', Validators.required]
})
}

getGithubUser(username: string) {
this.userService.getGithubUser(username).subscribe(data =>{
this.items = data['items']

// process results from query
this.startLoading()
if (this.items.length === 1){

// save items to local storage
localStorage.setItem('githubUserInfo', JSON.stringify(this.items[0]));

// redirect to repositories
this.router.navigateByUrl('/repositories')

} else {
// toast error
this.notification.showError('Please provide YOUR specific username.', 'Invalid username')
}
this.stopLoading()

});

}


  ngOnInit(): void {
  }

}
