import logoImg from "../assets/logo.jpg";
import { useContext, useEffect, useRef, useState } from "react";
import { CartContext } from "../store/cart-context";

import Modal from "./Modal";
import Cart from "./Cart";
import Checkout from "./Checkout";

import { calculateLength } from "../util/functions";

export default function Header() {
  const dialog = useRef();

  const [contentState, setContentState] = useState(
    <Cart
      closeCart={() => dialog.current.close()}
      onClick={handleGoToCheckout}
    />
  );

  const [cartItemState] = useContext(CartContext);

  const lengthCart = calculateLength(cartItemState);

  function handleCloseModal() {
    setContentState(
      <Cart
        closeCart={() => dialog.current.close()}
        onClick={handleGoToCheckout}
      />
    );

    dialog.current.close();
  }

  function handleGoToCheckout() {
    setContentState(<Checkout onClick={handleCloseModal} />);
  }

  return (
    <>
      <Modal ref={dialog}>{contentState}</Modal>
      <header id="main-header">
        <div id="title">
          <img src={logoImg} alt="Logo food." />
          <h1>Reactfood</h1>
        </div>
        <button onClick={() => dialog.current.open()} className="button">
          Cart ({lengthCart})
        </button>
      </header>
    </>
  );
}
