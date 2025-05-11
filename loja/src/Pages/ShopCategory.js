import React from 'react';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Newsletter from "../components/Newsletter/Newsletter";
import './CSS/ShopCategory.css';
import popular from '../components/Popular/Popular.json';


function ShopCategory() {
const {popular} = useContext(ShopContext)
  return (
    <div className="ShopCategory">
      <Header />
      <div className="shopcategory-indexSort">
      <p>
      <span> Showing 1-3 </span> out of 4 products
        </p>
      <div className="shopcategory-products">
{popular.map((item))}
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
}

export default ShopCategory;