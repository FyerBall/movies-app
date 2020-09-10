import React, { useState } from "react";
import Banner from "./component/Banner";
import Genres from "./component/Genres";
import Cards from "./component/Cards";
import requests from "./requests";
import "./App.css";

function App() {
  const [genre, setGenere] = useState(requests.fetchTrending);
  return (
    <div className="app">
      {/* Banner */}
      <Banner />
      {/* Genres */}
      <Genres setGenere={setGenere} />
      {/* Cards */}
      <Cards genre={genre} />
    </div>
  );
}

export default App;
