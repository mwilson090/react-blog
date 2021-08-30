import React from 'react';
import { BiCalendarEvent } from "react-icons/bi";
import Cover from '../AndThenThereWereNoneUS.jpg';

const HomePage = () => (
    <div classname="home">
        <div className="picture">
            <img src={Cover} width="300" height="457" alt="And Then There Were None by Agatha Christie book cover" />
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
);

export default HomePage;