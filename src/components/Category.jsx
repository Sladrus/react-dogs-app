import React from "react";
import ContentLoader from "react-content-loader";
import AppContext from "../context";

function Category({ title }) {
  const { isLoading, categoryValue, setCategoryValue } =
    React.useContext(AppContext);
  const onClick = () => {
    setCategoryValue(title);
  };
  return (
    <>
      {isLoading ? (
        <div className="d-flex mr-10">
          <ContentLoader
            speed={1.5}
            width={100}
            height={30}
            viewBox="0 0 100 30"
            backgroundColor="#f3f3f3"
            foregroundColor="#d6d4d4"
          >
            <rect x="0" y="0" rx="15" ry="15" width="100" height="30" />
          </ContentLoader>
        </div>
      ) : (
        <div
          onClick={onClick}
          className={categoryValue === title ? "category currentCategory" : "category"}
        >
          <p>{title}</p>
        </div>
      )}
    </>
  );
}

export default Category;
