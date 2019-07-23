import React from 'react'
import CartItem from './CartItem'

const Cart = ({ cart = [] }) => (
  <div>
    {console.log(cart)}
    {cart.map(cartItem => <CartItem cartItem={cartItem} />)}
  </div>
)

export default Cart