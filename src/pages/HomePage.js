import React from 'react';
import CoverNext from '../covers/first.jpg';
import Meeting from '../announcements/Dec21.JPG';
import { Fade } from 'react-slideshow-image';

const HomePage = () => (
            <div className="each-fade">
                <div className="Meeting">
                    <img src={Meeting} width="500px" alt="Meeting December 19, 1pm est" />
                </div>
                <div className="image-container">
                    <img src={CoverNext} alt="First Person Singular by Haruki Murakami picture" />
                </div>
            </div>
);

export default HomePage;