import React from "react";
import ColorCard from "./components/ColorCard";

function App({ id, colorCode }) {
  return (
    <>
      <h1>Color Saver App</h1>
      <ColorCard />
    </>
  );
}

export default App;
