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
  const [categories, setCategories] = React.useState([]);
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
        const categoriesResponse = await axios.get(
          "https://6339a9e166857f698fb9cb3f.mockapi.io/categories"
        );
        setIsLoading(false);

        setItems(itemsResponse.data);
        setCategories(categoriesResponse.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <AppContext.Provider
      value={{
        items,
        categories,
        isLoading,
        bigCatValue,
        setBigCatValue,
        categoryValue,
        setCategoryValue,
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
