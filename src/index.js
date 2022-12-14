import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from "react-router-dom"; 
import App from './App';
 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 // BrowserRouter (он только для хостинга) -  не использовать здесь т.к. при сборке  и просмотре на Локальном ПК - ссылки неправильные будут + там еще есть проблема
  <HashRouter>
  <App />
  </HashRouter>
 
);

 