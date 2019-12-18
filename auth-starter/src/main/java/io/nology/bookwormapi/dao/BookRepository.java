package io.nology.bookwormapi.dao;

import io.nology.bookwormapi.entity.Book;
import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import java.util.List;

@Repository
public class BookRepository implements BookDAO{
    private EntityManager entityManager;

    @Autowired
    public BookRepository(EntityManager entityManager) {
        this.entityManager = entityManager;
    }

    @Override
    public List<Book> findAll() {
        return entityManager
                .unwrap(Session.class)
                .createQuery("from Book ", Book.class)
                .list();
    }

    @Override
    public Book findById(int bookId) {
        return entityManager
                .unwrap(Session.class)
                .find(Book.class, bookId);
    }

    @Override
    public void add(Book book) {
        entityManager
                .unwrap(Session.class)
                .save(book);
    }

    @Override
    public Book update(Book book) {
        entityManager
                .unwrap(Session.class)
                .merge(book);
        return book;
    }

    @Override
    public void deleteById(int bookId) {
        Book bookToDelete = findById(bookId);
        entityManager
                .unwrap(Session.class)
                .remove(bookToDelete);
    }
}
