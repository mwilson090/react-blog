import React from 'react';
import GenrePieChart from '../components/GenrePieChart';
import PagesLine from '../components/PagesLine';
import ReadMap from '../components/ReadMap';

const DataPage = () => (
    <>
        <h1>
            Our Genres
        </h1>
        <div className="data">
            <GenrePieChart />
        </div>
        <h1>
            Author Countries
        </h1>
        <div className="data">
            <ReadMap />
        </div>
        <h1>
            Pages Read in 2021
        </h1>
        <div className="data">
            <PagesLine />
        </div>
    </>
);

export default DataPage;