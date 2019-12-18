import { Component } from "@angular/core";
import { mockBooks, IBook } from "src/assets/data/book-data";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent {
  books: IBook[] = mockBooks;
  filteredList: IBook[] = this.books;

  filterBySearch(searchText: string): IBook[] {
    return this.books.filter(book => {
      const { title, description } = book.volumeInfo;
      return (
        title.toLowerCase().includes(searchText.toLowerCase()) ||
        description.toLowerCase().includes(searchText.toLowerCase())
      );
    });
  }

  removeFilters(): void {
    this.filteredList = this.books;
  }
}
