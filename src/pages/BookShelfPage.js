import React from 'react';
import BookList from '../components/BookList';
import bookshelf from './bookshelf-content';

const BookShelfPage = () => (
    <>
        <h1>Book Shelf</h1>
        <BookList bookshelf={bookshelf} />
    </>
);

export default BookShelfPage;