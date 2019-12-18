package io.nology.bookwormapi.service;

import io.nology.bookwormapi.entity.Book;

import java.util.List;

public interface BookService {
    List<Book> findAll();
    Book findById(int bookId);
    void add(Book book);
    Book update(Book book);
    void deleteById(int bookId);
}
