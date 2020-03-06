import React from 'react';
import { ControllerDispatchContext as Dispatch } from '../../../contexts';

const ChatBox = () => {
  const dispatch = React.useContext(Dispatch);
  const [inputState, setInputState] = React.useState('');

  const handleChange = e => {
    setInputState(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: 'CHAT_INTERACTION', payload: inputState });
    setInputState('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange} value={inputState} />;
    </form>
  );
};

export default ChatBox;
