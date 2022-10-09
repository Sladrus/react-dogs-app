import React from "react";
import AppContext from "../../context";
import Category from "../Category/Category";
import './CategoryList.scss'

const CategoryList = ({filtredType}) => {
  const {isLoading, typeValue } = React.useContext(AppContext);

  return (
    <>
      {typeValue ? (
        <div className="categoryList d-flex flex-row">
          {(isLoading
            ? [...Array(5)]
            : filtredType && filtredType[0]?.categories
          )?.map((item, index) => (
            <Category key={isLoading ? index : item.id} {...item} />
          ))}
        </div>
      ) : undefined}
    </>
  );
};

export default CategoryList;
