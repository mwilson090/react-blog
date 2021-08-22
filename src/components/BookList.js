import React from 'react';

const BookList = ({ bookshelf }) => {
    return (
        <>
        {bookshelf.map((book, key) => (
            <div className="article-list-item" key={key}>
                <img key={key} alt={book.image} src={require(`../covers/${book.image}.jpg`).default} width="300" />
                <h3><i>{book.title}</i> by {book.author}</h3>
                <h4>Genre: {book.genre}</h4>
                <h4>Pages: {book.pages}</h4>
                <h4>Meeting Date: {book.date}</h4>
            </div>
        ))}
        </>
    );
}

export default BookList;