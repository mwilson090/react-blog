import React from 'react';
import { BiCalendarEvent } from "react-icons/bi";
import Cover from '../AndThenThereWereNoneUS.jpg';
import CoverNext from '../covers/interior.jpg';
import { Fade } from 'react-slideshow-image';

const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    prevArrow: <div style={{width: "30px", marginRight: "-30px"}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff"><path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z"/></svg></div>,
    nextArrow: <div style={{width: "30px", marginLeft: "-30px"}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff"><path d="M512 256L270 42.6v138.2H0v150.6h270v138z"/></svg></div>
  };

const HomePage = () => (
    <div classname="slide-container">
        <Fade>
            <div className="each-fade">
                <div className="image-container">
                    <img src={Cover} width="300px" alt="And Then There Were None by Agatha Christie book cover" />
                </div>
                <div className="meeting">
                    <h1>
                        <BiCalendarEvent className="event" color="#ffccbb" />
                        Upcoming Meeting
                    </h1>
                    <h3>
                        September 12, 1pm est
                    </h3>
                    <h3>
                        <i>And Then There Were None </i>by Agatha Christie
                    </h3>
                </div>
            </div>
            <div className="each-fade">
                <div className="image-container">
                    <img src={CoverNext} width="300px" alt="Interior Chinatown by Charles Yu picture" />
                </div>
                <div className="meeting">
                    <h1>
                        <BiCalendarEvent className="event" color="#ffccbb" />
                        On Deck
                    </h1>
                    <h3>
                        October 10, 1pm est
                    </h3>
                    <h3>
                        <i>Interior Chinatown </i>by Charles Yu
                    </h3>
                </div>
            </div>
        </Fade>
    </div>
);

export default HomePage;