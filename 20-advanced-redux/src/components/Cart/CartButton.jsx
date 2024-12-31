import { uiActions } from "../../store/ui-slice";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import classes from "./CartButton.module.css";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const totalQuantit = useSelector((state) => state.cart.totalQuantit);

  const toggleCartHandler = () => {
    dispatch(uiActions.toggle());
  };
  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantit}</span>
    </button>
  );
};

export default CartButton;
