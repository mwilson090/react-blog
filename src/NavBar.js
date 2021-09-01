import React from 'react';
import { Link } from 'react-router-dom';
import GoodReads from './goodreads.jpg';
import {BiHomeHeart, BiBookBookmark, BiSmile, BiMeteor} from 'react-icons/bi';

const NavBar = () => (
    <div classname="nav-bar">
        <div className="page-links">
            <nav>
                <ul>
                    <li>
                        <Link to ="/"><BiHomeHeart className="event" color="#ffccbb" />Home</Link>
                    </li>
                    <li>
                        <Link to ="/about"><BiSmile className="event" color="#ffccbb" />About</Link>
                    </li>
                    <li>
                        <Link to ="/bookshelf"><BiBookBookmark className="event" color="#ffccbb" />Book Shelf</Link>
                    </li>
                    <li>
                        <Link to ="/data"><BiMeteor className="event" color="#ffccbb" />Data</Link>
                    </li>
                    <li className="outside=links">
                        <a href="https://www.goodreads.com/group/show/1143534-ma-d-je-n-stic-book-club">
                            <img src={GoodReads} alt="goodreads icon which links to the book club's goodread's page" height="40" />
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
);

export default NavBar;