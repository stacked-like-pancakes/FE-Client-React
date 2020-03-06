import React from 'react';
import { ControllerStateContext as State } from '../../../contexts';

import Line from './Line';
import ChatBox from './ChatBox';

const Chat = () => {
  const { chat } = React.useContext(State);
  return (
    <>
      {chat.map((line, i) => {
        return (
          <Line line={line} key={line + String(i)}>
            {line}
          </Line>
        );
      })}
      <ChatBox />
    </>
  );
};

export default Chat;
