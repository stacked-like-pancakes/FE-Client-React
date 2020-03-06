import React from 'react';
import { axiosWithAuth } from '../../../services/authServices';

import InventoryItem from './InventoryItem';

const Inventory = ({ inventory, setInventoryState, setContentsState }) => {
  // console.log('Inventory // inventory', inventory);

  const handleDrop = item => {
    const send = {
      command: 'd',
      item_id: item.uuid
    };
    axiosWithAuth()
      .post('/api/adv/interact', send)
      .then(res => {
        const newInventory = res.data.inventory;
        const newContents = res.data.contents;
        setInventoryState(newInventory);
        setContentsState(newContents);
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
