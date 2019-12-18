import { Component } from "@angular/core";
import { faHeart, IconDefinition } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent {
  faHeart: IconDefinition | string = faHeart;
  isActive = false;
  searchText = "bookworm";

  handleFavClick() {
    this.isActive = !this.isActive;
  }

  updateSearchText(searchText: string) {
    this.searchText = searchText;
  }
}
