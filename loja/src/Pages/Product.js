import React, { useContext} from 'react';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import './CSS/Geral.css';
import {ShopContext} from '../Context/ShopContext';
import { useParams } from 'react-router-dom';

function Product() {

const {Produtos} = useContext(ShopContext);
const {productId} = useParams();
const product = Produtos.find((e)=> e.id === Number(productId) )
  return (
    <div className="Main">
      <Header />

      <Footer />
    </div>
  );
}

export default Product;