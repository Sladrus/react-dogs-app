import React from "react";
import ContentLoader from "react-content-loader";
import AppContext from "../context";

function Category({ title }) {
  const { isLoading } = React.useContext(AppContext);

  return (
    <>
      {isLoading ? (
        <div className="d-flex mr-10">
          <ContentLoader
            speed={2}
            width={100}
            height={30}
            viewBox="0 0 100 30"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
          >
            <rect x="0" y="0" rx="15" ry="15" width="100" height="30" />
          </ContentLoader>
        </div>
      ) : (
        <div className="category">
          <p>{title}</p>
        </div>
      )}
    </>
  );
}

export default Category;
