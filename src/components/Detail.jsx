import React from "react";
import close from "../img/close.png";
import AppContext from "../context";
import minus from "../img/minus.png";
import plus from "../img/plus.png";

function Detail({ onClose }) {
  const {
    isLoading,
    cartItems,
    detailOpened,
    detail,
    plusToCart,
    minusToCart,
  } = React.useContext(AppContext);

  const findItem = cartItems.find((item) => item.title === detail.title);

  return (
    <div className={!detailOpened ? "overlay" : "overlay overlayVisible "}>
      <div className="detail">
        <h4 className="d-flex justify-between pb-20 align-center">
          {detail.title} <img onClick={onClose} src={close} alt="Close" />
        </h4>
        <div className="detailContent flex">
          <img className="p-20" src={detail.image} alt="DetailImage" />
          <div className="cartTotalBlock">
            <ul>
              <li>
                <span>Размер:</span>
                <div></div>
                <span>В ассортименте</span>
              </li>
              <li>
                <span>Кол-во в упаковке:</span>
                <div></div>
                <span>{detail.amount}</span>
              </li>
              <li>
                <span>Цвет:</span>
                <div></div>
                <span>Белый</span>
              </li>
              <li>
                <span>Материал:</span>
                <div></div>
                <span>Мелованный картон, ПВХ пленка</span>
              </li>
              <li>
                <span>Торговая марка:</span>
                <div></div>
                <span>Passticiere</span>
              </li>
            </ul>
          </div>
          <h4 className="mb-10">Заказать</h4>
          <span>Цена за упаковку: {detail.price} руб.</span>
          <div className="d-flex flex-row justify-between align-center mt-5">
            <div className="price d-flex align-center">
              <span className="fw-bold">
                {findItem ? findItem.price * findItem.count : detail.price} руб.
              </span>
            </div>
            <div className="addButton d-flex flex-row align-center">
              <img
                onClick={() => minusToCart(detail)}
                width={20}
                height={20}
                src={minus}
                alt="minusButton"
              />
              <span className="ml-10 mr-10 fw-bold">
                {findItem ? findItem.count : 0}
              </span>
              <img
                onClick={() => plusToCart(detail)}
                width={20}
                height={20}
                src={plus}
                alt="plusButton"
              />
            </div>
          </div>
          <h4 className="mt-20 pb-10 ">Описание</h4>
          <ul>
            <h5>Фасовка в коробках:</h5>
            <li>CWW 180x180x100 – 135 шт (9 упаковок)</li>
            <li>CWW 220x220x100 – 90 шт (6 упаковок)</li>
            <li>CWW 240x240x100 – 75 шт (5 упаковок)</li>
            <li>CWW 260x260x100 – 75 шт (5 упаковок)</li>
          </ul>
          <ul>
            <h5>Качество, инновации и внешний вид :</h5>
            <li>
              Высококачественное первичное сырьё – Белоснежный целлюлозный
              картон с кремовым оборотом
            </li>
            <li>
              Панорамные окна на крышке и торце – Максимальная обзорность
              продукта
            </li>
            <li>
              Технология нанесения ламинационного слоя – Ламинация по всей
              поверхности картона
            </li>
            <li>
              Оптимальная плотность картона – Конструкция не сгибается и не
              деформируется при сборке и эксплуатации
            </li>
          </ul>
          <ul>
            <h5>Удобство и возможности:</h5>
            <li>
              Быстросборная конструкция – Оптимизация логистических затрат
            </li>
            <li>Размерный ряд адаптирован под запросы клиентов</li>
            <li>
              Внешняя сторона упаковки – мелованный картон – Невероятная
              цветопередача при нанесении индивидуальной печати
            </li>
            <li>
              Максимально удобная фасовка – В транспортировочном коробе от 5 до
              9 пачек. В каждой пачке по 15 упаковок. На каждую пачку нанесена
              маркировка производителя.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Detail;
