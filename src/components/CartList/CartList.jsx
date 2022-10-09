import React from "react";
import CartItem from "../CartItem/CartItem";
import AppContext from "../../context";
import "./CartList.scss";

const CartList = () => {
  const { cartItems } = React.useContext(AppContext);
  return (
    <div className="cartList flex">
      {cartItems.map((item) => (
        <CartItem {...item} />
      ))}
    </div>
  );
};

export default CartList;
