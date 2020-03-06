import React from 'react';
import { axiosWithAuth } from '../../../services/authServices';

import { ControllerStateContext as State } from '../../../contexts';
import { ControllerDispatchContext as Dispatch } from '../../../contexts';
import ItemEntry from './ItemEntry';

const Contents = () => {
  const dispatch = React.useContext(Dispatch);
  const { contents } = React.useContext(State);

  const handleGrab = item => {
    const send = {
      command: 'g',
      item_id: item.uuid
    };
    axiosWithAuth()
      .post('/api/adv/interact', send)
      .then(res => {
        const newContents = res.data.contents;
        const newInventory = res.data.inventory;
        dispatch({
          type: 'PLAYER_GRAB_ITEM',
          payload: { newContents, newInventory }
        });
      });
  };

  return (
    <>
      <h4>Room Contents</h4>
      {contents.map(item => (
        <ItemEntry key={item.uuid} item={item} handleGrab={handleGrab} />
      ))}
      <p>Room Contents Component</p>
    </>
  );
};

export default Contents;
