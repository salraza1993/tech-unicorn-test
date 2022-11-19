import React, { Suspense } from 'react'
import { Route, Routes } from "react-router-dom";
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import Cart from "../views/Cart";
import ProductList from "../views/ProductList";

function AppRoutes() {
  return <Suspense fallback={null}>
    <Header />
    <Routes>
      <Route path="/" element={<ProductList />} />
      <Route path="cart" element={<Cart />} />
    </Routes>
    <Footer />
</Suspense>
}

export default AppRoutes