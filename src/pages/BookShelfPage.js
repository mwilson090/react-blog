import React from 'react';
import BookList from '../components/BookList';
import bookshelf from './bookshelf-content';

const BookShelfPage = () => (
    <>
        <BookList bookshelf={bookshelf} />
    </>
);

export default BookShelfPage;