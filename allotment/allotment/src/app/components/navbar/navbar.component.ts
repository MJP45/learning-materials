import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { faHome, faArrowCircleLeft, faArrowCircleRight, faFolderPlus, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  faHome = faHome;
  faArrowCircleLeft = faArrowCircleLeft;
  faArrowCircleRight = faArrowCircleRight;
  faFolderPlus = faFolderPlus;
  faSignOutAlt = faSignOutAlt;

  @Output() handleLeftArrowClick = new EventEmitter();
  @Output() handleRightArrowClick = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  showLogoutAlert(){
    alert("You are now logged out!");
  }

}
