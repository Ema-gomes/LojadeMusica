import React, { createContext } from "react";
import popular from '../components/Popular/Popular.json';

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {

    const contextValue = {popular};

    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;