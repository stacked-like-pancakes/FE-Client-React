import React from 'react';
import { VictoryGroup, VictoryLine, VictoryScatter } from 'victory';
import { ControllerStateContext as State } from '../../../contexts';

import { northLines, southLines, westLines, eastLines } from './utils';

const Map = () => {
  const { map: mapState, player: playerState } = React.useContext(State);

  const north = mapState.map(dungeon => northLines(dungeon)).filter(x => x);
  const south = mapState.map(dungeon => southLines(dungeon)).filter(x => x);
  const west = mapState.map(dungeon => westLines(dungeon)).filter(x => x);
  const east = mapState.map(dungeon => eastLines(dungeon)).filter(x => x);

  const playerConfig = {
    symbol: 'star',
    opacity: 1,
    fill: 'red',
    size: 4
  };

  const scatterData = mapState.map(({ x_cor: x, y_cor: y }) => {
    if (x === playerState.x && y === playerState.y) {
      return {
        x,
        y,
        ...playerConfig
      };
    }
    return { x, y, symbol: 'circle' };
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
          return <VictoryLine key={String(pair[1])} data={pair} />;
        })}
        {south.map(pair => {
          return <VictoryLine key={String(pair[1])} data={pair} />;
        })}
        {west.map(pair => {
          return <VictoryLine key={String(pair[1])} data={pair} />;
        })}
        {east.map(pair => {
          return <VictoryLine key={String(pair[1])} data={pair} />;
        })}
        <VictoryScatter
          data={scatterData}
          style={{ data: { fill: ({ datum }) => datum.fill } }}
        />
      </VictoryGroup>
    </div>
  );
};

export default Map;
