import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";

import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";

import AppContext from "./context";
import Drawer from "./components/Drawer/Drawer";
import Detail from "./components/Detail/Detail";
import { useTelegram } from "./hooks/useTelegram";

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [typeValue, setTypeValue] = React.useState("");
  const [categoryValue, setCategoryValue] = React.useState("");
  const [cartOpened, setCartOpened] = React.useState(false);
  const [detail, setDetail] = React.useState({});
  const [detailOpened, setDetailOpened] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

  const { tg } = useTelegram();

  React.useEffect(() => {
    tg?.ready();
    tg?.expand();
    tg?.enableClosingConfirmation();
  }, []);

  React.useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const itemsResponse = await axios.get(
          "https://6339a9e166857f698fb9cb3f.mockapi.io/items"
        );
        setItems(itemsResponse.data);

        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const plusToCart = (obj) => {
    const findItem = cartItems.find((item) => item.title === obj.title);
    if (findItem) {
      findItem.count = findItem.count + 1;
      setCartItems((prev) => [...prev]);
    } else {
      obj.count = obj.count + 1;
      setCartItems((prev) => [...prev, obj]);
    }
  };

  const minusToCart = (obj) => {
    const findItem = cartItems.find((item) => item.title === obj.title);
    if (findItem) {
      if (findItem.count > 1) {
        findItem.count = findItem.count - 1;
        setCartItems((prev) => [...prev]);
      } else {
        setCartItems((prev) => prev.filter((item) => item.title !== obj.title));
      }
    }
  };

  return (
    <AppContext.Provider
      value={{
        isLoading,
        items,
        typeValue,
        setTypeValue,
        categoryValue,
        setCategoryValue,
        cartItems,
        setCartItems,
        plusToCart,
        minusToCart,
        setDetailOpened,
        detail,
        setDetail,
        searchValue,
        setSearchValue,
      }}
    >
      <div className="wrapper clear">
        <Drawer
          onClose={() => setCartOpened(false)}
          cartOpened={cartOpened}
          cartItems={cartItems}
        />
        <Detail
          onClose={() => setDetailOpened(false)}
          detailOpened={detailOpened}
          cartItems={cartItems}
          detail={detail}
          plusToCart={plusToCart}
          minusToCart={minusToCart}
        />
        <Header onClickCart={() => setCartOpened(true)} cartItems={cartItems} />
        <Home
          onChangeSearchInput={onChangeSearchInput}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </div>
    </AppContext.Provider>
  );
}

export default App;
