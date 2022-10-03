import React from "react";
import cart from "../img/cart.png";
import minus from "../img/minus.png";
import plus from "../img/plus.png";
function Card({ title, description, image, price, amount }) {
  return (
    <div className="card d-flex flex-column justify-between ">
      <div>
        <img width="100%" src={image} alt="Product" />

        <h5>{title}</h5>
        <p>Кол-во в упаковке: {amount}</p>
        <p>Размер: В ассортименте</p>
      </div>

      <div className="d-flex flex-row justify-between align-center pt-15">
        <div className="price d-flex align-center">
          <span>{price} руб.</span>
        </div>
        <div className="addButton d-flex flex-row align-center">
          <img width={20} height={20} src={minus} alt="minusButton" />
            <span>0</span>
          <img width={20} height={20} src={plus} alt="plusButton" />

        </div>
      </div>
    </div>
  );
}

export default Card;
