import React from 'react';
import { VictoryPie, VictoryTheme } from 'victory';

const GenrePieChart = () => {
    return (
      <VictoryPie
        data={[
          { x: 1, y: 2, label: "Fantasy" },
          { x: 2, y: 4, label: "Literary Fiction"},
          { x: 3, y: 2, label: "Mystery"},
          { x: 4, y: 1, label: "Dystopian"},
          { x: 5, y: 1, label: "Historical Fiction" },
          { x: 6, y: 2, label: "Science Fiction"},
          { x: 7, y: 1, label: "Magical Realism"},
          { x: 8, y: 1, label: "Short Stories"},
          { x: 9, y: 1, label: "Romance"},
          
        ]}
        theme={VictoryTheme.grayscale}
        innerRadius={75}
        labelRadius={100}
        style={{ labels: { fill: "black", fontSize: 10, fontWeight: "bold" } }}
    />
    );
};

export default GenrePieChart;

