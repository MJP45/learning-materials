import { Component, Output, EventEmitter } from "@angular/core";
import { faSearch, IconDefinition } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-search-bar",
  templateUrl: "./search-bar.component.html",
  styleUrls: ["./search-bar.component.scss"]
})
export class SearchBarComponent {
  @Output() handleSearch = new EventEmitter();

  placeholder = "Type an author to search";
  faSearch: IconDefinition | string = faSearch;
  searchText: string;
}
