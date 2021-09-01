import React from 'react';
import { VictoryChart, VictoryLine, VictoryTheme } from 'victory';

const PagesLine = () => {
    return (
        <VictoryChart
        theme={VictoryTheme.material}
      >
        <VictoryLine
          style={{
            data: { stroke: "#445554" },
            parent: { border: "1px solid #ccc"}
          }}
          data={[
            { x: "Jan", y: 0},
            { x: "Feb", y: 160},
            { x: "March", y: 418 },
            { x: "April", y: 630 },
            { x: "May", y: 941 },
            { x: "June", y: 1261 },
            { x: "July", y: 1261 },
            { x: "August", y: 1565 }
          ]}
          interpolation="bundle"
        />
      </VictoryChart>
    );
};

export default PagesLine;