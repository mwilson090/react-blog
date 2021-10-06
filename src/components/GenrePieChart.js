import React from 'react';
import { VictoryPie, VictoryTheme } from 'victory';

const GenrePieChart = () => {
    return (
      <VictoryPie
        data={[
          { x: 1, y: 1, label: "Slice of Life" },
          { x: 2, y: 2, label: "Fantasy" },
          { x: 3, y: 1, label: "Literary Fiction"},
          { x: 4, y: 1, label: "Historical Fiction" },
          { x: 5, y: 1, label: "Dystopian"},
          { x: 6, y: 1, label: "Mystery"},
          { x: 7, y: 1, label: "Science Fiction"},
          
        ]}
        theme={VictoryTheme.grayscale}
        innerRadius={75}
        labelRadius={100}
        style={{ labels: { fill: "black", fontSize: 10, fontWeight: "bold" } }}
    />
    );
};

export default GenrePieChart;

