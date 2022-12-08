import React, { useRef } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";
const MealItemForm = function (props) {
  const inputRefHandler = useRef();
  const onSubmitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = inputRefHandler.current.value;
    const finalEnteredAmount = +enteredAmount;
    console.log(enteredAmount, finalEnteredAmount);

    if (
      enteredAmount.trim().length === 0 ||
      finalEnteredAmount < 1 ||
      finalEnteredAmount > 5
    ) {
      return;
    }

    props.onAddToCart(finalEnteredAmount);
  };
  return (
    <form className={classes.form} onSubmit={onSubmitHandler}>
      <Input
        ref={inputRefHandler}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: 1,
          max: 5,
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;
