import React from "react";
import ContentLoader from "react-content-loader";
import AppContext from "../../context";
import './Type.scss'

function Type({ id, title, image }) {
  const { isLoading, typeValue, setTypeValue, setCategoryValue } =
    React.useContext(AppContext);
  const onClick = () => {
    setTypeValue(title);
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
            typeValue === title
              ? "typeItem d-flex flex-column align-center mt-15 mr-10 mb-15 typeItemCurrent"
              : "typeItem d-flex flex-column align-center mt-15 mr-10 mb-15"
          }
        >
          <img src={image} alt="Big Cat" />
          <div className="d-flex align-center">
            <p className="mt-10">{title}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default Type;
