import React from "react";
import BigCat from "../components/BigCat";
import Card from "../components/Card";
import Category from "../components/Category";
import close from "../img/close.png";

import AppContext from "../context";

function Home({ isLoading, searchValue, setSearchValue, onChangeSearchInput }) {
  const { items, bigCatValue, categoryValue } = React.useContext(AppContext);
  const filteredBigCat =
    items &&
    items.filter((element) => {
      return element.title === bigCatValue;
    });
  const filteredCategory =
    filteredBigCat &&
    filteredBigCat[0]?.categories?.filter((element) => {
      return element.title === categoryValue;
    });

  const filtredItems = filteredCategory && filteredCategory[0]?.items;
  const renderItems = () => {
    if (filtredItems) {
      return (isLoading ? [...Array(8)] : filtredItems)
        ?.filter((item) =>
          item.title.toLowerCase().includes(searchValue.toLowerCase())
        )
        .map((item, index) => (
          <Card key={isLoading ? index : item.id} {...item} count={0} />
        ));
    } else if (filteredBigCat.length > 0) {
      return (isLoading ? [...Array(8)] : filteredBigCat).map((item) =>
        item?.categories?.map((category) =>
          category?.items
            ?.filter((item) =>
              item.title.toLowerCase().includes(searchValue.toLowerCase())
            )
            .map((card, index) => (
              <Card key={isLoading ? index : card.id} {...card} count={0} />
            ))
        )
      );
    } else {
      return isLoading
        ? [...Array(8)].map((card, index) => (
            <Card key={isLoading ? index : card.id} {...card} count={0} />
          ))
        : items?.map((item) =>
            item?.categories?.map((category) =>
              category?.items
                ?.filter((item) =>
                  item.title.toLowerCase().includes(searchValue.toLowerCase())
                )
                .map((card, index) => (
                  <Card key={isLoading ? index : card.id} {...card} count={0} />
                ))
            )
          );
    }
  };

  return (
    <div className="homeContent d-flex flex-column align-start justify-center">
      <div className="banner"></div>
      <div className="homeContentTop">
        <h4 className="ml-20">Поиск по товарам</h4>
      </div>
      <div className="search-block d-flex align-center mt-10 mb-10">
        <input
          onChange={onChangeSearchInput}
          value={searchValue}
          width={100}
          placeholder="Введите название товара"
        />
        {searchValue && (
          <img
            onClick={() => setSearchValue("")}
            className="clear cu-p"
            src={close}
            alt="Clear"
          />
        )}
      </div>

      <h4 className="ml-20">Категории</h4>
      <div className="bigCatList d-flex flex-row pl-20">
        {(isLoading ? [...Array(5)] : items)?.map((item, index) => (
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

      {bigCatValue ? (
        <div className="categoryList d-flex flex-row">
          {(isLoading
            ? [...Array(5)]
            : filteredBigCat && filteredBigCat[0]?.categories
          )?.map((item, index) => (
            <Category key={isLoading ? index : item.id} {...item} />
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
