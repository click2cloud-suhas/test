import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router) {}

  login() {
    // this.router.navigate(['/app-list']);
    // this.router.navigate(['/app-myfarm']);
    // this.router.navigate(['/app-speach']);
    // this.router.navigate(['/home']);
    // this.router.navigate(['/app-chat-bot']);
    // this.router.navigate(['/home']);
    // this.router.navigate(['/app-speech']);
    this.router.navigate(['/app-my-home']);
  }

  navigateToForgetPassword() {
    this.router.navigate(['/forget-password']);
  }

}
