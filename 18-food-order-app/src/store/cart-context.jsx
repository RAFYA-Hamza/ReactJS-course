import { useEffect, useReducer } from "react";
import { createContext } from "react";

export const CartContext = createContext();

function cartItemRedcuer(state, action) {
  const { id, name, price, quantity } = action.payload;
  let checkItem = false;
  let updatedItem = [];

  switch (action.type) {
    case "ADD_ITEM":
      updatedItem = state.map((item) => {
        if (item.id === id) {
          checkItem = true;
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        } else {
          return item;
        }
      });

      if (checkItem) {
        return updatedItem;
      } else {
        return [...state, { id, name, price, quantity }];
      }

    case "REMOVE_ITEM":
      updatedItem = state.map((item) => {
        if (item.id === id) {
          if (item.quantity > 1) {
            return {
              ...item,
              quantity: item.quantity - 1,
            };
          } else {
            return null;
          }
        } else {
          return item;
        }
      });

      return updatedItem.filter(Boolean);

    default:
  }
}

export default function CartContextProvider({ children }) {
  const [cartItemState, dispatch] = useReducer(cartItemRedcuer, []);

  return (
    <CartContext.Provider value={[cartItemState, dispatch]}>
      {children}
    </CartContext.Provider>
  );
}
