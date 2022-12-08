import React, { useContext } from "react";
import CartContext from "../store/CartContext";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

const Cart = (props) => {
  const cartItems = useContext(CartContext);
  const totalAmount = `₹${Math.round(cartItems.totalAmount)}`;

  return (
    <Modal onClose={props.onClick}>
      <ul className={classes["cart-items"]}>
        {cartItems.items.map((eachItem) => (
          <li key={eachItem.id}>{eachItem.name}</li>
        ))}
      </ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClick}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
