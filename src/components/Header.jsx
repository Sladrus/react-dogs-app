import React from "react";
import menu from '../img/menu.png';
import cart from '../img/cart.png';

function Header(props) {
  return (
    <header className="header d-flex justify-between align-center">
      <img width={20} height={20} src={menu} alt="Меню" />

      <div onClick={props.onClickCart} className="d-flex flex-row align-center">
        
      <img 
        width={25}
        height={25}
        src={cart}
        alt="Корзина"
      />
      <p className="ml-10 mr-10 fw-bold">0 руб.</p>
      </div>
    </header>
  );
}

export default Header;
