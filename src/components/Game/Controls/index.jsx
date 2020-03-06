import React from 'react';
import { axiosWithAuth } from '../../../services/authServices';
import {
  ControllerDispatchContext as Dispatch,
  ControllerStateContext as State
} from '../../../contexts';

const Controls = () => {
  const dispatch = React.useContext(Dispatch);
  const state = React.useContext(State);
  console.log(state.chat);

  const handlePlayer = React.useCallback(
    (d, res) => {
      const { title, description } = res;
      if (!res.error_msg) {
        switch (d.direction) {
          case 'n': {
            dispatch({
              type: 'PLAYER_MOVE_NORTH',
              payload: { title, description }
            });
            break;
          }
          case 's': {
            dispatch({
              type: 'PLAYER_MOVE_SOUTH',
              payload: { title, description }
            });
            break;
          }
          case 'e': {
            dispatch({
              type: 'PLAYER_MOVE_EAST',
              payload: { title, description }
            });
            break;
          }
          case 'w': {
            dispatch({
              type: 'PLAYER_MOVE_WEST',
              payload: { title, description }
            });
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
        case 87: {
          const send = { direction: 'n' };
          const { data } = await axiosWithAuth().post('api/adv/move/', send);
          handlePlayer(send, data);
          break;
        }
        case 83: {
          const send = { direction: 's' };
          const { data } = await axiosWithAuth().post('api/adv/move/', send);
          handlePlayer(send, data);
          break;
        }
        case 65: {
          const send = { direction: 'w' };
          const { data } = await axiosWithAuth().post('api/adv/move/', send);
          handlePlayer(send, data);
          break;
        }
        case 68: {
          const send = { direction: 'e' };
          const { data } = await axiosWithAuth().post('api/adv/move/', send);
          handlePlayer(send, data);
          break;
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
