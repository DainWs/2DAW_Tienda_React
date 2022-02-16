import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createBrowserHistory } from 'history';
import HomePage from './pages/HomePage';
import CarritoPage from './pages/CarritoPage';
import ProductPage from './pages/ProductPage';
import reportWebVitals from './reportWebVitals';
import Layout from './pages/Layout';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/product/:productId" element={<ProductPage />} />
          <Route path="/carrito" element={<CarritoPage />} />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App/>, document.getElementById("root"));

reportWebVitals();
