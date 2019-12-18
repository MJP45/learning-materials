import { Component, Input } from "@angular/core";
import { faSortDown, IconDefinition } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-dropdown",
  templateUrl: "./drop-down.component.html",
  styleUrls: ["./drop-down.component.scss"]
})
export class DropdownComponent {
  @Input() label: string;

  faSortDown: IconDefinition | string = faSortDown;
  isOpen = false;
}
