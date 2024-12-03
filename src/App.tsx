import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes, Link } from "react-router";
import IndexPage from './pages/IndexPage/Index';
import MainNavbar from './components/Navbar';
import ProductsPage from './pages/ProductsPage';

/** Тут хранится роутинг */
function App() {
  return (
    <BrowserRouter>
      {/* <Link to='/'>Index</Link>
      <Link to='/products'>Products</Link> */}
      <MainNavbar/>
      <Routes>
        <Route path="/" element={<IndexPage/>} />
        <Route path="/products" element={<ProductsPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
