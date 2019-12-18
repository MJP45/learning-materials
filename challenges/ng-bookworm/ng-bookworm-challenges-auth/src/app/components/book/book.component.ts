import { Component, Input, OnInit } from "@angular/core";
import { IBook, emptyIBook } from "src/assets/data/book-data";

@Component({
  selector: "app-book",
  templateUrl: "./book.component.html",
  styleUrls: ["./book.component.scss"]
})
export class BookComponent implements OnInit {
  @Input() book: IBook = emptyIBook;
  favourite: boolean;
  cover = "";

  getCoverImage(book: IBook) {
    return book.volumeInfo.imageLinks
      ? book.volumeInfo.imageLinks.thumbnail
      : "../../../assets/images/book-not-found.png";
  }

  ngOnInit() {
    this.cover = this.getCoverImage(this.book);
  }
}
