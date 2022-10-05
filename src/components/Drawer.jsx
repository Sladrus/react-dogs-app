import React from "react";
import close from "../img/close.png";
import AppContext from "../context";
import Card from "./Card";

function Drawer({ onClose, cartOpened }) {
  const { isLoading, cartItems, plusToCart, minusToCart } =
    React.useContext(AppContext);
  const totalPrice = cartItems.reduce(
    (sum, obj) => obj.price * obj.count + sum,
    0
  );

  return (
    <div className={!cartOpened ? "overlay" : "overlay overlayVisible "}>
      <div className="drawer">
        <h4 className="d-flex justify-between mb-20 align-center">
          Корзина <img onClick={onClose} src={close} alt="Close" />
        </h4>
        <div className="cartContent flex">
          {cartItems.map((item) => (
            <Card {...item} />
          ))}
        </div>
        <div className="cartTotalBlock">
          <ul>
            <li>
              <span>Итого:</span>
              <div></div>
              <b>{totalPrice} руб. </b>
            </li>
          </ul>
          <button disabled={isLoading} className="greenButton">
            Оформить заказ
          </button>
        </div>
      </div>
    </div>
  );
}

export default Drawer;
