import { Component, Input } from "@angular/core";
import { IBook } from "src/assets/data/book-data";

@Component({
  selector: "app-book-list",
  templateUrl: "./book-list.component.html",
  styleUrls: ["./book-list.component.scss"]
})
export class BookListComponent {
  @Input() books: IBook[] = [];
}
