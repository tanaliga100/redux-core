import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import { reducerFunction } from "./redux/reducer";
// items
import cartItems from "./cart-items";
// redux stuff

function App() {
  // cart setup
  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
}
export default App;
