import React from "react";
import menu from "../img/menu.png";
import cart from "../img/cart.png";
import heart from "../img/heart.svg";
import AppContext from "../context";

function Header(props) {
  const { cartItems } = React.useContext(AppContext);

  const totalPrice = cartItems.reduce((sum, obj) => obj.price * obj.count + sum, 0);

  return (
    <header className="header d-flex justify-between align-center">
      <img width={20} height={20} src={menu} alt="Меню" />
      <div className="d-flex flex-row align-center">
        <img
          className="mr-20"
          width={16}
          height={16}
          src={heart}
          alt="Избранное"
        />

        <div
          onClick={props.onClickCart}
          className="d-flex flex-row align-center"
        >
          <img width={25} height={25} src={cart} alt="Корзина" />
          <p className="ml-10 mr-10 fw-bold">{totalPrice} руб.</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
