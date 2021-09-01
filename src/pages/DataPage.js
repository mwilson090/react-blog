import React from 'react';
import GenrePieChart from '../components/GenrePieChart';
import PagesLine from '../components/PagesLine';

const DataPage = () => (
    <>
        <h1>
            Our Genres
        </h1>
        <div className="data">
            <GenrePieChart />
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