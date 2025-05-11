import React from 'react';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Highlight from "../components/Highlight/Highlight";
import Newsletter from "../components/Newsletter/Newsletter";
import Popular from "../components/Popular/Popular";
import './CSS/Geral.css';

function Shop() {
  return (
    <div className="Main">
      <Header />
      <Highlight />
      <Popular />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default Shop;