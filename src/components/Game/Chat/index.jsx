import React from 'react';

const Chat = ({ chatState, setChatState }) => {
  return (
    <>
      <pre>{JSON.stringify(chatState, null, 4)}</pre>
    </>
  );
};

export default Chat;
