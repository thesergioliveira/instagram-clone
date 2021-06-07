import React, { useState } from "react";
import Data from "./data.json";
import Gallery from "./components/Gallery";

function App() {
  const [post, setPost] = useState(Data);
  return (
    <div>
      <Gallery Data={Data} />
    </div>
  );
}

export default App;
