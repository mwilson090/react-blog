import React from 'react';
import { BiCalendarEvent } from "react-icons/bi";
import CoverNext from '../covers/fever.jpg';
import Cover from '../covers/interior.jpg';
import { Fade } from 'react-slideshow-image';

const HomePage = () => (
    <div classname="slide-container">
        <Fade>
            <div className="each-fade">
                <div className="image-container">
                    <img src={Cover} width="300px" alt="Interior Chinatown by Charles Yu picture" />
                </div>
                <div className="meeting">
                    <h1>
                        <BiCalendarEvent className="event" color="#ffccbb" />
                        Upcoming Meeting
                    </h1>
                    <h3>
                        October 10, 1pm est
                    </h3>
                    <h3>
                        <i>Interior Chinatown </i>by Charles Yu
                    </h3>
                </div>
            </div>
            <div className="each-fade">
                <div className="image-container">
                    <img src={CoverNext} width="300px" alt="Fever Dream by Samanta Schweblin picture" />
                </div>
                <div className="meeting">
                    <h1>
                        <BiCalendarEvent className="event" color="#ffccbb" />
                        On Deck
                    </h1>
                    <h3>
                        November 14, 1pm est
                    </h3>
                    <h3>
                        <i>Fever Dream </i>by Samanta Schweblin
                    </h3>
                </div>
            </div>
        </Fade>
    </div>
);

export default HomePage;