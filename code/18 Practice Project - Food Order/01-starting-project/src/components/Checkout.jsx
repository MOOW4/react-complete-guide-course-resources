import CartContext from "./store/CartContext.jsx";
import {useContext} from "react";
import Modal from "./UI/Modal.jsx";
import UserProgressContext from "./store/UserProgressContext.jsx";
import Input from "./UI/Input.jsx";
import Button from "./UI/Button.jsx";

export default function Checkout() {

  const userProgressCtx = useContext(UserProgressContext);
  const cartCtx = useContext(CartContext);

  const cartTotal = cartCtx.items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  function handleClose() {
    userProgressCtx.hideCheckout();
  }

  function handleSubmit(event){
    event.preventDefault();

    const fd = new FormData(event.target);
    const customerData = Object.fromEntries(fd.entries());

    fetch('http://localhost:3000/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        order: {
          items: cartCtx.items,
          customer: customerData
        },
      }),
    }).then((response) => {
      console.log(response);
      if (response.ok) {
        // userProgressCtx.showSuccess();
        cartCtx.clearCart();
      }
    });
  };


  return (
    <Modal open={userProgressCtx.progress === 'checkout'} onClose={handleClose}>
      <form onSubmit={handleSubmit}>
        <h2>Checkout</h2>
        <p>Total Amount: <b>{cartTotal}€</b></p>

        <Input label='Name' id='name' type='text' />
        <Input label='email' id='email' type='email' />
        <Input label='Street' id='street' type='text' />

        <div className='control-row'>
          <Input label='Postal Code' id='postal-code' type='text' />
          <Input label='City' id='city' type='text' />
        </div>

        <p className='modal-actions'>
          <Button textOnly={true} onClick={() => userProgressCtx.hideCheckout()}>Close</Button>
          <Button>Submit Order</Button>
        </p>
      </form>
    </Modal>
  );
}