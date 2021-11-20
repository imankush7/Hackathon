import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import {ProductProvider} from "./context/ProductContext"

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <ProductProvider>
    <App />
    </ProductProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();