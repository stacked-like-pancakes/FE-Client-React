import React from 'react';
import { VictoryGroup, VictoryLine, VictoryScatter } from 'victory';

const Map = ({ mapState, playerState }) => {
  const northLines = d => {
    if (d.north_id) {
      return [
        { x: d.x_cor, y: d.y_cor },
        { x: d.x_cor, y: d.y_cor + 1 }
      ];
    }
  };

  const westLines = d => {
    if (d.west_id) {
      return [
        { x: d.x_cor, y: d.y_cor },
        { x: d.x_cor - 1, y: d.y_cor }
      ];
    }
  };

  const eastLines = d => {
    if (d.east_id) {
      return [
        { x: d.x_cor, y: d.y_cor },
        { x: d.x_cor + 1, y: d.y_cor }
      ];
    }
  };

  const southLines = d => {
    if (d.south_id) {
      return [
        { x: d.x_cor, y: d.y_cor },
        { x: d.x_cor, y: d.y_cor - 1 }
      ];
    }
  };

  const north = mapState.map(dungeon => northLines(dungeon)).filter(x => x);
  const south = mapState.map(dungeon => southLines(dungeon)).filter(x => x);
  const west = mapState.map(dungeon => westLines(dungeon)).filter(x => x);
  const east = mapState.map(dungeon => eastLines(dungeon)).filter(x => x);

  const scatterData = mapState.map(point => {
    if (point.x_cor === playerState.x && point.y_cor === playerState.y) {
      return {
        x: point.x_cor,
        y: point.y_cor,
        symbol: 'star',
        opacity: 1,
        // label: `Playa`,
        fill: 'red',
        size: 4
      };
    }
    return { x: point.x_cor, y: point.y_cor, symbol: 'circle' };
  });

  return (
    <div
      style={{
        width: '960px',
        height: '960px'
      }}
    >
      <VictoryGroup color="#888888">
        {north.map(pair => {
          return <VictoryLine data={pair} />;
        })}
        {south.map(pair => {
          return <VictoryLine data={pair} />;
        })}
        {west.map(pair => {
          return <VictoryLine data={pair} />;
        })}
        {east.map(pair => {
          return <VictoryLine data={pair} />;
        })}
        {/* <VictoryLine data={lineRaw} /> */}
        <VictoryScatter
          data={scatterData}
          style={{ data: { fill: ({ datum }) => datum.fill } }}
        />
      </VictoryGroup>
    </div>
  );
};

export default Map;
