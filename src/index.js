import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './style/style.scss';
import RouterCustom from './router';
import { CartProvider, useCart } from "react-use-cart";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>
    <CartProvider>
      <RouterCustom />
    </CartProvider>
  </BrowserRouter>


);

