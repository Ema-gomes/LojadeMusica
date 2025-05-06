import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import About from './About';
import Faqs from './Faqs';
import Contacts from './Contacts';
import reportWebVitals from './reportWebVitals';
import Login from './Acc';
import Conta from './Conta';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
  <Routes>
  <Route path="/" element={<App />} />
  <Route path="/login" element={< Login />} />
  <Route path="/about" element={< About />} />
  <Route path="/faqs" element={< Faqs />} />
  <Route path="/contacts" element={< Contacts />} />
  <Route path="/account" element={< Conta />} />
  </Routes>
</BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
