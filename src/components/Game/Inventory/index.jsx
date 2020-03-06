import React from 'react';
import { axiosWithAuth } from '../../../services/authServices';

import { ControllerStateContext as State } from '../../../contexts';
import { ControllerDispatchContext as Dispatch } from '../../../contexts';
import InventoryItem from './InventoryItem';

const Inventory = () => {
  const dispatch = React.useContext(Dispatch);
  const { inventory } = React.useContext(State);

  const handleDrop = item => {
    const send = {
      command: 'd',
      item_id: item.uuid
    };
    axiosWithAuth()
      .post('/api/adv/interact', send)
      .then(res => {
        const newContents = res.data.contents;
        const newInventory = res.data.inventory;
        dispatch({
          type: 'PLAYER_DROP_ITEM',
          payload: { newContents, newInventory }
        });
      });
  };

  return (
    <>
      <p>Inventory Component</p>
      {inventory.map(item => (
        <InventoryItem key={item.uuid} item={item} handleDrop={handleDrop} />
      ))}
    </>
  );
};

export default Inventory;
