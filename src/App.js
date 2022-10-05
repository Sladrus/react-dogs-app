import "./App.css";
import React from "react";
import { Route } from "react-router-dom";
import axios from "axios";

import Header from "./components/Header";
import Home from "./pages/Home";

import AppContext from "./context";
import Drawer from "./components/Drawer";

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [bigCatValue, setBigCatValue] = React.useState("");
  const [categoryValue, setCategoryValue] = React.useState("");

  const [cartOpened, setCartOpened] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

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
    console.log(cartItems);
  };
  console.log(cartItems);

  return (
    <AppContext.Provider
      value={{
        items,
        isLoading,
        bigCatValue,
        setBigCatValue,
        categoryValue,
        setCategoryValue,
        cartItems,
        setCartItems,
        plusToCart,
        minusToCart,
      }}
    >
      <div className="wrapper clear">
        <Drawer onClose={() => setCartOpened(false)} cartOpened={cartOpened} />
        <Header onClickCart={() => setCartOpened(true)} />
        <Home
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          onChangeSearchInput={onChangeSearchInput}
          isLoading={isLoading}
        />
        {/* <Route path="favorites" exact>
        <Favorites />
      </Route> */}
      </div>
    </AppContext.Provider>
  );
}

export default App;
