import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { axiosWithAuth } from '../../services/authServices';

import Map from './Map';
import Chat from './Chat';
import Controls from './Controls';
import Contents from './Contents';
import Inventory from './Inventory';

import { ControllerDispatchContext as Dispatch } from '../../contexts';

const Container = styled.div`
  margin: 10vh auto 0;
  width: 60%;
  height: 80vh;
`;

const Game = () => {
  const dispatch = React.useContext(Dispatch);
  const [playerState, setPlayerState] = React.useState({ x: null, y: null });
  const [chatState, setChatState] = React.useState([]);
  const [contentsState, setContentsState] = React.useState([]);
  const [inventoryState, setInventoryState] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      const rooms = axiosWithAuth().get('api/adv/rooms/');
      const initialize = axiosWithAuth().get('api/adv/init/');
      const [roomState, initializeState] = await axios.all([rooms, initialize]);

      const { x_cor: x, y_cor: y } = initializeState.data;
      dispatch({ type: 'LOAD_PLAYER', payload: { x, y } });

      // setPlayerState({ x, y });

      const { dungeon } = roomState.data;
      dispatch({ type: 'FETCH_MAP_DATA', payload: dungeon });
    })();
  }, [dispatch]);

  return (
    <Container>
      <Chat chatState={chatState} setChatState={setChatState} />
      <Map playerState={playerState} setPlayerState={setPlayerState} />
      <Contents
        contents={contentsState}
        setContentsState={setContentsState}
        setInventoryState={setInventoryState}
      />
      <Inventory
        inventory={inventoryState}
        setContentsState={setContentsState}
        setInventoryState={setInventoryState}
      />
      <Controls
        playerState={playerState}
        setPlayerState={setPlayerState}
        setChatState={setChatState}
        chatState={chatState}
        contentsState={contentsState}
        setContentsState={setContentsState}
        inventoryState={inventoryState}
        setInventoryState={setInventoryState}
      />
    </Container>
  );
};

export default Game;
