import { useContext } from "react";
import { CartContext } from "../store/cart-context";
import { calculateTotalPrice } from "../util/functions";

export default function Cart({ closeCart, ...props }) {
  const [cartItemState, dispatch] = useContext(CartContext);

  const totalPrice = calculateTotalPrice(cartItemState);

  return (
    <>
      <div className="cart">
        <h2>Your Cart</h2>
        <ul>
          {cartItemState.map((item) => (
            <li key={item.id} className="cart-item">
              <p>
                {item.name} - {item.quantity} x ${item.price}
              </p>
              <div className="cart-item-actions">
                <button
                  onClick={() =>
                    dispatch({
                      type: "REMOVE_ITEM",
                      payload: {
                        id: item.id,
                        name: item.name,
                        price: item.price,
                        quantity: 1,
                      },
                    })
                  }
                >
                  -
                </button>
                <p>{item.quantity}</p>
                <button
                  onClick={() =>
                    dispatch({
                      type: "ADD_ITEM",
                      payload: {
                        id: item.id,
                        name: item.name,
                        price: item.price,
                        quantity: 1,
                      },
                    })
                  }
                >
                  +
                </button>
              </div>
            </li>
          ))}
        </ul>
        <p className="cart-total">${totalPrice}</p>
      </div>
      <div className="modal-actions">
        <button onClick={closeCart} className="text-button">
          Close
        </button>
        <button {...props} className="button">
          Go to chekout
        </button>
      </div>
    </>
  );
}
