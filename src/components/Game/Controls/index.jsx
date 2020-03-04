import React from 'react';
import { axiosWithAuth } from '../../../services/authServices';

const Controls = () => {
  const handleClick = async (e, body) => {
    e.preventDefault();
    const send = { direction: body };
    // Parse direction player is moving to send to move endpoint
    // Additionally, set player current position to match new location
    //
    // Any way to disable buttons based on description parse?

    const { data } = await axiosWithAuth().post('api/adv/move/', send);

    return data;
  };

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
