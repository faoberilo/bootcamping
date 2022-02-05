import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Navbar from "./components/Navbar/Navbar";

import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/Profile";
import About from "./pages/About/About";
import Admin from "./pages/Admin/Admin";
import Produto from "./pages/Produto/Produto";
import ModalCadastroProduto from "./components/ModalCadastroProduto/ModalCadastroProduto";
import ModalEditarProduto from "./components/ModalEditarProduto/ModalEditarProduto";
import ModalCadastro from "./components/ModalCadastro/ModalCadastro";

// axios.defaults.baseURL = "https://gcommerce-backend.herokuapp.com/";
axios.defaults.baseURL = "http://localhost:3001/";
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.interceptors.request.use((config) => {
  config.headers.authorization = `Bearer ${localStorage.getItem("token")}`;
  return config;
});

ReactDOM.render(
  <React.StrictMode>
    <Navbar />

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Admin />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/register" element={<ModalCadastro />} />
        <Route path="/profile/" element={<Profile />} />
        <Route path="/About" element={<About />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/registerproduct" element={<ModalCadastroProduto />} />
        <Route path="/produto/:id" element={<Produto />} />
        <Route path="/produto/editar/:id" element={<ModalEditarProduto />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
