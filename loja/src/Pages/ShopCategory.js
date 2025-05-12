import React , { useContext} from 'react';
import { ShopContext } from '../Context/ShopContext';
import './CSS/ShopCategory.css';
import Header from '../components/Header/Header'
import Newsletter from '../components/Newsletter/Newsletter'
import Footer from '../components/Footer/Footer'
import Item from '../components/Item/Item'
import dropdown_icon from '../components/imagens/dropdown_icon.png'


function ShopCategory(props) {
const {Produtos} = useContext(ShopContext)
  return (
    <div className="ShopCategory">
    <Header />
      <div className="shopcategory-indexSort">
      <p>
      <span> Showing 1-3 </span> out of 4 products
        </p>
        <div className="shopcategory-sort">
        Filtrar por <img src={dropdown_icon} alt=""/>
        </div>
        </div>
      <div className="shopcategory-products">
        {Produtos.map((item, i) => {
            if (props.category===item.category){
            return <Item key={item.id} id={item.id} nome={item.nome} imagem={item.imagem} preco={item.preco} />
        }
        else{
            return null;
            }
        })}
      </div>
      <div className="shopcategory-loadmore">
      Carregar mais
      </div>
      <Newsletter />
      <Footer />
      </div>
  );
}

export default ShopCategory;