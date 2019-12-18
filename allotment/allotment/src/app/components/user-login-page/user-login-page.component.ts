import { Component, OnInit, ViewChild } from '@angular/core';
import { faSignInAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-login-page-page',
  templateUrl: './user-login-page.component.html',
  styleUrls: ['./user-login-page.component.scss']
})
export class UserLoginPageComponent implements OnInit {
  faSignInAlt = faSignInAlt;
  faUser = faUser;

  constructor() { }

  ngOnInit() {
  }

  handleLoginForm(value) {
    console.log(value)
   }

}
