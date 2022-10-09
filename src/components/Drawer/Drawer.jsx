import React from "react";
import close from "../../img/close.png";
import cart from "../../img/cart.png";

import CartList from "../CartList/CartList";
import './Drawer.scss'

function Drawer({ onClose, cartOpened, cartItems }) {
  const totalPrice = cartItems.reduce(
    (sum, obj) => obj.price * obj.count + sum,
    0
  );

  return (
    <div className={!cartOpened ? "overlay" : "overlay overlayVisible "}>
      <div className="drawer">
        <h4 className="d-flex justify-between pb-20 align-center">
          <div className="d-flex flex-row align-center">
            <img className="mr-5" width={24} src={cart} alt="Cart" /> Корзина
          </div>
          <img onClick={onClose} src={close} alt="Close" />
        </h4>
        <CartList />
        <div className="cartTotalBlock">
          <ul>
            <li>
              <span>Итого:</span>
              <div></div>
              <b>{totalPrice} руб. </b>
            </li>
          </ul>
          <button className="greenButton">Оформить заказ</button>
        </div>
      </div>
    </div>
  );
}

export default Drawer;
