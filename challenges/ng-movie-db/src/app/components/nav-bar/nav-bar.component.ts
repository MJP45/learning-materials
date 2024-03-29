import { Component, OnInit } from "@angular/core";
import { faBars, IconDefinition } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-nav-bar",
  templateUrl: "./nav-bar.component.html",
  styleUrls: ["./nav-bar.component.scss"]
})
export class NavBarComponent implements OnInit {
  faBars: IconDefinition = faBars;
  isOpen = false;

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  constructor() {}

  ngOnInit() {}
}
