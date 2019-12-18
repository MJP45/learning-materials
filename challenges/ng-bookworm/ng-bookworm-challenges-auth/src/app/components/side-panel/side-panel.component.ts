import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { Component, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-side-panel",
  templateUrl: "./side-panel.component.html",
  styleUrls: ["./side-panel.component.scss"]
})
export class SidePanelComponent {
  @Output() handleSearch = new EventEmitter();
  @Output() handleResetClick = new EventEmitter();

  faFilter = faFilter;
  genres = ["sci-fi", "romance", "action", "murder mystery"];
  menuOpen = false;
  label = "Any genre";
  min = 0;
  max = 999;
  value = 550;
  searchText = "";

  handleMenuClick(): void {
    this.menuOpen = !this.menuOpen;
  }

  updateSearch(searchText: string): void {
    this.handleSearch.emit(searchText);
  }

  resetFilters(): void {
    this.searchText = "";
    this.handleResetClick.emit();
  }
}
