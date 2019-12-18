package io.nology.bookwormapi.dao;
import io.nology.bookwormapi.entity.Book;

import java.util.List;

public interface BookDAO {
    List<Book> findAll();
    Book findById(int bookId);
    void add(Book book);
    Book update(Book book);
    void deleteById(int bookId);
}
