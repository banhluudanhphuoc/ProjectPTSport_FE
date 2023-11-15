import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './style/style.scss';
import RouterCustom from './router';
import { CartProvider } from "react-use-cart";
import './i18n';
import { AuthProviderAdmin } from 'context/AuthContextAdmin';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>
    <AuthProviderAdmin>
      <CartProvider>
        <RouterCustom />
      </CartProvider>
    </AuthProviderAdmin>
  </BrowserRouter>


);

