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
            { x: "Mar", y: 418 },
            { x: "Apr", y: 630 },
            { x: "May", y: 941 },
            { x: "Jun", y: 1261 },
            { x: "Jul", y: 1261 },
            { x: "Aug", y: 1565 },
            { x: "Sep", y: 1837 },
            { x: "Oct", y: 2125 },
            { x: "Nov", y: 2308 },
            { x: "Dec", y: 2548 },
          ]}
          interpolation="bundle"
        />
      </VictoryChart>
    );
};

export default PagesLine;