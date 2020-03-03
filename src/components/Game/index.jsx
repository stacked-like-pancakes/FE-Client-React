import React from 'react';
import {
  VictoryChart,
  VictoryGroup,
  VictoryLine,
  VictoryScatter
} from 'victory';
import { axiosWithAuth } from '../../services/authServices';

const Game = () => {
  const [res, setRes] = React.useState({});

  React.useEffect(() => {
    (async () => {
      const { data } = await axiosWithAuth().get('api/adv/init/');
      setRes(data);
    })();
  }, []);

  console.log(res);

  const lineRaw = [{ x: 1, y: 1 }];

  const random = () => Math.floor(Math.random() * 10);

  const scatterRandom = [
    { x: random(), y: random() },
    { x: random(), y: random() },
    { x: random(), y: random() },
    { x: random(), y: random() },
    { x: random(), y: random() },
    { x: random(), y: random() },
    { x: random(), y: random() },
    { x: random(), y: random() },
    { x: random(), y: random() },
    { x: random(), y: random() },
    { x: random(), y: random() },
    { x: random(), y: random() },
    { x: random(), y: random() },
    { x: random(), y: random() },
    { x: random(), y: random() },
    { x: random(), y: random() },
    { x: random(), y: random() },
    { x: random(), y: random() },
    { x: random(), y: random() }
  ];

  console.log(scatterRandom.length);

  const scatterRaw = [
    { x: 1, y: 1 },
    { x: 2, y: 2 },
    { x: 2, y: 3 }
  ];

  const player = { x: 2, y: 2 };

  const scatterData = scatterRandom.map(point => {
    if (point.x === player.x && point.y === player.y) {
      return {
        x: point.x,
        y: point.y,
        symbol: 'star',
        opacity: 1,
        label: `Playa`,
        fill: 'blue'
      };
    }
    return { x: point.x, y: point.y, symbol: 'circle' };
  });

  return (
    <>
      <VictoryGroup>
        <VictoryLine data={lineRaw} />
        <VictoryScatter
          data={scatterData}
          style={{ data: { fill: ({ datum }) => datum.fill } }}
        />
      </VictoryGroup>
    </>
  );
};

export default Game;
