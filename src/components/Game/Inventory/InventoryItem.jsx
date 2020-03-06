import React from 'react';

const InventoryItem = ({ item, handleDrop }) => {
  const handleClick = (e, itm) => {
    e.preventDefault();
    handleDrop(itm);
  };

  return (
    <>
      <p>{item.base}</p>
      <button onClick={e => handleClick(e, item)} type="button">
        Drop
      </button>
    </>
  );
};

export default InventoryItem;
