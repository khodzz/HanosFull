import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routing/routing";
import "./styles/App.scss";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <div className="App" style={{ position: "relative" }}>
      <Cart />
      <RouterProvider router={router}> </RouterProvider>
    </div>
  );
}

export default App;
