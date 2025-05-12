import React from 'react';
import Header from './components/Header/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Shop from './Pages/Shop';
import About from './Pages/About';
import Faqs from './Pages/Faqs';
import Contacts from './Pages/Contacts';
import Login from './Pages/LoginSignup';
import Conta from './Pages/Conta';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import ShopContextProvider from './Context/ShopContext';

function App() {
  return (
    <div>
     <ShopContextProvider>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/vinyls" element={< ShopCategory  category="vinyls"/>} />
        <Route path="/cds" element={< ShopCategory category="cds"/>} />
        <Route path="/merch" element={< ShopCategory category="merch"/>} />
        <Route path="/other" element={< ShopCategory category="others"/>} />
        <Route path="/product" element={< Product />} >
        <Route path=":productID" element={< Product />} />
        </Route>


        <Route path="/cart" element={< Cart />} />
        <Route path="/login" element={< Login />} />
        <Route path="/about" element={< About />} />
        <Route path="/faqs" element={< Faqs />} />
        <Route path="/contacts" element={< Contacts />} />
        <Route path="/account" element={< Conta />} />
       </Routes>
      </BrowserRouter>
       </ShopContextProvider>
    </div>
  );
}

export default App;
