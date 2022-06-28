import React from 'react';
import Meeting from '../announcements/Book_Club_Invite_July_2022.png';
import { Fade } from 'react-slideshow-image';

const HomePage = () => (
            <div className="each-fade">
                <div className="Meeting">
                    <img src={Meeting} alt="Meeting July 24, 1pm est" />
                </div>
            </div>
);

export default HomePage;