import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import Signup from "./pages/singup/Cadastro";
import Homepage from "./pages/homepage/homepage";
import Header from './components/Header/Header'
import  Footer from './components/Footer/Footer'


import "./global.scss";

function App() {
  return (
    <Router>
       <div className="app-container">
          <Header isHome={true}/>
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              {/* Adicione mais rotas conforme necessário */}
            </Routes>
          </main>
          <Footer />
        </div>
    </Router>
  );
}

export default App;
