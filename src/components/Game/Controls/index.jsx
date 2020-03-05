import React from 'react';
import { axiosWithAuth } from '../../../services/authServices';

const Controls = ({ setPlayerState, playerState }) => {
  const handleClick = async (e, body) => {
    e.preventDefault();
    const send = { direction: body };
    const { data } = await axiosWithAuth().post('api/adv/move/', send);

    setPlayerState(data);

    return data;
  };

  const handleKey = React.useCallback(
    async e => {
      switch (e.keyCode) {
        // W to go North
        case 87: {
          const send = { direction: 'n' };

          const { data } = await axiosWithAuth().post('api/adv/move/', send);
          const { x_cor, y_cor } = data;
          console.log({ x_cor, y_cor });

          setPlayerState({ x: x_cor, y: y_cor });
          return data;
        }
        // S to go South
        case 83: {
          const send = { direction: 's' };
          const { data } = await axiosWithAuth().post('api/adv/move/', send);
          const { x_cor, y_cor } = data;

          setPlayerState({ x: x_cor, y: y_cor });
          console.log(playerState);
          return data;
        }
        // A to go West
        case 65: {
          const send = { direction: 'w' };
          const { data } = await axiosWithAuth().post('api/adv/move/', send);

          setPlayerState(data);
          return data;
        }
        // D to go East
        case 68: {
          const send = { direction: 'e' };
          const { data } = await axiosWithAuth().post('api/adv/move/', send);

          setPlayerState(data);
          return data;
        }
        default:
          break;
      }
      return null;
    },
    [setPlayerState, playerState]
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
