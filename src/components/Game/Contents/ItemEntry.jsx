import React from 'react';

const ItemEntry = ({ item, handleGrab }) => {
  const handleClick = (e, itm) => {
    e.preventDefault();
    handleGrab(itm);
  };

  return (
    <>
      <p>{item.base}</p>
      <button onClick={e => handleClick(e, item)} type="button">
        Grab
      </button>
    </>
  );
};

export default ItemEntry;
