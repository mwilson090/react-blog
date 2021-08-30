import React from 'react';
import Hobbit from '../hobbit.jpg';

const AboutPage = () => (
    <div className="about">
        <img src={Hobbit} width="700" alt="Discord screenshot of The Hobbit book club meeting" />
        <h3>We are a monthly book club run by Jennifer Peña and Madeline Wilson. We read a variety of genres of fiction books, connecting our book club buds across the US. Check our Discord for meetings and discussion!</h3>
    </div>
);

export default AboutPage;