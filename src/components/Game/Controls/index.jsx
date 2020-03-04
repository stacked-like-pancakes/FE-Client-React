import React from 'react';
import { axiosWithAuth } from '../../../services/authServices';

const Controls = ({ gameState, setGameState }) => {
  const handleClick = async (e, body) => {
    e.preventDefault();
    const send = { direction: body };
    // Parse direction player is moving to send to move endpoint
    // Additionally, set player current position to match new location
    //
    // Any way to disable buttons based on description parse?

    const { data } = await axiosWithAuth().post('api/adv/move/', send);

    setGameState(data);

    return data;
  };

  const handleKey = React.useCallback(
    async e => {
      switch (e.keyCode) {
        // W to go North
        case 87: {
          const send = { direction: 'n' };
          const { data } = await axiosWithAuth().post('api/adv/move/', send);

          setGameState(data);
          return data;
        }
        // S to go South
        case 83: {
          const send = { direction: 's' };
          const { data } = await axiosWithAuth().post('api/adv/move/', send);

          setGameState(data);
          return data;
        }
        // A to go West
        case 65: {
          const send = { direction: 'w' };
          const { data } = await axiosWithAuth().post('api/adv/move/', send);

          setGameState(data);
          return data;
        }
        // D to go East
        case 68: {
          const send = { direction: 'e' };
          const { data } = await axiosWithAuth().post('api/adv/move/', send);

          setGameState(data);
          return data;
        }
        default:
          break;
      }
      return null;
    },
    [setGameState]
  );

  React.useEffect(() => {
    document.addEventListener('keyup', handleKey);
  }, [handleKey]);

  return (
    <>
      <button onClick={e => handleClick(e, 'n')} type="button">
        North
      </button>
      <button onClick={e => handleClick(e, 's')} type="button">
        South
      </button>
      <button onClick={e => handleClick(e, 'e')} type="button">
        East
      </button>
      <button onClick={e => handleClick(e, 'w')} type="button">
        West
      </button>
    </>
  );
};

export default Controls;
