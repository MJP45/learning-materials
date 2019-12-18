package io.nology.bookwormapi.service;

import io.nology.bookwormapi.dao.BookDAO;
import io.nology.bookwormapi.entity.Book;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class BookServiceImpl implements BookService {
    private BookDAO bookDAO;

    @Autowired
    public BookServiceImpl(BookDAO bookDAO) {
        this.bookDAO = bookDAO;
    }

    @Override
    @Transactional
    public List<Book> findAll() {
        return bookDAO.findAll();
    }

    @Override
    @Transactional
    public Book findById(int bookId) {
        return bookDAO.findById(bookId);
    }

    @Override
    @Transactional
    public void add(Book book) {
        bookDAO.add(book);
    }

    @Override
    @Transactional
    public Book update(Book book) {
        return bookDAO.update(book);
    }

    @Override
    @Transactional
    public void deleteById(int bookId) {
        bookDAO.deleteById(bookId);
    }
}
