import React from 'react';
import { axiosWithAuth } from '../../../services/authServices';

import ItemEntry from './ItemEntry';

const Contents = ({ contents, setContentsState, setInventoryState }) => {
  const handleGrab = item => {
    const send = {
      command: 'g',
      item_id: item.uuid
    };
    // const { newContents, newInventory } =
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
      <h4>Room Contents</h4>
      {contents.map(item => (
        <ItemEntry key={item.uuid} item={item} handleGrab={handleGrab} />
      ))}
      <p>Room Contents Component</p>
    </>
  );
};

export default Contents;
