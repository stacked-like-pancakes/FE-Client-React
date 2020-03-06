import React from 'react';
import styled from 'styled-components';
import { axiosWithAuth } from '../../../services/authServices';
import { ControllerDispatchContext as Dispatch } from '../../../contexts';

const Button = styled.button`
  color: #333;
  background: white;
  border: 1px solid #333;
  width: 25%;
  margin-top: 5px;
  padding: 5px;

  &:hover {
    text-transform: uppercase;
    cursor: pointer;
  }
`;

const Controls = () => {
  const dispatch = React.useContext(Dispatch);

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

  const handleInteraction = React.useCallback((i, res) => {
    const { inventory, contents } = res;
    if (!res.error_msg) {
      switch (i.command) {
        case 'i': {
          dispatch({
            type: 'PLAYER_INSPECT_ROOM',
            payload: { contents, inventory }
          });
          break;
        }
        case 'g': {
          dispatch({
            type: 'PLAYER_GRAB_ITEM',
            payload: { contents, inventory }
          });
          break;
        }
        case 'd': {
          dispatch({
            type: 'PLAYER_DROP_ITEM',
            payload: { contents, inventory }
          });
          break;
        }
        default:
          break;
      }
    }
  });

  const handleClick = async (e, body) => {
    e.preventDefault();
    const send = { direction: body };
    const { data } = await axiosWithAuth().post('api/adv/move/', send);
    handlePlayer(send, data);

    return data;
  };

  const handleInspectClick = async (e, body) => {
    e.preventDefault();
    const send = { command: body };
    const { data } = await axiosWithAuth().post('api/adv/interact', send);
    handleInteraction(send, data);
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
        // I to inspect
        case 73: {
          const send = { command: 'i' };
          const { data } = await axiosWithAuth().post('api/adv/interact', send);
          handleInteraction(send, data);
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
    const controls = document.getElementById('controls');
    if (controls) {
      controls.addEventListener('keyup', handleKey);
    }
  }, [handleKey]);

  return (
    <>
      <Button onClick={e => handleClick(e, 'n')} type="Button">
        North
      </Button>
      <Button onClick={e => handleClick(e, 's')} type="Button">
        South
      </Button>
      <Button onClick={e => handleClick(e, 'e')} type="Button">
        East
      </Button>
      <Button onClick={e => handleClick(e, 'w')} type="Button">
        West
      </Button>
      <Button onClick={e => handleInspectClick(e, 'i')} type="Button">
        Inspect Room
      </Button>
    </>
  );
};

export default Controls;
