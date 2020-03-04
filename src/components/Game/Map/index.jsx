import React from 'react';
import { VictoryGroup, VictoryLine, VictoryScatter } from 'victory';
import { axiosWithAuth } from '../../../services/authServices';

const Map = () => {
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

  const scatterRaw = [
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

  const player = { x: 2, y: 2 };

  const scatterData = scatterRaw.map(point => {
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
    <div style={{ width: '200px', height: '200px' }}>
      <VictoryGroup>
        <VictoryLine data={lineRaw} />
        <VictoryScatter
          data={scatterData}
          style={{ data: { fill: ({ datum }) => datum.fill } }}
        />
      </VictoryGroup>
    </div>
  );
};

export default Map;
