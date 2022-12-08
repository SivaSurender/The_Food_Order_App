import { useReducer } from "react";
import CartContext from "./CartContext";

const defaultCartData = { items: [], totalAmount: 0 };

const cartReducer = (state, action) => {
  console.log(action, "action");
  console.log(state, "state");
  if (action.type === "ADD") {
    const updatedItems = state.items.concat(action.item);
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  return defaultCartData;
};

const CartProvider = (props) => {
  const [currCartState, dispatchCurrCartState] = useReducer(
    cartReducer,
    defaultCartData
  );
  const addItemToCartHandler = (item) => {
    dispatchCurrCartState({ type: "ADD", item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCurrCartState({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: currCartState.items,
    totalAmount: currCartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
