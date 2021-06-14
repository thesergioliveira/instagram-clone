import React, { useState } from "react";
import Data from "./data.json";
import Gallery from "./components/Gallery";
import Header from "./components/header/Header";
import Menu from "./components/header/Menu";

function App() {
  const [post, setPost] = useState(Data);
  return (
    <div>
      <Menu/>
      <Header/>
      <Gallery Data={Data} />
    </div>
  );
}

export default App;
