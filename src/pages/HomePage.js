import React from 'react';
import { BiCalendarEvent } from "react-icons/bi";
import Cover from '../covers/fever.jpg';
import CoverNext from '../covers/first.jpg';
import { Fade } from 'react-slideshow-image';

const HomePage = () => (
    <div classname="slide-container">
        <Fade>
            <div className="each-fade">
                <div className="image-container">
                    <img src={Cover} width="300px" alt="Fever Dream by Samanta Schweblin picture" />
                </div>
                <div className="meeting">
                    <h1>
                        <BiCalendarEvent className="event" color="#ffccbb" />
                        Upcoming Meeting
                    </h1>
                    <h3>
                        November 21, 1pm est
                    </h3>
                    <h3>
                        <i>Fever Dream </i>by Samanta Schweblin
                    </h3>
                </div>
            </div>
            <div className="each-fade">
                <div className="image-container">
                    <img src={CoverNext} width="300px" alt="First Person Singular by Haruki Murakami picture" />
                </div>
                <div className="meeting">
                    <h1>
                        <BiCalendarEvent className="event" color="#ffccbb" />
                        On Deck
                    </h1>
                    <h3>
                        December
                    </h3>
                    <h3>
                        <i>First Person Singular</i> by Haruki Murakami
                    </h3>
                </div>
            </div>
        </Fade>
    </div>
);

export default HomePage;