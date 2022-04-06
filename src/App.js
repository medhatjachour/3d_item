import React from "react";
import { Routes, Route } from "react-router-dom";
import MainNavbar from "./components/MainNavbar";

import "./App.css";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Demo from "./AI/Demo";
import Shoe2 from './AI/Shoe2'
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Thefknai from "./AI/TheFknAi";

function App() {
  return (
    <>
      <MainNavbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Demo" element={<Demo />} />
        <Route path="/Shoe2" element={<Shoe2 />} />
        <Route path="/Thefknai" element={<Thefknai />} />
        <Route path="/Product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
