import React from 'react';

const CartItemStyles = {
  padding: '1rem 0',
  borderBottom: '1px solid black',
  display: 'grid',
  alignItems: 'center',
  gridTemplateColumns: 'auto 1fr auto',
}

const CartItem = ({ cartItem }) => {
  // first check if that item exists
  if (!cartItem.item)
    return (
      <p>This Item has been removed</p>
    );
  return (
    <div stile={CartItemStyles}>
      <img width="100" src={cartItem.item.image} alt={cartItem.item.title} />
      <div >
        <h3>{cartItem.item.title}</h3>
        <p>
          {' - '}
          <em>
          </em>
        </p>
      </div>
    </div>
  );
};

export default CartItem;
