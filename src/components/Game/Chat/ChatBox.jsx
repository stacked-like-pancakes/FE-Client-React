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

  const sendPlayerChat = async dir => {
    const send = { direction: dir };
    const { data } = await axiosWithAuth().post('api/adv/move/', send);

    return data;
  };

  const handleChange = e => {
    setInputState(e.target.value);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const payload = {
      input: inputState,
      data: await sendPlayerChat('n')
    };
    dispatch({ type: 'CHAT_INTERACTION', payload });
    setInputState('');
  };

  return (
    <form stlye={{ display: 'flex' }} onSubmit={handleSubmit}>
      <Row type="text" onChange={handleChange} value={inputState} />
      <Button type="submit">Enter</Button>
    </form>
  );
};

export default ChatBox;
