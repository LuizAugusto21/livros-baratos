import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from './components/Header/Header'
import  Footer from './components/Footer/Footer'

import Login from "./pages/login/Login";
import Signup from "./pages/singup/Cadastro";
import Homepage from "./pages/homepage/homepage";
import Wishlist from './pages/wishlist/Wishlist';
import ShoppingCart from './pages/shopping/ShoppingCart';
import Search from './pages/search/Search';
import { SearchProvider } from './contexts/SearchContext';
import Proximidade from "./pages/proximidade/Proximidade";
import "./global.scss";
import Sebos from "./pages/Sebos/Sebos";

function App() {
  return (
    <SearchProvider>
    <Router>
       <div className="app-container">
          <Header isHome={true} isLogged={true}/>
          <main>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cadastro" element={<Signup />} />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="/carrinho" element={<ShoppingCart />} />
              <Route path="/proximidade" element={< Proximidade/>} />
              <Route path="/sebos" element={< Sebos/>} />
              <Route path="/search" element={<Search />} />
              {/* Adicione mais rotas conforme necessário */}
            </Routes>
          </main>
          <Footer />
        </div>
    </Router>
  </SearchProvider>
  );
}

export default App;