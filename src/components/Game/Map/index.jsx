import React from 'react';
import { VictoryGroup, VictoryLine, VictoryScatter } from 'victory';
import { ControllerStateContext as State } from '../../../contexts';

const Map = () => {
  const {
    map: mapState,
    player: playerState,
    lines: { north, south, east, west }
  } = React.useContext(State);

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
      <VictoryGroup tabIndex={0} color="#888888">
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
