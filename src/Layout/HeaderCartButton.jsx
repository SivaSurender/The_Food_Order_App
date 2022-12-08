import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../store/CartContext";
import { useContext } from "react";

const HeaderCartButton = (props) => {
  const referenceContext = useContext(CartContext);

  const NoOfCartButtonItem = referenceContext.items.reduce((acc, cur) => {
    return acc + cur.amount;
  }, 0);
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}> {NoOfCartButtonItem}</span>
    </button>
  );
};

export default HeaderCartButton;
