import React from "react";
import Card from "../components/Card";
import Category from "../components/Category";

import AppContext from "../context";

function Home({ isLoading, searchValue, setSearchValue, onChangeSearchInput }) {
  const { items, categories } = React.useContext(AppContext);
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

      <div className="homeContentBottom">
        <h4>
          {searchValue ? `Поиск по запросу: "${searchValue}"` : "Все товары"}
        </h4>
      </div>
      {!searchValue ? (
        <div className="categoryList d-flex flex-row mt-10">
          {(isLoading
            ? [...Array(5)]
            : categories).map((item, index) => <Category key={index} {...item} />)}
        </div>
      ) : undefined}
      <div className="cardList mt-20 d-flex flex-wrap justify-around">
        {renderItems()}
      </div>
    </div>
  );
}

export default Home;
