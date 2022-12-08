import React from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

const Cart = (props) => {
  const cartItems = [{ id: "b1", name: "Curry", price: 75 }];
  return (
    <Modal onClose={props.onClick}>
      <ul className={classes["cart-items"]}>
        {cartItems.map((eachItem) => (
          <li key={eachItem.id}>{eachItem.name}</li>
        ))}
      </ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>40</span>
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
