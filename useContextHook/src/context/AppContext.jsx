import React, {createContext} from 'react';


export const AppContext = createContext();

const ContextProvider = (props) =>{
    const phone = "12345678903";
    const name = "Kunj Maheshwari";
    return (
        <AppContext.Provider value={{phone, name}}>
            {props.children}
        </AppContext.Provider>
    )
}

export default ContextProvider;