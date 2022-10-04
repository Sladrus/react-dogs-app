import React from "react";
import BigCat from "../components/BigCat";
import Card from "../components/Card";
import Category from "../components/Category";

import AppContext from "../context";

function Home({ isLoading, searchValue, setSearchValue, onChangeSearchInput }) {
  const { items, categories, bigCatValue, setBigCatValue } =
    React.useContext(AppContext);
  const renderItems = () => {
    const filtredItems = items.filter((item) =>
      item.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    return (isLoading ? [...Array(8)] : filtredItems).map((item, index) => (
      <Card key={index} {...item} />
    ));
  };
  return (
    <div className="homeContent d-flex flex-column align-start justify-center">
      <div className="banner"></div>
      <div className="homeContentTop">
        <h4 className="ml-20">Поиск по товарам</h4>
      </div>
      <div className="mt-10 mb-10">
        <input
          onChange={onChangeSearchInput}
          value={searchValue}
          width={100}
          placeholder="Введите название товара"
        />
      </div>

      <h4 className="ml-20">Категории</h4>
      <div className="bigCatList d-flex flex-row pl-20">
        {(isLoading ? [...Array(5)] : categories).map((item, index) => (
          <BigCat key={index} {...item} />
        ))}
      </div>
      <h4 className=" ml-20">
        {searchValue
          ? `Поиск по запросу: "${searchValue}"`
          : bigCatValue
          ? bigCatValue
          : "Все товары"}
      </h4>

      {!searchValue ? (
        <div className="categoryList d-flex flex-row">
          {(isLoading ? [...Array(5)] : categories).map((item, index) => (
            <Category key={index} {...item} />
          ))}
        </div>
      ) : undefined}
      <div className="cardList mt-10 d-flex flex-wrap justify-around">
        {renderItems()}
      </div>
    </div>
  );
}

export default Home;
