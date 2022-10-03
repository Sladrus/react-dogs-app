import "./App.css";
import React from "react";
import { Route } from "react-router-dom";
import axios from "axios";

import Header from "./components/Header";
import Home from "./pages/Home";

import AppContext from "./context";

function App() {
  const [items, setItems] = React.useState([]);
  const [categories, setCategories] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");

  React.useEffect(() => {
    async function fetchData() {
      try {
        const itemsResponse = await axios.get(
          "https://6339a9e166857f698fb9cb3f.mockapi.io/items"
        );
        const categoriesResponse = await axios.get(
          "https://6339a9e166857f698fb9cb3f.mockapi.io/categories"
        );
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
    <AppContext.Provider value={{ items, categories }}>
      <div className="wrapper clear">
        <Header />
        <Home
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          onChangeSearchInput={onChangeSearchInput}
        />
        {/* <Route path="favorites" exact>
        <Favorites />
      </Route> */}
      </div>
    </AppContext.Provider>
  );
}

export default App;
