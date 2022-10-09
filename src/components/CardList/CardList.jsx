import React from "react";
import Card from "../Card/Card";
import AppContext from "../../context";
import './CardList.scss';

const CardList = ({filtredItems, filtredType}) => {
  const { items, isLoading, searchValue} = React.useContext(AppContext);

  const renderItems = () => {
    if (filtredItems) {
      return (isLoading ? [...Array(8)] : filtredItems)
        ?.filter((item) =>
          item.title.toLowerCase().includes(searchValue.toLowerCase())
        )
        .map((item, index) => (
          <Card key={isLoading ? index : item.id} {...item} count={0} />
        ));
    } else if (filtredType.length > 0) {
      return (isLoading ? [...Array(8)] : filtredType).map((item) =>
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
            item.categories?.map((category) =>
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
    <div className="cardList d-flex flex-wrap justify-around">
      {renderItems()}
    </div>
  );
};

export default CardList;
