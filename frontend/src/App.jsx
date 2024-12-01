import React, { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routing/routing";
import "./styles/App.scss";
import Cart from "./components/Cart/Cart";
import { useDispatch, useSelector } from "react-redux";
import { total } from "./store/reducers/carts/CartSlice";

function App() {
  const { isOpen } = useSelector((state) => state.checkout);
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(total());
  }, [cartItems]);

  return (
    <div className="App" style={{ position: "relative" }}>
      {isOpen && <Cart />}
      <RouterProvider router={router}> </RouterProvider>
    </div>
  );
}

export default App;
