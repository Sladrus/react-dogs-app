import React from "react";
import ContentLoader from "react-content-loader";
import AppContext from "../../context";
import minus from "../../img/minus.png";
import plus from "../../img/plus.png";
import close from "../../img/close.png";
import "./CartItem.scss";

function CartItem({ id, title, image, price, amount, count }) {
  const { isLoading, cartItems, plusToCart, minusToCart, setCartItems } =
    React.useContext(AppContext);
  const obj = { id, parentId: id, title, image, price, amount, count };

  const findItem = cartItems.find((item) => item.title === obj.title);

  const deleteItem = (obj) => {
    setCartItems((prev) => prev.filter((item) => item.title !== obj.title));
  };

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
        <div className="cartItem d-flex flex-column justify-between mt-10">
          <div className="d-flex flex-row align-start justify-between">
            <div className="d-flex flex-row align-center">
              <img
                className="mr-10 ml-10 p-5"
                height={50}
                width={50}
                src={image}
                alt="Product"
              />
              <h5>{title}</h5>
            </div>
            <img
              onClick={() => deleteItem(obj)}
              className="ml-20 mr-10"
              width={18}
              src={close}
              alt="Close"
            />
          </div>
          <div className="d-flex flex-row justify-between align-end pt-10 pb-10">
            <div className="d-flex flex-column align-start">
              <div className="price align-center">
                <span className="ml-10 mr-5">Цена:</span>

                <span>{price} руб.</span>
              </div>
              <div className="price align-center">
                <b className="ml-10 mr-5">Сумма:</b>

                <b>{findItem ? price * findItem.count : price} руб.</b>
              </div>
            </div>
            <div className="line"></div>
            <div className="addButton d-flex flex-row align-center mr-10">
              <img
                onClick={() => minusToCart(obj)}
                width={20}
                height={20}
                src={minus}
                alt="minusButton"
              />
              <b className="ml-10 mr-10">{findItem ? findItem.count : 0}</b>
              <img
                onClick={() => plusToCart(obj)}
                width={20}
                height={20}
                src={plus}
                alt="plusButton"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default CartItem;
