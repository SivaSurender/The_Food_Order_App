import React from "react";
import classes from "./Cat.module.css";

const Cart = (props) => {
  const cartItems = [{ id: "b1", name: "Curry", price: 75 }];
  return (
    <div>
      <ul>
        {cartItems.map((eachItem) => (
          <li>{eachItem.name}</li>
        ))}
      </ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>40</span>
      </div>
      <div className={classes.action}>
        <button className={classes["button--alt"]}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </div>
  );
};

export default Cart;
