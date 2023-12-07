import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './style/style.scss';
import RouterCustom from './router';
import { CartProvider } from 'react-use-cart';
import './i18n';
import { FacebookProvider, CustomChat } from 'react-facebook';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.Fragment>
    <BrowserRouter>
      <FacebookProvider appId={process.env.REACT_APP_FACEBOOK_APP_ID}>
        <CartProvider>
          <RouterCustom />
        </CartProvider>
      </FacebookProvider>
    </BrowserRouter>
  </React.Fragment>

);

