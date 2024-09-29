import {useContext} from "react";
import CartContext from "./store/CartContext.jsx";
import Modal from "./UI/Modal.jsx";
import Button from "./UI/Button.jsx";
import CartItem from "./CartItem.jsx";
import UserProgressContext from "./store/UserProgressContext.jsx";

export default function Cart() {

  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);


  const cartTotal = cartCtx.items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  function handleCloseCart() {
    userProgressCtx.hideCart();
    console.log(userProgressCtx.progress);
  }

  console.log(cartCtx.items);

  return (
    <Modal classname='cart' open={userProgressCtx.progress === 'cart'}>
      <h2>Your Cart</h2>
      <ul>
        {cartCtx.items.map((item) => (
          <CartItem key={item.id} name={item.name} price={item.price} quantity={item.quantity}
                    onDecrease={() => cartCtx.removeItem(item.id)} onIncrease={() => cartCtx.addItem(item)}>
          </CartItem>
        ))}
      </ul>
      <p className='cart-total'>{cartTotal}€</p>
      <div className='modal-actions'>
        <Button textOnly={true} onClick={handleCloseCart}>Close</Button>
        <Button onClick={handleCloseCart}>Go to Checkout</Button>
      </div>
    </Modal>
  );

};