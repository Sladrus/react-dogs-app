import React from "react";
import close from "../../img/close.png";
import CardList from "../../components/CardList/CardList";
import CategoryList from "../../components/CategoryList/CategoryList";
import TypeList from "../../components/TypeList/TypeList";

import AppContext from "../../context";
import "./Home.scss";

function Home({ onChangeSearchInput, searchValue, setSearchValue }) {
  const { items, typeValue, categoryValue } =
    React.useContext(AppContext);
  const filtredType =
    items &&
    items.filter((element) => {
      return element.title === typeValue;
    });
  const filteredCategory =
  filtredType &&
  filtredType[0]?.categories?.filter((element) => {
      return element.title === categoryValue;
    });

  const filtredItems = filteredCategory && filteredCategory[0]?.items;

  return (
    <div className="home d-flex flex-column align-start justify-center">
      <div className="banner"></div>
      <div>
        <h4 className="ml-20">Поиск по товарам</h4>
      </div>
      <div className="search-block d-flex align-center mt-15 mb-15">
        <input
          onChange={onChangeSearchInput}
          value={searchValue}
          width={100}
          placeholder="Введите название товара"
        />
        {searchValue && (
          <img
            onClick={() => setSearchValue("")}
            className="clear cu-p mr-15"
            src={close}
            alt="Clear"
          />
        )}
      </div>

      <h4 className="ml-20">Категории</h4>
      <TypeList />
      <h4 className="ml-20">
        {searchValue
          ? `Поиск по запросу: "${searchValue}"`
          : typeValue
          ? typeValue
          : "Все товары"}
      </h4>

      <CategoryList filtredType={filtredType} />
      <CardList
        filtredItems={filtredItems}
        filteredCategory={filteredCategory}
        filtredType={filtredType}
      />
    </div>
  );
}

export default Home;
