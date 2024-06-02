import React from "react";
// import Wishlist from "./pages/wishlist/Wishlist";
import ShoppingCart from "./pages/shopping/ShoppingCart";
// import Homepage from "./pages/homepage/homepage";

function App(props) {
  return (
      <div className="app">
          {/* <Wishlist /> */}
          <ShoppingCart></ShoppingCart>
        </div>
  );
}

export default App;
