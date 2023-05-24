import './Assets/Cart.scss'
import React, { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import { Link } from 'react-router-dom';


export const Cart = () => {
  const { cart, clearCart, totalQuantity, total, RemoveItem } = useContext(CartContext);

  if (totalQuantity() === 0) {
    return (
      <div className='NoneContainer'>
        <h1>No items in your cart yet</h1>
        <Link to="/" className="Option">Home</Link>
      </div>
    );
  }  

    return (
      <>
        {cart.map((product) => (
          <div key={product.id} className='ContainerProduct'>
            <h3 className='ContainerProduct_Title space'>{product.name}</h3>
            <p className='ContainerProductAll'>Price: ${product.price}</p>
            <p className='ContainerProductAll'>Quantity: {product.quantity}</p> 
            <button className='ContainerProductAll RemoveItem' onClick={() => RemoveItem(product.id)}> X</button>
          </div>
        ))}
        <p className='Total'>Total: ${total()}</p>
        <div className="ContainerButtons">
          <button onClick={clearCart} className="ButtonClear ButtonSpace">Clear cart</button>
          <Link to="/checkout" className="buttonCheck ButtonSpace">Checkout</Link>
        </div>
      </>
    );

  }
;