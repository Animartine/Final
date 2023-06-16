import React from "react";
import { ItemList } from "./componentes/ItemList";
import { Navbar } from "./componentes/Navbar";
import { ShoppingCart } from "./componentes/ShoppingCart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ShoppingCartProvider } from "./contexts/ShoppingCartContext";

export const App = () => {
    return (
  
        <ShoppingCartProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<ItemList />} />
            <Route path="/cart" element={<ShoppingCart />} />
          </Routes>
        </Router>
      </ShoppingCartProvider>
  );
};