import { createContext, useState } from "react"

export const CartContext = createContext ({
    cart: []
})

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    if (!isInCart(item.id)) {
      setCart((prev) => [...prev, { ...item, quantity }]);
    } else {
      console.error("El producto ya está en tu carrito");
    }
  };

  const RemoveItem = (itemId) => {
    const cartUpdated = cart.filter((prod) => prod.id !== itemId);
    setCart(cartUpdated);
  };

  const clearCart = () => {
    setCart([]);
  };

  const isInCart = (itemId) => {
    return cart.some((prod) => prod.id === itemId);
  };

  const totalQuantity = () => {
    return cart.reduce((acc, prod) => (acc += prod.quantity), 0);
  };

  const total = () => {
    return cart.reduce((acc, prod) => (acc += prod.price * prod.quantity), 0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        RemoveItem,
        clearCart,
        total,
        totalQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};