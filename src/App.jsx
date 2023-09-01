import React from "react";
import { FevShow, Search, Showroom } from "./components";
import GlobalStates from "./context/MyContext";
import "./App.css";

const App = () => {
  return (
    <GlobalStates>
      <div className="container">
        <div className="heading">
          <h1>Dog Breeds</h1>
          <span>&#10084;</span>
        </div>
        <Search />
        <Showroom />
        <hr />
        <div className="fev">
          <span>&#10084;</span>
          <h1>Favorites</h1>
        </div>
        <FevShow />
      </div>
    </GlobalStates>
  );
};

export default App;
