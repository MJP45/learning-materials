import { Component, OnInit } from '@angular/core';
import { faSignInAlt, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-user-registration-page-page',
  templateUrl: './user-registration-page.component.html',
  styleUrls: ['./user-registration-page.component.scss']
})
export class UserRegistrationPageComponent implements OnInit {
  faSignInAlt = faSignInAlt;
  faUser = faUser;
  constructor() { }

  ngOnInit() {
  }

  handleRegistrationForm(value) {
    console.log(value);
  }


}
