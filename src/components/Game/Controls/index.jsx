import React from 'react';
import { axiosWithAuth } from '../../../services/authServices';
import { ControllerDispatchContext as Dispatch } from '../../../contexts';

const Controls = ({ chatState, setChatState }) => {
  const dispatch = React.useContext(Dispatch);

  const handleChat = msg => {
    return chatState.indexOf(msg) === -1
      ? setChatState([...chatState, msg])
      : null;
  };

  const handlePlayer = React.useCallback(
    (d, err) => {
      if (!err) {
        switch (d.direction) {
          case 'n': {
            dispatch({ type: 'PLAYER_MOVE_NORTH' });
            break;
          }
          case 's': {
            dispatch({ type: 'PLAYER_MOVE_SOUTH' });
            break;
          }
          case 'e': {
            dispatch({ type: 'PLAYER_MOVE_EAST' });
            break;
          }
          case 'w': {
            dispatch({ type: 'PLAYER_MOVE_WEST' });
            break;
          }
          default:
            break;
        }
      }
    },
    [dispatch]
  );

  const handleClick = async (e, body) => {
    e.preventDefault();
    const send = { direction: body };
    const { data } = await axiosWithAuth().post('api/adv/move/', send);
    handlePlayer(send, data.err_msg);

    return data;
  };

  const handleKey = React.useCallback(
    async e => {
      switch (e.keyCode) {
        // W to go North
        case 87: {
          const send = { direction: 'n' };

          const { data } = await axiosWithAuth().post('api/adv/move/', send);
          handlePlayer(send, data.error_msg);
          handleChat(data.description);
          return data;
        }
        // S to go South
        case 83: {
          const send = { direction: 's' };
          const { data } = await axiosWithAuth().post('api/adv/move/', send);
          handlePlayer(send, data.error_msg);
          handleChat(data.description);
          return data;
        }
        // A to go West
        case 65: {
          const send = { direction: 'w' };
          const { data } = await axiosWithAuth().post('api/adv/move/', send);
          handlePlayer(send, data.error_msg);
          handleChat(data.description);

          return data;
        }
        // D to go East
        case 68: {
          const send = { direction: 'e' };
          const { data } = await axiosWithAuth().post('api/adv/move/', send);
          handlePlayer(send, data.error_msg);
          handleChat(data.description);

          return data;
        }
        case 73: {
          const send = { command: 'i' };
          const { data } = await axiosWithAuth().post('api/adv/interact', send);
          console.log('inspect data', data);
          return data;
        }
        default:
          break;
      }
      return null;
    },
    [handlePlayer]
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
