import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { axiosWithAuth } from '../../services/authServices';

import Map from './Map';
import Controls from './Controls';

const Container = styled.div`
  margin: 10vh auto 0;
  width: 60%;
  height: 80vh;
`;

const Game = () => {
  const [mapState, setMapState] = React.useState([]);
  const [playerState, setPlayerState] = React.useState({ x: null, y: null });

  React.useEffect(() => {
    (async () => {
      const result = await axiosWithAuth().get('api/adv/rooms/');
      setMapState(result.data.dungeon);
    })();
  }, []);

  React.useEffect(() => {
    (async () => {
      // const { data } = await axiosWithAuth().get(`api/adv/rooms`);

      const result = await axiosWithAuth().get('api/adv/init/');
      const { x_cor, y_cor } = result.data;
      console.log('here', { x_cor, y_cor });
      setPlayerState({ x: x_cor, y: y_cor });
    })();
  }, []);

  return (
    <Container>
      <Map
        playerState={playerState}
        setPlayerState={setPlayerState}
        mapState={mapState}
        setMapState={setMapState}
      />
      <Controls playerState={playerState} setPlayerState={setPlayerState} />
    </Container>
  );
};

export default Game;
