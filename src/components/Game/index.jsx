import React from 'react';
import { axiosWithAuth } from '../../services/authServices';

import Map from './Map';
import Controls from './Controls';

const Game = () => {
  const [gameState, setGameState] = React.useState({});
  const [mapState, setMapState] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      const { data } = await axiosWithAuth().get(`api/adv/rooms`);

      setMapState(data.dungeon);
    })();
  }, []);

  return (
    <>
      <Map mapState={mapState} setMapState={setMapState} />
      <Controls gameState={gameState} setGameState={setGameState} />
    </>
  );
};

export default Game;
