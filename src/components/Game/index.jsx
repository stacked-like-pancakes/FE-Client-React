import React from 'react';
import styled from 'styled-components';
import init from '../../services/gameServices';
import { ControllerDispatchContext as Dispatch } from '../../contexts';

import Map from './Map';
import Chat from './Chat';
import Controls from './Controls';
import Contents from './Contents';
import Inventory from './Inventory';

const Game = () => {
  const dispatch = React.useContext(Dispatch);

  // Initialize the world state of the game and fetch data to
  // populate the map with points at each room

  const main = React.useCallback(
    async function main() {
      const [
        {
          data: { dungeon }
        },
        {
          data: { x_cor: x, y_cor: y, title }
        }
      ] = await init();

      dispatch({ type: 'LOAD_PLAYER', payload: { x, y, title } });

      dispatch({ type: 'FETCH_MAP_DATA', payload: dungeon });
    },
    [dispatch]
  );

  React.useEffect(() => {
    main();
  }, [main]);

  return (
    <Container>
      <Chat />
      <Controls />
      <div
        id="controls"
        tabIndex={0}
        style={{
          outline: 'none',
          backgroundSize: 'contain',
          backgroundImage: `url('https://www.runescape.com/img/rsp777/bg2.jpg')`,
          backgroundRepeat: 'y-repeat'
        }}
      >
        <Map />
      </div>
    </Container>
  );
};

const Container = styled.div`
  margin: 10vh auto 0;
  width: 60%;
  height: 80vh;
`;

export default Game;
