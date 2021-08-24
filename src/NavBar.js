import React from 'react';
import { Link } from 'react-router-dom';
import GoodReads from './goodreads.jpg';

const NavBar = () => (
    <div classname="nav-bar">
        <div className="page-links">
            <nav>
                <ul>
                    <li>
                        <Link to ="/">Home</Link>
                    </li>
                    <li>
                        <Link to ="/about">About</Link>
                    </li>
                    <li>
                        <Link to ="/bookshelf">Book Shelf</Link>
                    </li>
                </ul>
            </nav>
        </div>
        <div className="outside-links">
                <a href="https://www.goodreads.com/group/show/1143534-ma-d-je-n-stic-book-club">
                    <img src={GoodReads} alt="goodreads icon which links to the book club's goodread's page" height="40" />
                </a>
        </div>
    </div>
);

export default NavBar;