import React from "react";
import AppContext from "../../context";
import Type from '../Type/Type'
import './TypeList.scss'

const TypeList = () => {
    const {isLoading, items } = React.useContext(AppContext);

  return (
    <div className="typeList d-flex flex-row pl-20">
      {(isLoading ? [...Array(5)] : items)?.map((item, index) => (
        <Type key={index} {...item} />
      ))}
    </div>
  );
};

export default TypeList;
