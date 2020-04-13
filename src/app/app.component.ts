import { Component } from '@angular/core';
import { SlimLoadingBarService } from "ng2-slim-loading-bar";
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router
} from "@angular/router";
import { NotificationService } from "./services/notification.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GithubSearch';

  constructor(private loadingBar: SlimLoadingBarService,
    private router: Router) {

    
  }
}
