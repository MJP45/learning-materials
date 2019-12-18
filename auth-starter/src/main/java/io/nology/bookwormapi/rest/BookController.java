package io.nology.bookwormapi.rest;

import io.nology.bookwormapi.entity.Book;
import io.nology.bookwormapi.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import static org.springframework.http.HttpHeaders.ACCESS_CONTROL_ALLOW_ORIGIN;

import javax.lang.model.util.Elements;
import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api")
public class BookController {
    private BookService bookService;

    @Autowired
    public BookController(BookService bookService) {
        this.bookService = bookService;
    }

    @GetMapping("/books")
    public ResponseEntity<List<Book>> findAll() {
        return ResponseEntity.status(HttpStatus.OK)
                .header(ACCESS_CONTROL_ALLOW_ORIGIN, "*")
                .body(bookService.findAll());
    }

    @GetMapping("/books/{bookId}")
    public ResponseEntity<Book> getBook(@PathVariable int bookId) {
        Book book = bookService.findById(bookId);
        if(book == null) throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Book NOT FOUND with id "+ bookId);
        return ResponseEntity.status(HttpStatus.OK).body(book);
    }

    @PostMapping("/books")
    public ResponseEntity<Book> addBook(@RequestBody Book book) {
        bookService.add(book);
        return ResponseEntity.status(HttpStatus.OK).body(book);
    }

    @PutMapping("/books")
    public ResponseEntity<Book> updateBook(@RequestBody Book book) {
        return ResponseEntity.status(HttpStatus.OK).body(bookService.update(book));
    }

    @DeleteMapping("/books/{bookId}")
    public ResponseEntity<String> deleteBook(@PathVariable int bookId) {
        Book book = bookService.findById(bookId);
        if( book == null) throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Could not find book for id " + bookId);
        bookService.deleteById(bookId);
        return ResponseEntity.status(HttpStatus.ACCEPTED).body("Book deleted at: " + bookId);
    }
}
