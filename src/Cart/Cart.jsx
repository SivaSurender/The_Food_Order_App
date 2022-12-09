import React, { useContext } from "react";
import CartContext from "../store/CartContext";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartItems = useContext(CartContext);
  const totalAmount = `₹${Math.round(cartItems.totalAmount)}`;
  const hasItems = cartItems.items.length > 0;

  const cartItemRemoveHandler = () => {};

  const cartItemAddHandler = () => {};

  return (
    <Modal onClose={props.onClick}>
      <ul className={classes["cart-items"]}>
        {cartItems.items.map((eachItem) => (
          <CartItem
            name={eachItem.name}
            price={eachItem.price}
            amount={eachItem.amount}
            onRemove={cartItemRemoveHandler.bind(null, eachItem.id)}
            onAdd={cartItemAddHandler.bind(null, eachItem)}
          />
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
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
