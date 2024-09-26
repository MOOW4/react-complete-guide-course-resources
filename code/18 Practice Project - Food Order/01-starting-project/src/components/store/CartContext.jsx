import {createContext, useReducer} from "react";

const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
  clearCart: () => {}
  });

function cartReducer(state, action) {
  if (action.type === 'ADD_ITEM') {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const updatedItems = [...state.items];
    if (existingCartItemIndex > -1) {
      const existingItem = state.items[existingCartItemIndex];
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity + 1
      };
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems.push({...action.item, quantity: 1});
    }
    return {...state, items: updatedItems};
  }
  if (action.type === 'REMOVE_ITEM') {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingCartItem = state.items[existingCartItemIndex]; // get the item
    const updatedItems = [...state.items]; // copy the array
    if (existingCartItem.quantity === 1) { // remove item
      updatedItems.splice(existingCartItemIndex, 1); // remove the item
    } else { // decrease quantity
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity - 1
      };
      updatedItems[existingCartItemIndex] = updatedItem; // update the items
    }
    return {...state, items: updatedItems};
  }
  if (action.type === 'CLEAR') {
    return {items: []};
  }
  return state;
}



export function CartContextProvider({children}) {

  const [cart, dispatchCartAction] = useReducer(cartReducer, { items: [] });

  function addItem(item) {
    dispatchCartAction({ type: 'ADD_ITEM', item });
  }
  function removeItem(id) {
    dispatchCartAction({ type: 'REMOVE_ITEM', id });
  }
  function clearCart() {
    dispatchCartAction({ type: 'CLEAR' });
  }
  const cartContext = {
    items: [],
    addItem,
    removeItem,
    clearCart
  };


  return (
    <CartContext.Provider value={cartContext}>
      {children}
    </CartContext.Provider>
  );
}


export default CartContext;