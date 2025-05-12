import React, { createContext } from "react";
import ProdutosInfo from '../components/Products.json';

const Produtos = ProdutosInfo.Produtos;

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {

    return(
        <ShopContext.Provider value={{Produtos}}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;