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

  const handleKey = async e => {
    switch (e.keyCode) {
      case 87: {
        const send = { direction: 'n' };
        const { data } = await axiosWithAuth().post('api/adv/move/', send);
        console.log(data);

        return data;
      }
      case 83: {
        const send = { direction: 's' };
        const { data } = await axiosWithAuth().post('api/adv/move/', send);
        console.log(data);

        return data;
      }
      default:
        break;
    }
  };

  React.useEffect(() => {
    document.addEventListener('keyup', handleKey);
  });

  return (
    <div
      role="button"
      tabIndex={0}
      style={{ background: 'red' }}
      onKeyUp={handleKey}
    >
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
    </div>
  );
};

export default Controls;
