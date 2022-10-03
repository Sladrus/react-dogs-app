import React from "react";
import cart from "../img/cart.png";

function Drawer({ onClose, cartOpened }) {
  console.log(cartOpened);
  return (
    <div className={!cartOpened ? "overlay" : "overlay overlayVisible "}>
      <div className="drawer">
        <h4 className="d-flex justify-between mb-20 align-center">
          Корзина <img onClick={onClose} src={cart} alt="Close" />
        </h4>
      </div>
    </div>
  );
}

export default Drawer;
