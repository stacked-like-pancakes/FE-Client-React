import React from 'react';
import styled from 'styled-components';
import { axiosWithAuth } from '../../../services/authServices';
import { ControllerDispatchContext as Dispatch } from '../../../contexts';

const Row = styled.input`
  background: #333333;
  color: white;
  padding: 5px;
  width: 90%;
  margin-top: 5px;
  border: 1px solid #333333;
`;

const Button = styled.button`
  border: 1px solid #333333;
  color: #333333;
  background: white;
  width: 10%;
  padding: 5px;

  &:hover {
    text-transform: uppercase;
    cursor: pointer;
  }
`;

const ChatBox = () => {
  const dispatch = React.useContext(Dispatch);
  const [inputState, setInputState] = React.useState('');

  const handleChange = e => {
    setInputState(e.target.value);
  };

  const handleSubmit = React.useCallback(
    async (e, dir) => {
      e.preventDefault();
      switch (dir.toLowerCase()) {
        case 'move north': {
          const send = { direction: 'n' };
          const { data } = await axiosWithAuth().post('api/adv/move/', send);
          if (!data.error_msg) {
            dispatch({ type: 'CHAT_MOVE_NORTH', payload: data });
            setInputState('');
          } else {
            dispatch({ type: 'CHAT_HANDLE_ERROR', payload: data.error_msg });
            setInputState('');
          }
          break;
        }
        case 'move south': {
          const send = { direction: 's' };
          const { data } = await axiosWithAuth().post('api/adv/move/', send);
          if (!data.error_msg) {
            dispatch({ type: 'CHAT_MOVE_SOUTH', payload: data });
            setInputState('');
          } else {
            dispatch({ type: 'CHAT_HANDLE_ERROR', payload: data.error_msg });
            setInputState('');
          }
          break;
        }
        case 'move east': {
          const send = { direction: 'e' };
          const { data } = await axiosWithAuth().post('api/adv/move/', send);
          if (!data.error_msg) {
            dispatch({ type: 'CHAT_MOVE_EAST', payload: data });
            setInputState('');
          } else {
            dispatch({ type: 'CHAT_HANDLE_ERROR', payload: data.error_msg });
            setInputState('');
          }
          break;
        }

        case 'move west': {
          const send = { direction: 'w' };
          const { data } = await axiosWithAuth().post('api/adv/move/', send);
          if (!data.error_msg) {
            dispatch({ type: 'CHAT_MOVE_WEST', payload: data });
            setInputState('');
          } else {
            dispatch({ type: 'CHAT_HANDLE_ERROR', payload: data.error_msg });
            setInputState('');
          }
          break;
        }

        default:
          dispatch({ type: 'CHAT_INTERACTION', payload: inputState });
          setInputState('');
      }
      return null;
    },
    [dispatch, inputState]
  );

  return (
    <form
      stlye={{ display: 'flex' }}
      onSubmit={e => handleSubmit(e, inputState)}
    >
      <Row type="text" onChange={handleChange} value={inputState} />
      <Button type="submit">Enter</Button>
    </form>
  );
};

export default ChatBox;
