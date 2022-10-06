import React from "react";
import ContentLoader from "react-content-loader";
import AppContext from "../context";

function BigCat({ id, title }) {
  const { isLoading, bigCatValue, setBigCatValue, setCategoryValue } =
    React.useContext(AppContext);
  const onClick = () => {
    setBigCatValue(title);
    setCategoryValue("");
  };

  return (
    <>
      {isLoading ? (
        <div className="d-flex mr-10 mt-10 mb-10">
          <ContentLoader
            speed={1.5}
            width={75}
            height={100}
            viewBox="0 0 75 100"
            backgroundColor="#f3f3f3"
            foregroundColor="#d6d4d4"
          >
            <rect x="0" y="0" rx="10" ry="10" width="75" height="99" />
          </ContentLoader>
        </div>
      ) : (
        <div
          onClick={onClick}
          className={
            bigCatValue === title
              ? "bigCatCard d-flex flex-column align-center mt-15 mr-10 mb-15 bigCatCurrent"
              : "bigCatCard d-flex flex-column align-center mt-15 mr-10 mb-15"
          }
        >
          <img
            src="https://w7.pngwing.com/pngs/166/920/png-transparent-computer-icons-parcel-e-commerce-package-delivery-storage-miscellaneous-angle-furniture-thumbnail.png"
            alt="Big Cat"
          />
          <div className="d-flex align-center">
           <p className="mt-10">{title}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default BigCat;
