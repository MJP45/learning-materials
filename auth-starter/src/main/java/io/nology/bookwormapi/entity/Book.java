package io.nology.bookwormapi.entity;

import javax.persistence.*;

@Entity
@Table(name="book")
public class Book {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name="id")
    private int id;

    @Column(name="google_id")
    private String googleId;

    @Column(name="title")
    private String title;

    @Column(name="published_date")
	private String publishedDate;

    @Column(name="description")
    private String description;

    @Column(name="page_count")
    private int pageCount;

    @Column(name="thumbnail")
    private String thumbnail;

    @Column(name="small_thumbnail")
    private String smallThumbnail;

    public Book() {
    }

    public Book(String googleId, String title, String publishedDate, String description, int pageCount, String thumbnail, String smallThumbnail) {
        this.googleId = googleId;
        this.title = title;
        this.publishedDate = publishedDate;
        this.description = description;
        this.pageCount = pageCount;
        this.thumbnail = thumbnail;
        this.smallThumbnail = smallThumbnail;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getGoogleId() {
        return googleId;
    }

    public void setGoogleId(String googleId) {
        this.googleId = googleId;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getPublishedDate() {
        return publishedDate;
    }

    public void setPublishedDate(String publishedDate) {
        this.publishedDate = publishedDate;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getPageCount() {
        return pageCount;
    }

    public void setPageCount(int pageCount) {
        this.pageCount = pageCount;
    }

    public String getThumbnail() {
        return thumbnail;
    }

    public void setThumbnail(String thumbnail) {
        this.thumbnail = thumbnail;
    }

    public String getSmallThumbnail() {
        return smallThumbnail;
    }

    public void setSmallThumbnail(String smallThumbnail) {
        this.smallThumbnail = smallThumbnail;
    }

    @Override
    public String toString() {
        return "Book{" +
                "id=" + id +
                ", googleId='" + googleId + '\'' +
                ", title='" + title + '\'' +
                ", publishedDate='" + publishedDate + '\'' +
                ", description='" + description + '\'' +
                ", pageCount=" + pageCount +
                ", thumbnail='" + thumbnail + '\'' +
                ", smallThumbnail='" + smallThumbnail + '\'' +
                '}';
    }
}
