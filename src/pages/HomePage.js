import React from 'react';
import { BiCalendarEvent } from "react-icons/bi";
import Cover from '../AndThenThereWereNoneUS.jpg';

const HomePage = () => (
    <>
        <h1>
            Upcoming Meeting
        </h1>
        <h3>
            <BiCalendarEvent className="event" />
            September 12, 1pm est
        </h3>
        <img src={Cover} width="300" alt="And Then There Were None by Agatha Christie book cover" />
        <h3>
            <i>And Then There Were None </i>by Agatha Christie
        </h3>
    </>
);

export default HomePage;