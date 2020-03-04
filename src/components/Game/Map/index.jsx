import React from 'react';
import { VictoryGroup, VictoryLine, VictoryScatter } from 'victory';

const Map = ({ mapState }) => {
  const [player, setPlayer] = React.useState({ x: 0, y: 0 });
  const lineRaw = [
    { x: 1, y: 2 },
    { x: 2, y: 1 }
  ];

  // Send post and setPlayer to response.coordinates
  const handlePlayer = points => {
    const { x, y } = points;
    setPlayer({ x, y });
  };

  const scatterData = mapState.map(point => {
    if (point.x_cor === player.x && point.y_cor === player.y) {
      return {
        x: point.x_cor,
        y: point.y_cor,
        symbol: 'star',
        opacity: 1,
        label: `Playa`,
        fill: 'blue'
      };
    }
    return { x: point.x_cor, y: point.y_cor, symbol: 'circle' };
  });

  return (
    <div style={{ width: '500px', height: '500px' }}>
      <VictoryGroup>
        <VictoryLine data={lineRaw} />
        <VictoryScatter
          data={scatterData}
          style={{ data: { fill: ({ datum }) => datum.fill } }}
        />
      </VictoryGroup>

      <button onClick={() => handlePlayer({ x: 0, y: 1 })}>click me</button>
      <button onClick={() => handlePlayer({ x: 0, y: 1 })}>click me</button>
      <button onClick={() => handlePlayer({ x: 0, y: 1 })}>click me</button>
      <button onClick={() => handlePlayer({ x: 0, y: 1 })}>click me</button>
      <button onClick={() => handlePlayer({ x: 0, y: 1 })}>click me</button>
    </div>
  );
};

export default Map;
