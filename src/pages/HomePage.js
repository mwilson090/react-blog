import React from 'react';
import Meeting from '../announcements/Book_Club_Invite_June_2022.png';
import { Fade } from 'react-slideshow-image';

const HomePage = () => (
            <div className="each-fade">
                <div className="Meeting">
                    <img src={Meeting} alt="Meeting June 26, 1pm est" />
                </div>
            </div>
);

export default HomePage;