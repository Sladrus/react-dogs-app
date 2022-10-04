import React from "react";
import ContentLoader from "react-content-loader";
import AppContext from "../context";
import cart from "../img/cart.png";
import minus from "../img/minus.png";
import plus from "../img/plus.png";

function Card({ title, description, image, price, amount }) {
  const { isLoading } = React.useContext(AppContext);

  return (
    <>
      {isLoading ? (
          <ContentLoader
            speed={1.5}
            width={130}
            height={265}
            viewBox="0 0 130 265"
            backgroundColor="#f3f3f3"
            foregroundColor="#d6d4d4"
          >
            <rect x="0" y="0" rx="15" ry="15" width="130" height="130" />
            <rect x="0" y="150" rx="5" ry="5" width="130" height="10" />
            <rect x="0" y="170" rx="5" ry="5" width="130" height="10" />
            <rect x="0" y="235" rx="5" ry="5" width="50" height="10" />
            <rect x="0" y="190" rx="5" ry="5" width="100" height="10" />
          </ContentLoader>
      ) : (
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
      )}
    </>
  );
}

export default Card;
